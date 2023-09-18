import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InformeRenacResponse, InformeRenacResponseResponse, Response } from 'src/app/api/models';
import { FileManagerService, InformeRenacService } from 'src/app/api/services';
import { fileToStringBase64, obtenerNombreArchivoDesdeRuta } from 'src/app/components/shared/Util/file-utils';
import { FolderPath } from 'src/app/models/FilesConfig';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-constanciaanotacion',
  templateUrl: './add-edit-constanciaanotacion.component.html',
  styleUrls: ['./add-edit-constanciaanotacion.component.scss']
})
export class AddEditConstanciaanotacionComponent implements OnInit {

  constanciaForm: FormGroup;
  idInformeRenac?: number = undefined;
  informeRenac?: InformeRenacResponse = undefined;
  MAX_SIZE: number = 52428800;
  constanciaAnotacionFile: any = null;
  constanciaAnotacionBase64: string | undefined = undefined;
  fileAccept = '.doc, .docx, .pdf';

  constructor(
    private _fb: FormBuilder,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    private _dialogRef: MatDialogRef<AddEditConstanciaanotacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.idInformeRenac = data.idInformeRenac;
      this.constanciaForm = this._fb.group({
        constanciaAnotacionBase64: new FormControl(null)
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

          //seteamos el nombre del archvio
          this.constanciaAnotacionFile = new File([], obtenerNombreArchivoDesdeRuta(response.data?.constanciaAnotacionArchivo) ?? '');           

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

    const params = {
      body: {
        idInformeRenac: this.idInformeRenac,
        constanciaAnotacionArchivo: this.constanciaAnotacionFile ? this.constanciaAnotacionFile.name : undefined,
        constanciaAnotacionBase64: this.constanciaAnotacionBase64 ?? undefined
      }
    };

    this._informeRenacService.apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Json(params).subscribe({
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

  onDescargarConstancia() {

    if(this.informeRenac?.constanciaAnotacionArchivo) {
      const params = {
        IdFolderPath: FolderPath.rootPathRenac,
        FilePath: this.informeRenac?.constanciaAnotacionArchivo ?? undefined
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
      this.constanciaAnotacionBase64 = base64String;
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
