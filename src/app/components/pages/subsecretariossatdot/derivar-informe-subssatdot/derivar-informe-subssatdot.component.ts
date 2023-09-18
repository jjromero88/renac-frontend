import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Response, TipoDocumentoRenacListResponse, TipoDocumentoRenacListResponseResponse, TipoDocumentoRenacResponse } from 'src/app/api/models';
import { DerivacionRenacService, TipoDocumentoRenacService } from 'src/app/api/services';
import { formatDate } from 'src/app/components/shared/Util/date-utils';
import { fileToStringBase64 } from 'src/app/components/shared/Util/file-utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-derivar-informe-subssatdot',
  templateUrl: './derivar-informe-subssatdot.component.html',
  styleUrls: ['./derivar-informe-subssatdot.component.scss']
})
export class DerivarInformeSubssatdotComponent implements OnInit {

  derivacionForm: FormGroup;
  informesSubSsiatSelected: number[] = [];
  MAX_SIZE: number = 52428800;
  documentoMemoFile: any = null;
  documentoMemoBase64: string | undefined = undefined;
  fileAccept = '.doc, .docx, .pdf';
  TipoDocumentoRenacList: TipoDocumentoRenacResponse[] = [];

  constructor ( 
    private _fb: FormBuilder,
    private _dialogRef: MatDialogRef<DerivarInformeSubssatdotComponent>,
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

  ngOnInit() {
    this.obtenerTiposDocumento();
  }

  onFormSubmit() {

    const selectedRows =  this.informesSubSsiatSelected;

    if(this.derivacionForm.valid) {

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
              usuarioOrigen: 'S_SSATDOT',
              usuarioDestino: 'E_SSIAT',
              esRetorno: false,
              derivacioninformes: selectedRows.join(',') ?? undefined,
              idTipoDocumento: this.derivacionForm.get('idTipoDocumento')?.value ?? undefined,
              documentoMemoNombre: this.documentoMemoFile ? this.documentoMemoFile.name : undefined,
              fechaDocumento: formatDate(this.derivacionForm.get('fechaDocumento')?.value) ?? undefined,
              numeroDocumento: this.derivacionForm.get('numeroDocumento')?.value ?? undefined,                  
              documentoMemoBase64: this.documentoMemoBase64
            }
          };
          
          this._derivacionrenacservice.apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Json(params).subscribe({
            next: (response: Response) => {
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
            }
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
