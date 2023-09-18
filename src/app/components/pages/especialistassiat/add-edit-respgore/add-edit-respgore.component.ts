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
  selector: 'app-add-edit-respgore',
  templateUrl: './add-edit-respgore.component.html',
  styleUrls: ['./add-edit-respgore.component.scss']
})
export class AddEditRespgoreComponent implements OnInit {

  respuestaGoreForm: FormGroup;
  idInformeRenac?: number = undefined;
  informeRenac?: InformeRenacResponse = undefined;
  informesRenacSelected: number[] = [];
  fileAccept = '.doc, .docx, .pdf';
  MAX_SIZE: number = 52428800;
  respuestaGoreFile: any = null;
  respuestaGoreBase64: string | undefined = undefined;
  maxDate: Date;

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AddEditRespgoreComponent>,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesRenacSelected = data.informesRenacSelected;
    this.idInformeRenac = data.idInformeRenac;
    this.maxDate = new Date();
    this.respuestaGoreForm = this._fb.group({
      respuestaGoreNumero: [undefined, [Validators.required, this.validateNumeroFormat.bind(this)]],
      respuestaGoreFecha: [undefined, Validators.required],
      respuestaGoreBase64: new FormControl(null)
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

          // seteamos el informe renac
          this.informeRenac = response.data;

          //seteamos el nombre del archvio
          this.respuestaGoreFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.respuestaGoreArchivo) ?? '');

            //colocamos los valores en el formulario
            this.respuestaGoreForm.patchValue({
              respuestaGoreNumero: response.data?.respuestaGoreNumero ?? undefined,
              respuestaGoreFecha: response.data?.respuestaGoreFecha ?? undefined
            });

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
      const respuestaGoreArchivo = this.respuestaGoreForm.get('respuestaGoreBase64');
      respuestaGoreArchivo?.setValidators([Validators.required]);
    }

  }

  onFormSubmit() {

    if(this.respuestaGoreForm.valid) {

      const selectedRows =  this.informesRenacSelected;

      Swal.fire({
        title: 'Confirmar la operación',
        text: '¿Desea registrar la respuesta GORE para el informe seleccionado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, registrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {

             const params = {
                body: {
                  idInformeRenac: this.idInformeRenac ?? undefined,
                  respuestaGoreNumero: this.respuestaGoreForm.get('respuestaGoreNumero')?.value ?? undefined,
                  respuestaGoreFecha:  formatDateFromString(this.respuestaGoreForm.get('respuestaGoreFecha')?.value) ?? undefined,
                  respuestaGoreArchivo: this.respuestaGoreFile ? this.respuestaGoreFile.name : undefined,
                  respuestaGoreBase64: this.respuestaGoreBase64,
                  listaInformesRenac: this.idInformeRenac ? this.idInformeRenac.toString() : selectedRows.join(',') ?? undefined
                }
              };


              this._informeRenacService.apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Json(params).subscribe({
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
                    const control = this.respuestaGoreForm.get(error.propertyName) as FormControl;
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

  onDescargarRespuestaGore() {

    if(this.informeRenac?.respuestaGoreArchivo) {
      const params = {
        IdFolderPath: FolderPath.rootPathRenac,
        FilePath: this.informeRenac?.respuestaGoreArchivo ?? undefined
      };
  
      this._fileService.apiFileManagerDownloadFileGet$Json(params).subscribe({
        next: (response) => {
          //descarga el archivo
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
    else{
      Swal.fire({
        icon: 'error',
        title: 'Ha ocurrido un problema',
        text: 'No existe constancia de anotacion para descargar',
        confirmButtonText: 'OK'
      });
    }


  }

  onFileChange(event: any) {
    this.respuestaGoreFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 50MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set informeFile property
        this.respuestaGoreFile = event.target.files[0];
        //set base64 value
        this.convertToBase64(this.respuestaGoreFile);
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

  convertToBase64(file: File | null) {
    fileToStringBase64(file).then((base64String: string | undefined) => {        
      this.respuestaGoreBase64 = base64String;
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

  validateNumeroFormat(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /^[A-Za-z0-9\-\/]+$/;
  
    if (!regex.test(value)) {
      return { formatoInvalido: true };
    }
  
    return null;
  }

}
