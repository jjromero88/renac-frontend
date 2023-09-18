import { Component, Inject, OnInit } from '@angular/core';
import { fileToStringBase64 } from 'src/app/components/shared/Util/file-utils';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DerivacionRenacService } from 'src/app/api/services';
import { Response } from 'src/app/api/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-derivar-informe-espssatdot',
  templateUrl: './derivar-informe-espssatdot.component.html',
  styleUrls: ['./derivar-informe-espssatdot.component.scss']
})
export class DerivarInformeEspssatdotComponent implements OnInit {

  derivacionForm: FormGroup;
  MAX_SIZE: number = 52428800;
  documentoMemoFile: any = null;
  documentoMemoBase64: string | undefined = undefined;
  fileAccept = '.doc, .docx, .pdf';
  informesEspSsiatSelected: number[] = [];

  constructor(
    private _fb: FormBuilder,
    private _derivacionrenacservice: DerivacionRenacService,
    private _dialogRef: MatDialogRef<DerivarInformeEspssatdotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.informesEspSsiatSelected = data.informesEspSsiatSelected;
      this.derivacionForm = this._fb.group({
        documentoMemoBase64: new FormControl(null)
      })
    }

  ngOnInit() { }

  onFormSubmit() {

    const selectedRows =  this.informesEspSsiatSelected;

    Swal.fire({
      title: 'Confirmar la operación',
      text: selectedRows.length > 1 ? '¿Deseas derivar los Infofmes seleccionados?' : '¿Deseas derivar el Infofme seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, derivar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        const params = {
          body: {
            esRetorno: false,
            derivacioninformes: selectedRows.join(',') ?? undefined,
            documentoMemoNombre: this.documentoMemoFile ? this.documentoMemoFile.name : undefined,
            documentoMemoBase64: this.documentoMemoBase64,
            usuarioOrigen: 'E_SSATDOT',
            usuarioDestino: 'S_SSATDOT',
          }
        };

        this._derivacionrenacservice.apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Json(params).subscribe({
          next: (response: Response) => {
            Swal.fire({
              icon: 'success',
              title: 'Se realizó la derivación exitosamente',
              text: response.message ?? undefined,
              confirmButtonText: 'OK'
            });
            this._dialogRef.close(true);
          },
          error: (resp) => {
            console.log(resp);
            const errorsList = resp.error.errors;
            if(errorsList) {
              for (const error of errorsList) {
              const control = this.derivacionForm.get(error.propertyName) as FormControl;
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

  onFileChange(event: any) {
    this.documentoMemoFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 50MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set informeFile property
        this.documentoMemoFile = event.target.files[0];
        //set base64 value
        this.convertToBase64(this.documentoMemoFile);
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
      this.documentoMemoBase64 = base64String;
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
