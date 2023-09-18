import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DerivacionRenacService } from 'src/app/api/services';
import { Response } from 'src/app/api/models';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajustes-espssatdot',
  templateUrl: './ajustes-espssatdot.component.html',
  styleUrls: ['./ajustes-espssatdot.component.scss']
})
export class AjustesEspssatdotComponent implements OnInit {

  ajustesForm: FormGroup;
  informesRenacSelected: number[] = [];

  constructor (
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AjustesEspssatdotComponent>,
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
      text: selectedRows.length > 1 ? '¿Deseas devolver a SSIAT los Infofmes seleccionados?' : '¿Deseas devolver a SSIAT el Infofme seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, devolver a SSIAT',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
          
        const params = {
          body: {
            esRetorno: true,
            derivacioninformes: selectedRows.join(',') ?? undefined,
            observacion: this.ajustesForm.get('observacion')?.value ?? undefined,
            usuarioOrigen: 'E_SSATDOT',
            usuarioDestino: 'E_SSIAT'
          }
        };        

        this._derivacionrenacservice.apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Json(params).subscribe({
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
