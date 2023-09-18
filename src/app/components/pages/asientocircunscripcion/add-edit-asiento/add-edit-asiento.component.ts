import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AsientoCircunscripcionInsertRequest, AsientoCircunscripcionResponseResponse, AsientoCircunscripcionUpdateRequest, CircunscripcionOrigenDestinoListResponseResponse, CircunscripcionOrigenDestinoResponse, InformeRenacResponseResponse, NormaResponse, TipoAsientoListResponse, TipoAsientoListResponseResponse, TipoAsientoResponse, TipoModificacionAsientoListResponse, TipoModificacionAsientoListResponseResponse, TipoModificacionAsientoResponse } from 'src/app/api/models';
import { AsientoCircunscripcionService, CircunscripcionOrigenDestinoService, FileManagerService, InformeRenacService, TipoAsientoService, TipoModificacionAsientoService } from 'src/app/api/services';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { OrigenDestinoCodigos } from 'src/app/models/CircunscripcionConfig'; 
import { ListNormaModalComponent } from '../../norma/list-norma-modal/list-norma-modal.component';
import { formatDateFromString } from 'src/app/components/shared/Util/date-utils';
import Swal from 'sweetalert2';
import { FolderPath } from 'src/app/models/FilesConfig';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';

@Component({
  selector: 'app-add-edit-asiento',
  templateUrl: './add-edit-asiento.component.html',
  styleUrls: ['./add-edit-asiento.component.scss']
})
export class AddEditAsientoComponent implements OnInit {

  asientoForm: FormGroup;
  tipoAsientoList: TipoAsientoResponse[] = [];
  tipoModificacionesList: TipoModificacionAsientoResponse[] = [];
  selectedTipoAsiento: any;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  listaOrigenes: CircunscripcionOrigenDestinoResponse[] = [];
  listaDestinos: CircunscripcionOrigenDestinoResponse[] = [];
  listaOrigenDestino: CircunscripcionOrigenDestinoResponse[] = [];
  codOrigenDestino = { idOrigen: OrigenDestinoCodigos.idOrigen, idDestino: OrigenDestinoCodigos.idDestino };
  announcer = inject(LiveAnnouncer);
  asientoNorma: NormaResponse | undefined;
  codTipoAsiento = 0;
  asientoNormaDescription: string | undefined | null = undefined;  
  selectedModificaciones : number[] = [];
  serialkey: number | undefined;
  idInformeRenac: number | undefined;
  tipoCircunscripcion: string | undefined;

  constructor (
    private _dialogRef: MatDialogRef<AddEditAsientoComponent>,
    private _asientoCircunscripcionService: AsientoCircunscripcionService,
    private _tipoAsientoService: TipoAsientoService,
    private _tipoModificacionService: TipoModificacionAsientoService,
    private _inforemRenacService: InformeRenacService,
    private _circunscripcionOrigenDestinoService: CircunscripcionOrigenDestinoService,
    private _fileService: FileManagerService,
    private _dialog: MatDialog,
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.serialkey = data.serialkey;
    this.idInformeRenac = data.idInformeRenac;
    this.asientoForm = this._fb.group({
      idDispositivo: [undefined, Validators.required],
      idTipoAsiento: [undefined, Validators.required],
      circunscripcionOrigenes: [undefined],
      circunscripcionDestinos: [undefined],
      detallesModificacion: [undefined],
      nombreCircunscripcion: [undefined, Validators.required],
      numeroAsiento: [undefined, Validators.required],
      nombreCapital: [undefined],
      nombreProvincia: [undefined],
      nombreDepartamento: [undefined],
      informacionComplementaria: [undefined]
    })
}
  
  ngOnInit() {
    this.getAsientoCircunscripcion();
    this.getTiposAsiento();
    this.getTipoModificaciones();
    this.getInformeRenac();
  }
  
