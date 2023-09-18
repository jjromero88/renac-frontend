import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InformeRenacResponse, InformeRenacResponseResponse, Response } from 'src/app/api/models';
import { FileManagerService, InformeRenacService } from 'src/app/api/services';
import { formatDateFromString } from 'src/app/components/shared/Util/date-utils';
import { downloadBase64File, fileToStringBase64, obtenerNombreArchivoDesdeRuta } from 'src/app/components/shared/Util/file-utils';
import { FolderPath } from 'src/app/models/FilesConfig';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-constanciafirmada',
  templateUrl: './add-edit-constanciafirmada.component.html',
  styleUrls: ['./add-edit-constanciafirmada.component.scss']
})
export class AddEditConstanciafirmadaComponent implements OnInit {

  constanciaForm: FormGroup;
  idInformeRenac?: number = undefined;
  informeRenac?: InformeRenacResponse = undefined;
  MAX_SIZE: number = 52428800;
  constanciaAnotacionFile: any = null;
  constanciaAnotacionFirmadaArchivo64: string | undefined = undefined;
  fileAccept = '.doc, .docx, .pdf';
  maxDate: Date;

  constructor(
    private _fb: FormBuilder,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    private _dialogRef: MatDialogRef<AddEditConstanciafirmadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.idInformeRenac = data.idInformeRenac;
      this.maxDate = new Date();
      this.constanciaForm = this._fb.group({
        constanciaAnotacionFirmadaFecha: [undefined, Validators.required],
        constanciaAnotacionFirmadaArchivo64: new FormControl(null)
      })
    }

  ngOnInit() {
    
     // obtebemos la informacion del informe
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

          //colocamos los valores en el formulario
          this.constanciaForm.patchValue({
            constanciaAnotacionFirmadaFecha: response.data?.constanciaAnotacionFirmadaFecha ?? undefined
          });

          //seteamos el nombre del archvio
          this.constanciaAnotacionFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.constanciaAnotacionFirmadaArchivo) ?? '');
 
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

  }

  onFormSubmit() {

    if(this.constanciaForm.valid) {

      const params = {
        body: {
          idInformeRenac: this.idInformeRenac,
          constanciaAnotacionFirmadaFecha: formatDateFromString(this.constanciaForm.get('constanciaAnotacionFirmadaFecha')?.value) ?? undefined,
          constanciaAnotacionFirmadaArchivo: this.constanciaAnotacionFile ? this.constanciaAnotacionFile.name : undefined,
          constanciaAnotacionFirmadaArchivo64: this.constanciaAnotacionFirmadaArchivo64 ?? undefined
        }
      };
        
      this._informeRenacService.apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Json(params).subscribe({
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
            const control = this.constanciaForm.get(error.propertyName) as FormControl;
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

  }

  onDescargarConstancia() {

    if(this.informeRenac?.constanciaAnotacionFirmadaArchivo) {
      const params = {
        IdFolderPath: FolderPath.rootPathRenac,
        FilePath: this.informeRenac?.constanciaAnotacionFirmadaArchivo ?? undefined
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
    this.constanciaAnotacionFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 50MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set informeFile property
        this.constanciaAnotacionFile = event.target.files[0];
        //set base64 value
        this.convertToBase64(this.constanciaAnotacionFile);
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
      this.constanciaAnotacionFirmadaArchivo64 = base64String;
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
