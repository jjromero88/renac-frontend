import { Component, OnInit, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Response } from 'src/app/api/models';
import { InformeRenacService } from 'src/app/api/services';
import { fileToStringBase64 } from 'src/app/components/shared/Util/file-utils';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-informes-opinion-favorable',
  templateUrl: './edit-informes-opinion-favorable.component.html',
  styleUrls: ['./edit-informes-opinion-favorable.component.scss']
})
export class EditInformesOpinionFavorableComponent implements OnInit {

  InformesOpinionFavorableForm: FormGroup;
  MAX_SIZE: number = 52428800;
  InformesOpinionFavorableFile: any = null;
  InformesOpinionFavorableBase64: string | undefined = undefined;
  fileAccept = '.doc, .docx, .pdf';
  informesRenacSelected: number[] = [];

  constructor (
    private _datePipe: DatePipe,
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<EditInformesOpinionFavorableComponent>,
    private _informeRenacService: InformeRenacService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesRenacSelected = data.informesRenacSelected;
    this.InformesOpinionFavorableForm = this._fb.group({
      informeFavorableNumero: [undefined, [Validators.required, this.validateNumeroFormat.bind(this)]],
      informeFavorableFecha: [undefined, Validators.required],
      informeFavorableArchivoBase64: new FormControl(null)
    })
  }

  ngOnInit() {

  }

  onFormSubmit() {

    if(this.InformesOpinionFavorableForm.valid) {
    
      const selectedRows =  this.informesRenacSelected;
  
      Swal.fire({
        title: 'Confirmar la operación',
        text: selectedRows.length > 1 ? '¿Desea registrar el informe de opinion favorable para los Infofmes seleccionados?' : '¿Desea registrar el informe de opinion favorable para el Infofme seleccionado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, registrar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          
          const params = {
            body: {
              informeFavorableArchivo: this.InformesOpinionFavorableFile.name ?? undefined,
              informeFavorableNumero: this.InformesOpinionFavorableForm.get('informeFavorableNumero')?.value ?? undefined,
              informeFavorableFecha: this._datePipe.transform(this.InformesOpinionFavorableForm.get('informeFavorableFecha')?.value, 'dd/MM/yyyy') ?? undefined,
              listaInformesRenac: selectedRows.join(',') ?? undefined,   
              informeFavorableArchivoBase64: this.InformesOpinionFavorableBase64                   
            }
          };

          this._informeRenacService.apiInformeRenacUpdateInformesOpinionFavorablePut$Json(params).subscribe({
            next: (response: Response) => {
              Swal.fire({
                icon: 'success',
                title: 'Se regisro el informe de opinion favorable exitosamente',
                text: response.message ?? undefined,
                confirmButtonText: 'OK'
              });
              //actualiza la tabla
              this._dialogRef.close(true);
            },
            error: (resp) => {
              //error callback code
              console.log(resp);
              const errorsList = resp.errors;
              if(errorsList) {
                for (const error of errorsList) {
                const control = this.InformesOpinionFavorableForm.get(error.propertyName) as FormControl;
                if (control)
                  control.setErrors({ 'serverError': error.errorMessage });            
                }
              }
              else {
                Swal.fire({
                  icon: 'error',
                  title: 'Ha ocurrido un problema',
                  text: resp.message,
                  confirmButtonText: 'OK'
                });
              }        
            },
          });
          
        }
      });
    }
  }

  onFileChange(event: any) {
    this.InformesOpinionFavorableFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 50MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set informeFile property
        this.InformesOpinionFavorableFile = event.target.files[0];
        //set base64 value
        this.convertToBase64(this.InformesOpinionFavorableFile);
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
      this.InformesOpinionFavorableBase64 = base64String;
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

  validateNumeroFormat(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    const regex = /^[A-Za-z0-9\-\/]+$/;
  
    if (!regex.test(value)) {
      return { formatoInvalido: true };
    }
  
    return null;
  }

}
