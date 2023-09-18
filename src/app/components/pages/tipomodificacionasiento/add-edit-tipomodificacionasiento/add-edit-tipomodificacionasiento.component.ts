import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoModificacionAsientoInsertRequest, TipoModificacionAsientoResponseResponse, TipoModificacionAsientoUpdateRequest } from 'src/app/api/models';
import { TipoModificacionAsientoService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-tipomodificacionasiento',
  templateUrl: './add-edit-tipomodificacionasiento.component.html',
  styleUrls: ['./add-edit-tipomodificacionasiento.component.scss']
})
export class AddEditTipomodificacionasientoComponent implements OnInit {

  tipoModificacionForm: FormGroup;
  serialkey: number | undefined;

  constructor(
    private _fb: FormBuilder,
    private _tipomodificacionService: TipoModificacionAsientoService,
    private _dialogRef: MatDialogRef<AddEditTipomodificacionasientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.serialkey = data.serialkey ?? undefined;
      this.tipoModificacionForm = this._fb.group({
        descripcion: ['', Validators.required]
        })
      }

  ngOnInit(): void {

    const idTipoModificacion = this.serialkey;
    //si se trata de un editar
    if(idTipoModificacion){
      //seteamos los parametros request
      const params = {
        idTipoModificacionAsiento: idTipoModificacion,
      };

      //obtenemos la empresa mediante el servicio GetById
      this._tipomodificacionService.apiTipoModificacionAsientoGetByIdGet$Json(params).subscribe({
        next: (response: TipoModificacionAsientoResponseResponse) => {
          //next callback code
          if(response.data && response.isSuccess){
            //colocamos los valores en el formulario
            this.tipoModificacionForm.patchValue({
              descripcion: response.data.descripcion ?? undefined
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

  }

  onFormSubmit() {
    if(this.tipoModificacionForm.valid) {

      if(this.serialkey) {

        //creamos los parametros de request
        const params: TipoModificacionAsientoUpdateRequest = {
          idTipoModificacionAsiento: this.serialkey,
          descripcion: this.tipoModificacionForm.get('descripcion')?.value
        }

        //consumimos el srvicio para actualizar
        this._tipomodificacionService.apiTipoModificacionAsientoUpdatePut$Json({ body: params }).subscribe({
          next: (response: TipoModificacionAsientoResponseResponse) => {
            //next callback code
            Swal.fire({
              icon: 'success',
              title: 'Registro exitoso',
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
              const control = this.tipoModificacionForm.get(error.propertyName) as FormControl;
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
          }
        });
      }
      else {

        //creamos los parametros de request para el Insert
        const params: TipoModificacionAsientoInsertRequest = {
          descripcion: this.tipoModificacionForm.get('descripcion')?.value
        }
  
        //consumimos el servicio para insertar
        this._tipomodificacionService.apiTipoModificacionAsientoInsertPost$Json({ body: params }).subscribe({
          next: (response: TipoModificacionAsientoResponseResponse) => {
            //next callback code
            Swal.fire({
              icon: 'success',
              title: 'Registro exitoso',
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
              console.log(errorsList);
              for (const error of errorsList) {
              const control = this.tipoModificacionForm.get(error.propertyName) as FormControl;
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
          }
        });
      }    
    }
  }

}