  getAsientoCircunscripcion() { 
        //si llega el id del Asiento, colocamos la informacion en el formulario
        if(this.serialkey) {
        
          const params = {
            idAsientoCircunscripcion: this.serialkey,
          };
    
          this._asientoCircunscripcionService.apiAsientoCircunscripcionGetByIdGet$Json(params).subscribe({
            next: (response: AsientoCircunscripcionResponseResponse) => {
              //next callback code
              if(response.data && response.isSuccess) {
        
               //colocamos los valores en el formulario
               this.asientoForm.patchValue({
                idTipoAsiento: response.data.idTipoAsiento ?? undefined,
                nombreCircunscripcion: response.data.nombreCircunscripcion ?? undefined,
                numeroAsiento: response.data.numeroAsiento ?? undefined,
                nombreCapital: response.data.nombreCapital ?? undefined,
                nombreProvincia: response.data.nombreProvincia ?? undefined,
                nombreDepartamento: response.data.nombreDepartamento ?? undefined,
                informacionComplementaria: response.data.informacionComplementaria ?? undefined
              });
    
              //Actualizamos el multiselect de Detalles de modificacion 
              const listaModificaciones = response.data?.detallesModificacion ?? undefined;
              this.selectedModificaciones = listaModificaciones ? listaModificaciones.split(",").map(Number) : [];
    
              //Obtenemos la lista de Circunscripciones de Origene y Destino
              this.getCircunscripcionOrigenDestino();
    
              //Configuramos la descripcion de la norma adjunta
              this.asientoNorma = response.data?.norma ?? undefined;
              this.configureNormaDescripcion();
              
              //Seteamos el tipo asiento
              this.codTipoAsiento = response.data.idTipoAsiento ?? 0;
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

  getInformeRenac() {
    if(this.idInformeRenac){
      const params = {
        idInformeRenac: this.idInformeRenac,
      };

      this._inforemRenacService.apiInformeRenacGetByIdGet$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
          if(response.data && response.isSuccess) {      
            
            const tipoCircunscripcion = response.data?.circunscripcion?.tipoCircunscripcion?.descripcion ?? undefined;
            this.tipoCircunscripcion = tipoCircunscripcion;
            this.configureTipoCircunscripcion();
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

  getCircunscripcionOrigenDestino() {
    if(this.serialkey) {
      const params = {
        idAsientoCircunscripcion: this.serialkey
      }

      this._circunscripcionOrigenDestinoService.apiCircunscripcionOrigenDestinoGetListGet$Json(params).subscribe({
        next: (response: CircunscripcionOrigenDestinoListResponseResponse) => {  
          if (response.data) {
            this.listaOrigenDestino = (response.data as CircunscripcionOrigenDestinoResponse[]) ?? [];
            this.splitListOrigenDestino();
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
  }

  openListNormasModal() {

    const dialogRef = this._dialog.open(ListNormaModalComponent, {
      data: this.asientoNorma?.codNorma
    });

    dialogRef.afterClosed().subscribe({
      next: (val: NormaResponse) => {
        if(val) {
          this.asientoNorma = val;
          this.configureNormaDescripcion();
        }
      }
    });
  }

  onFormSubmit() {
    
    this.asientoForm.get('idDispositivo')?.setValue(this.asientoNorma?.codNorma ?? undefined);
    const arrModificaciones = (this.codTipoAsiento === 1 || this.codTipoAsiento === 3) ? this.selectedModificaciones : [];
    const arrOrigenes = (this.codTipoAsiento === 1 || this.codTipoAsiento === 2) ? this.listaOrigenes.map(origen => origen.nombreCircunscripcion) : [];
    const arrDestinos = (this.codTipoAsiento === 1 || this.codTipoAsiento === 3) ? this.listaDestinos.map(origen => origen.nombreCircunscripcion) : [];    

    if(!this.serialkey) {
      
      const asientoCircunscripcionInsertRequest: AsientoCircunscripcionInsertRequest = {
        idInformeRenac: this.idInformeRenac ?? undefined,
        idDispositivo: this.asientoForm.get('idDispositivo')?.value ?? undefined,
        numeroAsiento: this.asientoForm.get('numeroAsiento')?.value ?? undefined,
        nombreCircunscripcion: this.asientoForm.get('nombreCircunscripcion')?.value ?? undefined,
        nombreCapital: this.asientoForm.get('nombreCapital')?.value ?? undefined,
        nombreDepartamento: this.asientoForm.get('nombreDepartamento')?.value ?? undefined,
        nombreProvincia: this.asientoForm.get('nombreProvincia')?.value ?? undefined,
        idTipoAsiento: this.asientoForm.get('idTipoAsiento')?.value ?? undefined,
        detallesModificacion: arrModificaciones.length > 0 ? arrModificaciones.join(',') : undefined,
        circunscripcionOrigenes: arrOrigenes.length > 0 ? arrOrigenes.join(',') : undefined,
        circunscripcionDestinos: arrDestinos.length > 0 ? arrDestinos.join(',') : undefined,
        informacionComplementaria: this.asientoForm.get('informacionComplementaria')?.value ?? undefined,
        codTipoAsiento: this.codTipoAsiento ?? undefined,
        tipoCircunscripcion: this.tipoCircunscripcion ?? undefined
      };

      this._asientoCircunscripcionService.apiAsientoCircunscripcionInsertPost$Json({ body: asientoCircunscripcionInsertRequest }).subscribe({
        next: (response: AsientoCircunscripcionResponseResponse) => {
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
          console.log(resp.error.errors);
          const errorsList = resp.error.errors;
          if(errorsList) {
            for (const error of errorsList) {
            const control = this.asientoForm.get(error.propertyName) as FormControl;
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
    else{

      const asientoCircunscripcionUpdateRequest: AsientoCircunscripcionUpdateRequest = {
        idAsientoCircunscripcion: this.serialkey,
        idInformeRenac: this.idInformeRenac ?? undefined,
        idDispositivo: this.asientoNorma?.codNorma ?? undefined,
        numeroAsiento: this.asientoForm.get('numeroAsiento')?.value ?? undefined,
        nombreCircunscripcion: this.asientoForm.get('nombreCircunscripcion')?.value ?? undefined,
        nombreCapital: this.asientoForm.get('nombreCapital')?.value ?? undefined,
        nombreDepartamento: this.asientoForm.get('nombreDepartamento')?.value ?? undefined,
        nombreProvincia: this.asientoForm.get('nombreProvincia')?.value ?? undefined,
        idTipoAsiento: this.asientoForm.get('idTipoAsiento')?.value ?? undefined,
        detallesModificacion: arrModificaciones.length > 0 ? arrModificaciones.join(',') : undefined,
        circunscripcionOrigenes: arrOrigenes.length > 0 ? arrOrigenes.join(',') : undefined,
        circunscripcionDestinos: arrDestinos.length > 0 ? arrDestinos.join(',') : undefined,
        informacionComplementaria: this.asientoForm.get('informacionComplementaria')?.value ?? undefined,
        codTipoAsiento: this.codTipoAsiento ?? undefined,
        tipoCircunscripcion: this.tipoCircunscripcion ?? undefined
      };

      this._asientoCircunscripcionService.apiAsientoCircunscripcionUpdatePut$Json({ body: asientoCircunscripcionUpdateRequest }).subscribe({
        next: (response: AsientoCircunscripcionResponseResponse) => {
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
            const control = this.asientoForm.get(error.propertyName) as FormControl;
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

  getTiposAsiento() {

    this._tipoAsientoService.apiTipoAsientoGetListGet$Json().subscribe({
      next: (response: TipoAsientoListResponseResponse) => {

        if (response.data) {         
          const dataList: TipoAsientoListResponse | undefined = response.data;
          this.tipoAsientoList = (dataList as TipoAsientoResponse[]) ?? [];
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

  getTipoModificaciones() {
    this._tipoModificacionService.apiTipoModificacionAsientoGetListGet$Json().subscribe({
      next: (response: TipoModificacionAsientoListResponseResponse) => {

        if (response.data) {         
          const dataList: TipoModificacionAsientoListResponse | undefined = response.data;
          this.tipoModificacionesList = (dataList as TipoModificacionAsientoResponse[]) ?? [];
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

  onChangeTipoAsiento() {
    if (this.selectedTipoAsiento) {
      const selectedOption = this.tipoAsientoList.find(option => option.idTipoAsiento === this.selectedTipoAsiento);
      this.codTipoAsiento = selectedOption?.codigo ?? 0;
    }
  }
  
  configureTipoCircunscripcion() {
    const tipo = this.tipoCircunscripcion?.toLowerCase().trim();
    if (tipo ==="departamento") {
      this.asientoForm.get("nombreDepartamento")?.disable();
      this.asientoForm.get("nombreProvincia")?.disable();
    }
    else if (tipo ==="provincia") {
      this.asientoForm.get("nombreProvincia")?.disable();
    }
  }

  configureNormaDescripcion() {
    const tipodispositivo = this.asientoNorma?.tipoDispositivo?.descripcion ?? '';
    const numley = this.asientoNorma?.numero ?? '';
    const fecha = this.asientoNorma?.fecha ?? '';
    this.asientoNormaDescription = this.asientoNorma ? tipodispositivo + ' Numero: ' + numley + ' - Fecha:' + formatDateFromString(fecha) : '';
  }

  onDownloadNorma(filepath: string | null | undefined) {

    if(filepath) {

      const params = {
        IdFolderPath: FolderPath.rootPathRenlim,
        FilePath: filepath
      };

      this._fileService.apiFileManagerDownloadFileGet$Json(params).subscribe({
        next: (response) => {
          downloadBase64File(response.data?.base64String, response.data?.contentType, response.data?.fileName);
        },
        error: (error) => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema',
            text: error.error.message,
            confirmButtonText: 'OK'
          });
        }
      });

    }
  }

  //crud origen destino

    addOrigenDestino(event: MatChipInputEvent, isOrigen: boolean): void {

      const value = (event.value || '').trim();
  
      // Add our item
      if (value) {
        this.listaOrigenDestino.push({nombreCircunscripcion: value, origenDestino: isOrigen ? this.codOrigenDestino.idOrigen : this.codOrigenDestino.idDestino });
      }
  
      // Clear the input value
      event.chipInput!.clear();
  
      this.splitListOrigenDestino();
    }
  
    removeOrigenDestino(origendestino: CircunscripcionOrigenDestinoResponse, isOrigen: boolean): void {
      const index = this.listaOrigenDestino.indexOf(origendestino);
  
      if (index >= 0) {
        this.listaOrigenDestino.splice(index, 1);
  
        this.announcer.announce(`Removed ${origendestino}`);
      }
  
      this.splitListOrigenDestino();
    }
  
    editOrigenDestino(item: CircunscripcionOrigenDestinoResponse, event: MatChipEditedEvent, isOrigen: boolean) {
      const value = event.value.trim();
  
      // Remove item if it no longer has a name
      if (!value) {
        this.removeOrigenDestino(item, isOrigen);
        return;
      }
  
      // Edit existing item
      const index = this.listaOrigenDestino.indexOf(item);
      if (index >= 0) {
        this.listaOrigenDestino[index].nombreCircunscripcion = value;
        this.listaOrigenDestino[index].origenDestino = isOrigen ? this.codOrigenDestino.idOrigen : this.codOrigenDestino.idDestino;
      }
  
      this.splitListOrigenDestino();
    }
  
    splitListOrigenDestino(): void {
      // Vaciar los arrays listaOrigenes y listaDestinos
      this.listaOrigenes.splice(0, this.listaOrigenes.length);
      this.listaDestinos.splice(0, this.listaDestinos.length);
      // Separar los elementos de listaOrigenDestino
      this.listaOrigenes = this.listaOrigenDestino.filter(item => item.origenDestino === this.codOrigenDestino.idOrigen);
      this.listaDestinos = this.listaOrigenDestino.filter(item => item.origenDestino === this.codOrigenDestino.idDestino);
    }
  
}
