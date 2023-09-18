import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DerivacionRenacResponseResponse } from 'src/app/api/models';
import { DerivacionRenacService } from 'src/app/api/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asignar-especialista',
  templateUrl: './asignar-especialista.component.html',
  styleUrls: ['./asignar-especialista.component.scss']
})
export class AsignarEspecialistaComponent implements OnInit {

  derivacionForm: FormGroup;
  informesSubSsiatSelected: number[] = [];

  listaEspecialistas = [
    { value: '1', nomEspecialista: 'John James Beraún Chaca' },
    { value: '2', nomEspecialista: 'Especialista 2' },
    { value: '3', nomEspecialista: 'Especialista 3' },
  ];

  constructor ( 
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<AsignarEspecialistaComponent>,
    private _derivacionrenacservice: DerivacionRenacService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesSubSsiatSelected = data.informesSubSsiatSelected;
    this.derivacionForm = this._fb.group({
      idEspecialistaSsatdot: [undefined, Validators.required]
    })
  }

  ngOnInit() {
  }

  onFormSubmit() {

    if(this.derivacionForm.valid) {
    
      const selectedRows =  this.informesSubSsiatSelected;
  
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
                  idEspecialistaSsatdot: this.derivacionForm.get('idEspecialistaSsatdot')?.value ?? undefined,
                  usuarioOrigen: 'S_SSATDOT',
                  usuarioDestino: 'E_SSATDOT'
                }
              };
               
  
              this._derivacionrenacservice.apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Json(params).subscribe({
                next: (response: DerivacionRenacResponseResponse) => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Se realizó la derivación exitosamente',
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

  }

}
