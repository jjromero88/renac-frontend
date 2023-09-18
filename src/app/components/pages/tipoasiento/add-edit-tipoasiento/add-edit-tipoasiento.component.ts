import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoAsientoInsertRequest, TipoAsientoResponseResponse, TipoAsientoUpdateRequest } from 'src/app/api/models';
import { TipoAsientoService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-tipoasiento',
  templateUrl: './add-edit-tipoasiento.component.html',
  styleUrls: ['./add-edit-tipoasiento.component.scss']
})
export class AddEditTipoasientoComponent implements OnInit {

  tipoasientoForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _tipoasientoService: TipoAsientoService,
    private _dialogRef: MatDialogRef<AddEditTipoasientoComponent>,
    @Inject(MAT_DIALOG_DATA) public serialkey: number,
    ) {
    this.tipoasientoForm = this._fb.group({
      descripcion: ['', Validators.required],
      codigo: ['', [Validators.required, this.validateCodigo]]
    })
  }

  ngOnInit(): void {
    const idTipoAsiento = this.serialkey;
    //si se trata de un editar
    if(idTipoAsiento){
      //seteamos los parametros request
      const params = {
        idTipoAsiento: idTipoAsiento,
      };

      //obtenemos la empresa mediante el servicio GetById
      this._tipoasientoService.apiTipoAsientoGetByIdGet$Json(params).subscribe({
        next: (response: TipoAsientoResponseResponse) => {
          //next callback code
          if(response.data && response.isSuccess){
            //colocamos los valores en el formulario
            this.tipoasientoForm.patchValue({
              descripcion: response.data.descripcion ?? undefined,
              codigo: response.data.codigo ?? undefined
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
        },
        complete: () => { }
      });
    }
   }

  onFormSubmit() {
    if(this.tipoasientoForm.valid) {

      //validamos si es un editar caso contrario es insertar
      if(this.serialkey) {

        //creamos los parametros de request
        const tipoasientoUpdate: TipoAsientoUpdateRequest = {
          idTipoAsiento: this.serialkey,
          codigo: this.tipoasientoForm.get('codigo')?.value,
          descripcion: this.tipoasientoForm.get('descripcion')?.value
        }

        //consumimos el srvicio para actualizar
        this._tipoasientoService.apiTipoAsientoUpdatePut$Json({ body: tipoasientoUpdate }).subscribe({
          next: (response: TipoAsientoResponseResponse) => {
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
              const control = this.tipoasientoForm.get(error.propertyName) as FormControl;
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
          complete: () => { }
        });
      }
      else {

        //creamos los parametros de request para el Insert
        const tipoasientoInsert: TipoAsientoInsertRequest = {
          codigo: this.tipoasientoForm.get('codigo')?.value,
          descripcion: this.tipoasientoForm.get('descripcion')?.value
        }
  
        //consumimos el servicio para insertar
        this._tipoasientoService.apiTipoAsientoInsertPost$Json({ body: tipoasientoInsert }).subscribe({
          next: (response: TipoAsientoResponseResponse) => {
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
              const control = this.tipoasientoForm.get(error.propertyName) as FormControl;
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
          complete: () => { }
        });
      }    
    }
  }

  validateCodigo(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (value && isNaN(value)) {
      return { 'invalidCodigo': true };
    }
    return null;
  }

}
