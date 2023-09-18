import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Response } from 'src/app/api/models';
import { DerivacionRenacService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajustes-subssatdot',
  templateUrl: './ajustes-subssatdot.component.html',
  styleUrls: ['./ajustes-subssatdot.component.scss']
})
export class AjustesSubssatdotComponent implements OnInit {

  ajustesForm: FormGroup;
  informesRenacSelected: number[] = [];

  constructor (
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AjustesSubssatdotComponent>,
    private _derivacionrenacservice: DerivacionRenacService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesRenacSelected = data.informesRenacSelected;
    this.ajustesForm = this._fb.group({
      observacion: [undefined, Validators.required],
    })
  }

  ngOnInit() { 

  }

  onFormSubmit() {

    const selectedRows =  this.informesRenacSelected;

    Swal.fire({
      title: 'Confirmar la operación',
      text: selectedRows.length > 1 ? '¿Deseas devolver al especialista SSATDOT los Infofmes seleccionados?' : '¿Deseas devolver al especialista SSATDOT el Infofme seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, devolver a SSATDOT',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          
        const params = {
          body: {
            esRetorno: true,
            derivacioninformes: selectedRows.join(',') ?? undefined,
            observacion: this.ajustesForm.get('observacion')?.value ?? undefined,
            usuarioOrigen: 'S_SSATDOT',
            usuarioDestino: 'E_SSATDOT'
          }
        };

        this._derivacionrenacservice.apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Json(params).subscribe({
          next: (response: Response) => {
            Swal.fire({
              icon: 'success',
              title: 'Se realizó la devolucion de informes al especialista SSIAT exitosamente',
              text: response.message ?? undefined,
              confirmButtonText: 'OK'
            });

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
