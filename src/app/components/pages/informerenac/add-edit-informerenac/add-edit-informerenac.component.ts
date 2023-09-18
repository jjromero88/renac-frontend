import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { debounceTime, switchMap, tap, filter } from 'rxjs/operators';
import { CircunscripcionListResponse, InformeRenacResponseResponse, TipoCircunscripcionListResponse } from 'src/app/api/models';
import { CircunscripcionService, InformeRenacService, TipoCircunscripcionService } from 'src/app/api/services';
import { SearchConfig } from 'src/app/models/SearchConfig';
import { formatDate, formatDateFromString } from 'src/app/components/shared/Util/date-utils';
import { fileToStringBase64 } from 'src/app/components/shared/Util/file-utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-informerenac',
  templateUrl: './add-edit-informerenac.component.html',
  styleUrls: ['./add-edit-informerenac.component.scss']
})
export class AddEditInformerenacComponent implements OnInit {
  
  informeRenacForm: FormGroup; 
  tiposCircunscripcionControl = new FormControl();
  options?: any[] = [];
  loading = false;
  selectedCircunscripcion: any;
  searchTextCircunscripcion!: string;
  minSearchLength = SearchConfig.minSearchLengthAutocomplete;
  listaTipoCircunscripciones?: any[];
  fileAccept = '.doc, .docx, .pdf';
  selectedTipCircunscripcion: number = 0;
  MAX_SIZE: number = 52428800;
  informeFile: any = null;
  informeBase64: string | undefined = undefined;

  constructor(
    private _fb: FormBuilder,
    private _inforemRenacService: InformeRenacService,
    private _circunscripcionService: CircunscripcionService,
    private _tipoCircunscripcionService: TipoCircunscripcionService,
    private _dialogRef: MatDialogRef<AddEditInformerenacComponent>,
    @Inject(MAT_DIALOG_DATA) public serialkey: number
    ) {
      this.informeRenacForm = this._fb.group({
        idCircunscripcion: ['', Validators.required],
        numero: ['', [Validators.required, this.validateNumeroFormat.bind(this)]],
        fecha: ['', Validators.required],
        InformeAnotacionBase64: new FormControl(null)
      })
    }

  ngOnInit() {
    //carga los radio con tipos de circunscripcion
    this.getTipoCircunscripciones();
    //carga el autocomplete de circunscripciones
    this.getCircunscripciones();
    
    //si el serialkey tiene valor obtiene el informerenac
    const idInformeRenac = this.serialkey;
    if(idInformeRenac){
      //seteamos los parametros request
      const params = {
        idInformeRenac: idInformeRenac,
      };

      //obtenemos la informacion mediante GetById
      this._inforemRenacService.apiInformeRenacGetByIdGet$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
          //next callback code
          if(response.data && response.isSuccess) {

          //seteamos el radio seleccionado por default
          this.selectedTipCircunscripcion = response.data?.circunscripcion?.tipCircunscripcion ?? 0;
          this.tiposCircunscripcionControl.setValue(this.selectedTipCircunscripcion);

          //seteamos el nombre del archvio
          this.informeFile = new File([], response.data?.nombreinformesustento ?? '', { type: 'application/pdf' });

            //colocamos los valores en el formulario
            this.informeRenacForm.patchValue({
              idCircunscripcion: response.data.circunscripcion ?? undefined,
              numero: response.data.numero ?? undefined,
              fecha: response.data.fecha ?? undefined,
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

    //validamos si es un editar
    if(this.serialkey) {

      //definimos los parametros para el metodo Update
      const params = {
        body: {
          idInformeRenac: this.serialkey,
          idCircunscripcion: this.informeRenacForm.get('idCircunscripcion')?.value.codCircunscripcion,
          numero: this.informeRenacForm.get('numero')?.value,
          fecha: formatDateFromString(this.informeRenacForm.get('fecha')?.value),
          nombreinformesustento: this.informeFile ? this.informeFile.name : undefined,
          InformeAnotacionBase64: this.informeBase64
        }
      };

      this._inforemRenacService.apiInformeRenacUpdatePut$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
          //next callback code
          Swal.fire({
            icon: 'success',
            title: 'Actualizacion exitosa',
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
        },
        complete: () => { }
      });
      
    }
    //caso contrario se hace el Insert
    else {

      //obtenemos los parametros para el metodo Insert
      const params = {
        body: {
          idCircunscripcion: this.informeRenacForm.get('idCircunscripcion')?.value.codCircunscripcion ?? undefined,
          numero: this.informeRenacForm.get('numero')?.value ?? undefined,
          fecha: formatDate(this.informeRenacForm.get('fecha')?.value),
          nombreinformesustento: this.informeFile ? this.informeFile.name : undefined,
          InformeAnotacionBase64: this.informeBase64
        }
      };

      //consumimos el servicio para insertar
        this._inforemRenacService.apiInformeRenacInsertPost$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
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
        },
        complete: () => { }
      });

    }

  }

  getTipoCircunscripciones() {
    this._tipoCircunscripcionService.apiTipoCircunscripcionGetListGet$Json().subscribe(response => {
      const dataList: TipoCircunscripcionListResponse | undefined = response.data;   
      this.listaTipoCircunscripciones = (dataList as TipoCircunscripcionListResponse[]) ?? [];
    });
  }

  getCircunscripciones() {
    this.informeRenacForm.get('idCircunscripcion')?.valueChanges
      .pipe(
        debounceTime(800), // Wait for 800ms after each keystroke before considering the term
        filter((value) => typeof value === 'string'), // Only proceed if the value is a string
        tap((value) => {
          this.searchTextCircunscripcion = value; // Update the search text
          this.loading = value.length >= this.minSearchLength; 
        }),
        filter((value) => value.length >= this.minSearchLength), // Only proceed if search term is at least minSearchLength characters long
        switchMap((value) => 
          this._circunscripcionService.apiCircunscripcionGetListGet$Json({ NomCircunscripcion: value, TipCircunscripcion: this.selectedTipCircunscripcion })
        ) // Call the search service
      ).subscribe((response) => {
        const dataList: CircunscripcionListResponse | undefined = response.data;   
        this.options = (dataList as CircunscripcionListResponse[]) ?? [];
        this.loading = false; // Set loading to false after getting the results
      });
  
  
  }

  displayFn(item: any): string {
    return item && item.nombreCircunscripcion ? item.nombreCircunscripcion : '';
  }

  onTipoCircunscripcionChange(value: number) {
    this.selectedTipCircunscripcion = value;
    this.informeRenacForm.get('idCircunscripcion')?.setValue(null);
  }

  onFileChange(event: any) {
    this.informeFile = null;
    // See if any file(s) have been selected from input
    if (event.target.files && event.target.files.length > 0) {
      // Don't allow file sizes over 50MB
      if (event.target.files[0].size < this.MAX_SIZE) {
        // Set informeFile property
        this.informeFile = event.target.files[0];
        //set base64 value
        this.convertToBase64(this.informeFile);
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
      this.informeBase64 = base64String;
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
