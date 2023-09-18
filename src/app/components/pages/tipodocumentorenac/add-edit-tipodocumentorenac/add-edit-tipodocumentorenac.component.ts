import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TipoDocumentoRenacInsertRequest, TipoDocumentoRenacResponseResponse, TipoDocumentoRenacUpdateRequest } from 'src/app/api/models';
import { TipoDocumentoRenacService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-tipodocumentorenac',
  templateUrl: './add-edit-tipodocumentorenac.component.html',
  styleUrls: ['./add-edit-tipodocumentorenac.component.scss']
})
export class AddEditTipodocumentorenacComponent implements OnInit {

  tipoDocumentoForm: FormGroup;

  constructor ( 
    private _fb: FormBuilder,
    private _tipoDocumentoRenacService: TipoDocumentoRenacService,
    private _dialogRef: MatDialogRef<AddEditTipodocumentorenacComponent>,
    @Inject(MAT_DIALOG_DATA) public serialkey: number,
  ) {
    this.tipoDocumentoForm = this._fb.group({
      descripcion: ['', Validators.required],
      codigo: ['', [Validators.required, this.validateCodigo]]
    })
  }

  ngOnInit(): void {
    const idTipoDocumento = this.serialkey;

    if(idTipoDocumento) {

      const params = {
        idTipoDocumentoRenac: idTipoDocumento,
      };

      this._tipoDocumentoRenacService.apiTipoDocumentoRenacGetByIdGet$Json(params).subscribe({
        next: (response: TipoDocumentoRenacResponseResponse) => {
          if(response.data && response.isSuccess){
            this.tipoDocumentoForm.patchValue({
              descripcion: response.data.descripcion ?? undefined,
              codigo: response.data.codigo ?? undefined
            });
          }
        },
        error: (resp: any) => {
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
    if(this.tipoDocumentoForm.valid) {

      if(this.serialkey) {

        const request: TipoDocumentoRenacUpdateRequest = {
          idTipoDocumentoRenac: this.serialkey,
          codigo: this.tipoDocumentoForm.get('codigo')?.value,
          descripcion: this.tipoDocumentoForm.get('descripcion')?.value
        }

        //consumimos el srvicio para actualizar
        this._tipoDocumentoRenacService.apiTipoDocumentoRenacUpdatePut$Json({ body: request }).subscribe({
          next: (response: TipoDocumentoRenacResponseResponse) => {
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
              const control = this.tipoDocumentoForm.get(error.propertyName) as FormControl;
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
        const request: TipoDocumentoRenacInsertRequest = {
          codigo: this.tipoDocumentoForm.get('codigo')?.value,
          descripcion: this.tipoDocumentoForm.get('descripcion')?.value
        }
  
        //consumimos el servicio para insertar
        this._tipoDocumentoRenacService.apiTipoDocumentoRenacInsertPost$Json({ body: request }).subscribe({
          next: (response: TipoDocumentoRenacResponseResponse) => {
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
              const control = this.tipoDocumentoForm.get(error.propertyName) as FormControl;
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

  validateCodigo(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    if (value && isNaN(value)) {
      return { 'invalidCodigo': true };
    }
    return null;
  }

}
