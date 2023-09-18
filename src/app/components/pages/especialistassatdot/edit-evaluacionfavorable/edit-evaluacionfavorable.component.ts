import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { InformeRenacResponse, InformeRenacResponseResponse, Response } from 'src/app/api/models';
import { InformeRenacService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-evaluacionfavorable',
  templateUrl: './edit-evaluacionfavorable.component.html',
  styleUrls: ['./edit-evaluacionfavorable.component.scss']
})
export class EditEvaluacionfavorableComponent implements OnInit {

  idInformeRenac: number |  undefined = undefined;
  nomCircunscripcion: string | undefined = undefined;
  informeRenac?: InformeRenacResponse | null = undefined;
  informeRenacForm: FormGroup;
  tiposEvaluacionFavorable = new FormControl();
  listaEvaluacionFavorable?: any[];
  constructor(
    private _fb: FormBuilder,
    private _informeRenacservice: InformeRenacService,
    private _inforemRenacService: InformeRenacService,
    private _dialogRef: MatDialogRef<EditEvaluacionfavorableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.idInformeRenac = data.idInformeRenac;
    this.nomCircunscripcion = data.nomCircunscripcion;
    this.informeRenacForm = this._fb.group({
     });
 
  }

  ngOnInit() {

    this.listaEvaluacionFavorable = [
      {descripcion: 'Favorable', value: true}, 
      {descripcion: 'No favorable', value: false}
    ];

    this.getInformeRenac();
  }

  getInformeRenac() {
    const idInformeRenac = this.idInformeRenac;

    if(idInformeRenac) {

      const params = {
        idInformeRenac: idInformeRenac,
      };

      //obtenemos la informacion mediante GetById
      this._inforemRenacService.apiInformeRenacGetByIdGet$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
          //next callback code
          if(response.data && response.isSuccess) {

            this.informeRenac = response.data;

            if (this.informeRenac?.evaluacionFavorable === true) 
              this.tiposEvaluacionFavorable.setValue(true);
            else 
              this.tiposEvaluacionFavorable.setValue(false);           
      
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

    const params = {
      body: {
        idInformeRenac: this.informeRenac?.idInformeRenac ?? undefined,
        evaluacionFavorable: this.tiposEvaluacionFavorable.value ?? false
      }
    };

    this._inforemRenacService.apiInformeRenacUpdateEvaluacionFavorablePut$Json(params).subscribe({
      next: (response: Response) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
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
          const control = this.informeRenacForm.get(error.propertyName) as FormControl;
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
