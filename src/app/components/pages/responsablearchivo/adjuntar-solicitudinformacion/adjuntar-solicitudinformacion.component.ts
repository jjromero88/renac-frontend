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
  selector: 'app-adjuntar-solicitudinformacion',
  templateUrl: './adjuntar-solicitudinformacion.component.html',
  styleUrls: ['./adjuntar-solicitudinformacion.component.scss']
})
export class AdjuntarSolicitudinformacionComponent implements OnInit {

  solicitudInformacionForm: FormGroup;
  InformeRenac?: InformeRenacResponse = undefined;
  idInformeRenac?: number = undefined;
  informeRenacSelected: number[] = [];
  MAX_SIZE: number = 52428800;
  solicitudFile: any = null;
  evidenciaFile: any = null;
  solicitudBase64: string | undefined = undefined;
  evidenciaBase64: string | undefined = undefined;
  fileAcceptSolicitud = '.doc, .docx, .pdf';
  fileAcceptEvidencia = '.jpg, .jpeg, .png, .pdf';
  maxDate: Date;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AdjuntarSolicitudinformacionComponent>,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informeRenacSelected = data.informeRenacSelected;
    this.idInformeRenac = data.idInformeRenac;
    this.maxDate = new Date();
    this.solicitudInformacionForm = this._fb.group({
      oficioSolicitudNumero: [undefined, [Validators.required, this.validateNumeroFormat.bind(this)]],
      oficioSolicitudFecha: [undefined, Validators.required],
      evidenciaSolicitudFecha: [undefined, Validators.required],
      oficioSolicitudArchivoBase64: new FormControl(null),
      evidenciaSolicitudArchivoBase64: new FormControl(null)
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

            if(response.data?.oficioSolicitudArchivo && response.data?.evidenciaSolicitudArchivo) {
              //seteamos los valores del informe renac
              this.InformeRenac = response.data;
    
              //seteamos el nombre del archvio
              this.solicitudFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.oficioSolicitudArchivo) ?? '', { type: 'application/pdf' });
              this.evidenciaFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.evidenciaSolicitudArchivo) ?? '');
    
              //colocamos los valores en el formulario
              this.solicitudInformacionForm.patchValue({
              oficioSolicitudNumero: response.data?.oficioSolicitudNumero ?? undefined,
              oficioSolicitudFecha: response.data?.oficioSolicitudFecha ?? undefined,
              evidenciaSolicitudFecha: response.data?.evidenciaSolicitudFecha ?? undefined
            });
            }
            else {
              this._dialogRef.close(true);
              Swal.fire({
                icon: 'warning',
                title: 'No hay información',
                text: 'El informe seleccionado no cuenta con el registro de solicitud de información',
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
      const oficioArchivo = this.solicitudInformacionForm.get('oficioSolicitudArchivoBase64');
      const evidenciaArchivo = this.solicitudInformacionForm.get('evidenciaSolicitudArchivoBase64');
      oficioArchivo?.setValidators([Validators.required]);
      evidenciaArchivo?.setValidators([Validators.required]);
    }
  }

  onFormSubmit() {

    if(this.solicitudInformacionForm.valid) {

      const selectedRows =  this.informeRenacSelected;

      Swal.fire({
        title: 'Confirmar la operación',
        text: selectedRows.length > 1 ? '¿Desea registrar la información para los informes seleccionados?' : '¿Desea registrar la información para el informe seleccionado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, registrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
             const params = {
                body: {
                  oficioSolicitudNumero: this.solicitudInformacionForm.get('oficioSolicitudNumero')?.value ?? undefined,
                  oficioSolicitudFecha:  formatDateFromString(this.solicitudInformacionForm.get('oficioSolicitudFecha')?.value) ?? undefined,
                  evidenciaSolicitudFecha: formatDateFromString(this.solicitudInformacionForm.get('evidenciaSolicitudFecha')?.value) ?? undefined,
                  listaInformesRenac: selectedRows.join(',') ?? undefined,
                  oficioSolicitudArchivo: this.solicitudFile ? this.solicitudFile.name : undefined,
                  evidenciaSolicitudArchivo: this.evidenciaFile ? this.evidenciaFile.name : undefined,
                  oficioSolicitudArchivoBase64: this.solicitudBase64,
                  evidenciaSolicitudArchivoBase64: this.evidenciaBase64
                }
              };

              this._informeRenacService.apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Json(params).subscribe({
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
                    const control = this.solicitudInformacionForm.get(error.propertyName) as FormControl;
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

  onFileChange(event: any, fileType: 'solicitud' | 'evidencia'){

    if (fileType === 'solicitud') {      
      this.solicitudFile = null;
      // See if any file(s) have been selected from input
      if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 50MB
        if (event.target.files[0].size < this.MAX_SIZE) {
          // Set informeFile property
          this.solicitudFile = event.target.files[0];
          //set base64 value
          this.convertToBase64(this.solicitudFile, fileType);
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
      this.evidenciaFile = null;
      // See if any file(s) have been selected from input
      if (event.target.files && event.target.files.length > 0) {
        // Don't allow file sizes over 50MB
        if (event.target.files[0].size < this.MAX_SIZE) {
          // Set informeFile property
          this.evidenciaFile = event.target.files[0];
          //set base64 value
          this.convertToBase64(this.evidenciaFile, fileType);
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

  convertToBase64(file: File | null, fileType: 'solicitud' | 'evidencia') {

    if (fileType === 'solicitud') {

      fileToStringBase64(file).then((base64String: string | undefined) => {        
        this.solicitudBase64 = base64String;
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
        this.evidenciaBase64 = base64String;
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
