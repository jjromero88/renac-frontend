import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InformeRenacResponse, InformeRenacResponseResponse, Response } from 'src/app/api/models';
import { FileManagerService, InformeRenacService } from 'src/app/api/services';
import { formatDateFromString } from 'src/app/components/shared/Util/date-utils';
import { downloadBase64File, fileToStringBase64, obtenerNombreArchivoDesdeRuta } from 'src/app/components/shared/Util/file-utils';
import { FolderPath } from 'src/app/models/FilesConfig';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-adjuntar-anotacion',
  templateUrl: './adjuntar-anotacion.component.html',
  styleUrls: ['./adjuntar-anotacion.component.scss']
})
export class AdjuntarAnotacionComponent implements OnInit {

  registroAnotacionForm: FormGroup;
  InformeRenac?: InformeRenacResponse = undefined;
  idInformeRenac?: number = undefined;
  informeRenacSelected: number[] = [];
  MAX_SIZE: number = 52428800;
  oficioAnotacionFile: any = null;
  evidenciaAnotacionFile: any = null;
  oficioAnotacionArchivoBase64: string | undefined = undefined;
  evidenciaAnotacionArchivoBase64: string | undefined = undefined;
  fileAcceptOficioAnotacion = '.doc, .docx, .pdf';
  fileAcceptEvidenciaAnotacion = '.jpg, .jpeg, .png, .pdf';
  maxDate: Date;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AdjuntarAnotacionComponent>,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informeRenacSelected = data.informeRenacSelected;
    this.idInformeRenac = data.idInformeRenac;
    this.maxDate = new Date();
    this.registroAnotacionForm = this._fb.group({
      oficioAnotacionNumero: [undefined, [Validators.required, this.validateNumeroFormat.bind(this)]],
      oficioAnotacionFecha: [undefined, Validators.required],
      evidenciaAnotacionFecha: [undefined, Validators.required],
      oficioAnotacionArchivoBase64: new FormControl(null),
      evidenciaAnotacionArchivoBase64: new FormControl(null)
    })
  }

  ngOnInit() {
    if(this.idInformeRenac) {

      const params = {
        idInformeRenac: this.idInformeRenac,
      };

      //obtenemos la informacion mediante GetById
      this._informeRenacService.apiInformeRenacGetByIdGet$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
          //next callback code
          if(response.data && response.isSuccess) {

          if(response.data?.oficioAnotacionArchivo && response.data?.evidenciaAnotacionArchivo) {
            //seteamos los valores del informe renac
            this.InformeRenac = response.data;
  
            //seteamos el nombre del archvio
            this.oficioAnotacionFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.oficioAnotacionArchivo) ?? '', { type: 'application/pdf' });
            this.evidenciaAnotacionFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.evidenciaAnotacionArchivo) ?? '');
  
              //colocamos los valores en el formulario
              this.registroAnotacionForm.patchValue({
                oficioAnotacionNumero: response.data?.oficioAnotacionNumero ?? undefined,
                oficioAnotacionFecha: response.data?.oficioAnotacionFecha ?? undefined,
                evidenciaAnotacionFecha: response.data?.evidenciaAnotacionFecha ?? undefined
              });
          }
          else {
            this._dialogRef.close(true);
            Swal.fire({
              icon: 'warning',
              title: 'No hay información',
              text: 'El informe seleccionado no cuenta con el registro de anotación',
              confirmButtonText: 'OK'
            });
          }

          

          }
        },
        error: (resp: any) => {
          //error callback code
          console.log(resp);
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema',
            text: resp.error.message,
            confirmButtonText: 'OK'
          });
        }
      });

    }
    else {
      const oficioArchivo = this.registroAnotacionForm.get('oficioAnotacionArchivoBase64');
      const evidenciaArchivo = this.registroAnotacionForm.get('evidenciaAnotacionArchivoBase64');
      oficioArchivo?.setValidators([Validators.required]);
      evidenciaArchivo?.setValidators([Validators.required]);
    }
  }

  onFormSubmit() {

    if(this.registroAnotacionForm.valid) {

      const selectedRows =  this.informeRenacSelected;

      Swal.fire({
        title: 'Confirmar la operación',
        text: selectedRows.length > 1 ? '¿Desea registrar la anotación para los informes seleccionados?' : '¿Desea registrar la anotación para el informe seleccionado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, registrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
             const params = {
                body: {
                  oficioAnotacionNumero: this.registroAnotacionForm.get('oficioAnotacionNumero')?.value ?? undefined,
                  oficioAnotacionFecha: formatDateFromString(this.registroAnotacionForm.get('oficioAnotacionFecha')?.value) ?? undefined,
                  oficioAnotacionArchivo: this.oficioAnotacionFile ? this.oficioAnotacionFile.name : undefined,
                  evidenciaAnotacionFecha: formatDateFromString(this.registroAnotacionForm.get('evidenciaAnotacionFecha')?.value) ?? undefined,
                  evidenciaAnotacionArchivo: this.evidenciaAnotacionFile ? this.evidenciaAnotacionFile.name : undefined,
                  oficioAnotacionArchivoBase64: this.oficioAnotacionArchivoBase64,
                  evidenciaAnotacionArchivoBase64: this.evidenciaAnotacionArchivoBase64,
                  listaInformesRenac: selectedRows.join(',') ?? undefined
                }
              };

              this._informeRenacService.apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Json(params).subscribe({
                next: (response: Response) => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Se registró la información satisfactoriamente',
                    text: response.message ?? undefined,
                    confirmButtonText: 'OK'
                  });
                  //actualiza la tabla
                  this._dialogRef.close(true);
                },
                error: (resp) => {
                  //error callback code
                  console.log(resp);
                  const errorsList = resp.error.errors;
                  if(errorsList) {
                    for (const error of errorsList) {
                    const control = this.registroAnotacionForm.get(error.propertyName) as FormControl;
                    if (control)
                      control.setErrors({ 'serverError': error.errorMessage });            
                    }
                  }
                  else {
                    Swal.fire({
                      icon: 'error',
                      title: 'Ha ocurrido un problema',
                      text: resp.error.message,
                      confirmButtonText: 'OK'
                    });
                  }        
                },
              });
              
        }
      });

    }

  }

  onDownloadDocument(filePath: string | null | undefined) {

    if(filePath){
      const params = {
      IdFolderPath: FolderPath.rootPathRenac,
      FilePath: filePath
    };

    this._fileService.apiFileManagerDownloadFileGet$Json(params).subscribe({
      next: (response) => {
        downloadBase64File(response.data?.base64String, response.data?.contentType, response.data?.fileName);
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un problema',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });
    }
    
    
  }

  onFileChange(event: any, fileType: 'oficio' | 'evidencia'){

    if (fileType === 'oficio') {      
      this.oficioAnotacionFile = null;
      // See if any file(s) have been selected from input
      if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 50MB
        if (event.target.files[0].size < this.MAX_SIZE) {
          // Set informeFile property
          this.oficioAnotacionFile = event.target.files[0];
          //set base64 value
          this.convertToBase64(this.oficioAnotacionFile, fileType);
        }
        else {
          // Display error message
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema',
            text: 'File: ' + event.target.files[0].name + ' es demasiado grande para subirlo.',
            confirmButtonText: 'OK'
          });
        }
      }    
    } else if (fileType === 'evidencia') {
      this.evidenciaAnotacionFile = null;
      // See if any file(s) have been selected from input
      if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 50MB
        if (event.target.files[0].size < this.MAX_SIZE) {
          // Set informeFile property
          this.evidenciaAnotacionFile = event.target.files[0];
          //set base64 value
          this.convertToBase64(this.evidenciaAnotacionFile, fileType);
        }
        else {
          // Display error message
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema',
            text: 'File: ' + event.target.files[0].name + ' es demasiado grande para subirlo.',
            confirmButtonText: 'OK'
          });
        }
      }
    }

  }

  convertToBase64(file: File | null, fileType: 'oficio' | 'evidencia') {

    if (fileType === 'oficio') {

      fileToStringBase64(file).then((base64String: string | undefined) => {        
        this.oficioAnotacionArchivoBase64 = base64String;
      })
      .catch((error: any) => {
        Swal.fire({
              icon: 'error',
              title: 'Ha ocurrido un problema',
              text: error,
              confirmButtonText: 'OK'
            });
      }); 

    }
    else if (fileType === 'evidencia') {

      fileToStringBase64(file).then((base64String: string | undefined) => {        
        this.evidenciaAnotacionArchivoBase64 = base64String;
      })
      .catch((error: any) => {
        Swal.fire({
              icon: 'error',
              title: 'Ha ocurrido un problema',
              text: error,
              confirmButtonText: 'OK'
            });
      }); 

    }

  }

  validateNumeroFormat(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /^[A-Za-z0-9\-\/]+$/;
  
    if (!regex.test(value)) {
      return { formatoInvalido: true };
    }
  
    return null;
  }

}
