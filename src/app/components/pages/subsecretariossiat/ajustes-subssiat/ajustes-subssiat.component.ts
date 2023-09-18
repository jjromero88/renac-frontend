import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DerivacionRenacResponseResponse } from 'src/app/api/models';
import { DerivacionRenacService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajustes-subssiat',
  templateUrl: './ajustes-subssiat.component.html',
  styleUrls: ['./ajustes-subssiat.component.scss']
})
export class AjustesSubssiatComponent implements OnInit {

  ajustesForm: FormGroup;
  informesSubSsiatSelected: number[] = [];

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AjustesSubssiatComponent>,
    private _derivacionrenacservice: DerivacionRenacService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesSubSsiatSelected = data.informesSubSsiatSelected;
    this.ajustesForm = this._fb.group({
      observacion: [undefined, Validators.required],
    })
  }

  ngOnInit() {
  }

  onFormSubmit() {

    const selectedRows =  this.informesSubSsiatSelected;

    Swal.fire({
      title: 'Confirmar la operación',
      text: selectedRows.length > 1 ? '¿Deseas devolver a SSIAT los Infofmes seleccionados?' : '¿Deseas devolver a SSIAT el Infofme seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, devolver a SSIAT',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
          
        const params = {
          body: {
            derivacioninformes: selectedRows.join(',') ?? undefined,
            observacion: this.ajustesForm.get('observacion')?.value ?? undefined,
            esRetorno: true,
            usuarioOrigen: 'S_SSIAT',
            usuarioDestino: 'E_SSIAT'
          }
        };        

        this._derivacionrenacservice.apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Json(params).subscribe({
          next: (response: DerivacionRenacResponseResponse) => {
            Swal.fire({
              icon: 'success',
              title: 'Se realizó la devolucion de informes a SSIAT exitosamente',
              text: response.message ?? undefined,
              confirmButtonText: 'OK'
            });
            //actualiza la tabla
            this._dialogRef.close(true);
          },
          error: (resp) => {
            console.log(resp.error.errors);
          const errorsList = resp.error.errors;
          if(errorsList) {
            for (const error of errorsList) {
            const control = this.ajustesForm.get(error.propertyName) as FormControl;
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
