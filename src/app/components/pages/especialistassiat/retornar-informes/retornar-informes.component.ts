import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DerivacionRenacResponseResponse } from 'src/app/api/models';
import { DerivacionRenacService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-retornar-informes',
  templateUrl: './retornar-informes.component.html',
  styleUrls: ['./retornar-informes.component.scss']
})
export class RetornarInformesComponent implements OnInit {

  retornoInformesForm: FormGroup;
  informesRenacSelected: number[] = [];

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<RetornarInformesComponent>,
    private _derivacionrenacservice: DerivacionRenacService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesRenacSelected = data.informesRenacSelected;
    this.retornoInformesForm = this._fb.group({
      observacion: [undefined, Validators.required],
    })
  }


  ngOnInit() {

  }

  onFormSubmit() {

    const selectedRows =  this.informesRenacSelected;

    Swal.fire({
      title: 'Confirmar la operación',
      text: selectedRows.length > 1 ? '¿Desea retornar para modificación los informes seleccionados?' : '¿Desea retornar para modificación el Infofme seleccionado?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, retornar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        
          
        const params = {
          body: {
            derivacioninformes: selectedRows.join(',') ?? undefined,
            observacion: this.retornoInformesForm.get('observacion')?.value ?? undefined,
            esRetorno: true,
            usuarioOrigen: 'E_SSIAT',
            usuarioDestino: 'E_SSIAT'
          }
        };        

        this._derivacionrenacservice.apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Json(params).subscribe({
          next: (response: DerivacionRenacResponseResponse) => {
            Swal.fire({
              icon: 'success',
              title: selectedRows.length > 1 ? 'Se realizó el retorno de los informes satisfactoriamente' : 'Se realizó el retorno del informe satisfactoriamente',
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
            const control = this.retornoInformesForm.get(error.propertyName) as FormControl;
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
