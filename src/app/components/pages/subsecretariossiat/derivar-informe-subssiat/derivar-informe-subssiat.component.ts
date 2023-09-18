import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DerivacionRenacResponseResponse, TipoDocumentoRenacListResponse, TipoDocumentoRenacListResponseResponse } from 'src/app/api/models';
import { DerivacionRenacService, TipoDocumentoRenacService } from 'src/app/api/services';
import { formatDate } from 'src/app/components/shared/Util/date-utils';
import { fileToStringBase64 } from 'src/app/components/shared/Util/file-utils';
import { TipoDocumentoRenacResponse } from '../../../../api/models/tipo-documento-renac-response';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-derivar-informe-subssiat',
  templateUrl: './derivar-informe-subssiat.component.html',
  styleUrls: ['./derivar-informe-subssiat.component.scss']
})
export class DerivarInformeSubssiatComponent implements OnInit {

  derivacionForm: FormGroup;
  MAX_SIZE: number = 52428800;
  documentoMemoFile: any = null;
  documentoMemoBase64: string | undefined = undefined;
  fileAccept = '.doc, .docx, .pdf';
  informesSubSsiatSelected: number[] = [];
  TipoDocumentoRenacList: TipoDocumentoRenacResponse[] = [];

  constructor(
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<DerivarInformeSubssiatComponent>,
    private _derivacionrenacservice: DerivacionRenacService,
    private _tipoDocumentoRenacService: TipoDocumentoRenacService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.informesSubSsiatSelected = data.informesSubSsiatSelected;
    this.derivacionForm = this._fb.group({
      idTipoDocumento: [undefined, Validators.required],
      numeroDocumento: [undefined, [Validators.required, this.validateNumeroFormat.bind(this)]],
      fechaDocumento: [undefined, Validators.required],
      documentoMemoBase64: new FormControl(null)
    })
  }

  ngOnInit(){
    this.obtenerTiposDocumento();
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
                  derivacioninformes: selectedRows.join(',') ?? undefined,
                  documentoMemoBase64: this.documentoMemoBase64,
                  documentoMemoNombre: this.documentoMemoFile ? this.documentoMemoFile.name : undefined,
                  esRetorno: false,
                  idTipoDocumento: this.derivacionForm.get('idTipoDocumento')?.value ?? undefined,
                  fechaDocumento: formatDate(this.derivacionForm.get('fechaDocumento')?.value) ?? undefined,
                  numeroDocumento: this.derivacionForm.get('numeroDocumento')?.value ?? undefined,
                  usuarioDestino: 'S_SSATDOT',
                  usuarioOrigen: 'S_SSIAT',               
                }
              };
               
              this._derivacionrenacservice.apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Json(params).subscribe({
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

  obtenerTiposDocumento() {
    this._tipoDocumentoRenacService.apiTipoDocumentoRenacGetListGet$Json().subscribe({
      next: (response: TipoDocumentoRenacListResponseResponse) => {
        if (response.data) {         
          const dataList: TipoDocumentoRenacListResponse | undefined = response.data;
          this.TipoDocumentoRenacList = (dataList as TipoDocumentoRenacResponse[]) ?? [];
        }
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un problema al obtener los tipos de asiento',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });
  }

  onFileChange(event: any) {
    this.documentoMemoFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 50MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set informeFile property
        this.documentoMemoFile = event.target.files[0];
        //set base64 value
        this.convertToBase64(this.documentoMemoFile);
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
      this.documentoMemoBase64 = base64String;
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
