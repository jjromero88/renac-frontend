import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AsientoCircunscripcionIdRequest, AsientoCircunscripcionListPaginatedResponseResponse, AsientoCircunscripcionResponse, InformeRenacResponse, InformeRenacResponseResponse, PaginacionResponse } from 'src/app/api/models';
import { AsientoCircunscripcionService, FileManagerService, InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { AddEditAsientoComponent } from '../add-edit-asiento/add-edit-asiento.component';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import Swal from 'sweetalert2';
import { FolderPath } from 'src/app/models/FilesConfig';

@Component({
  selector: 'app-list-asiento',
  templateUrl: './list-asiento.component.html',
  styleUrls: ['./list-asiento.component.scss']
})
export class ListAsientoComponent implements OnInit  {

  idInformeRenac?: number;
  InformeRenac: InformeRenacResponse | undefined = undefined;
  dataSource = new MatTableDataSource<AsientoCircunscripcionResponse>([]);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  displayedColumns: string[] = ['rownum', 'tipoasiento', 'tipodispositivo', 'numero', 'fecha', 'capital', 'departamento', 'detallemodificacion','norma','acciones'];
  filtroAsientoCircunscripcion: string = '';

  constructor(
    private _asientoCircunscripcionService: AsientoCircunscripcionService,
    private _inforemRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    private _activatedRoute: ActivatedRoute,
    private _appComponent: AppComponent,
    private _dialog: MatDialog
  ) {
    this.idInformeRenac = this._activatedRoute.snapshot.params['id'];    
  }
  

  ngOnInit() {
    this.obtenerListaAsientos();
    this.getInformeRenac();
  }

  getInformeRenac() {
    if(this.idInformeRenac){
      const params = {
        idInformeRenac: this.idInformeRenac,
      };

      this._inforemRenacService.apiInformeRenacGetByIdGet$Json(params).subscribe({
        next: (response: InformeRenacResponseResponse) => {
          if(response.data && response.isSuccess) {      
            this.InformeRenac = response.data;
            const InformeRenac = this.InformeRenac ?? undefined;
            this.updateAsientoTitle(InformeRenac);
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

  openAddAsientoCircunscripcionForm() {

    const dialogRef = this._dialog.open(AddEditAsientoComponent, {
      data: {
        idInformeRenac: this.idInformeRenac
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.obtenerListaAsientos();
        }
      }
    });
  }

  openEditAsientoCircunscripcionForm(id: number) {

    const dialogRef = this._dialog.open(AddEditAsientoComponent, {
      data: {
        serialkey: id,
        idInformeRenac: this.idInformeRenac
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.obtenerListaAsientos();
        }
      }
    });

  }

  onDeleteAsientoCircunscripcion(id: number): void {
    
    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el asiento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        const request: AsientoCircunscripcionIdRequest = {
          idAsientoCircunscripcion: id
        };
      
        this._asientoCircunscripcionService.apiAsientoCircunscripcionDeleteDelete$Json({ body: request }).subscribe({
          next: (response: InformeRenacResponseResponse) => {
              this.obtenerListaAsientos(); 

              Swal.fire({
                icon: 'success',
                title: 'Eliminada',
                text: 'El tipo de asiento ha sido eliminada satisfactoriamente.',
                confirmButtonText: 'OK'
              });
          },
          error: (resp) => {
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
    });

  }

  obtenerListaAsientos() {

    const params = {
      idInformeRenac:  this.idInformeRenac,
      filtro: this.filtroAsientoCircunscripcion,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    }; 

    this._asientoCircunscripcionService.apiAsientoCircunscripcionGetListPaginatedGet$Json(params).subscribe({
      next: (response: AsientoCircunscripcionListPaginatedResponseResponse) => {
        if (response.data) {
          const data = response.data.asientoCircunscripcion || [];
          this.dataSource.data = data;
          this.paginacion = response.data.paginacion || {};
        }
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

  onPageChange(event: PageEvent) {
    this.paginateFilters.PageSize = event.pageSize;
    this.paginateFilters.PageNumber = event.pageIndex + 1;  
    this.obtenerListaAsientos();    
  }

  applyFilter(){

  }

  onDownloadNorma(filepath: string) {

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


  updateAsientoTitle(InformeRenac: InformeRenacResponse | null | undefined) {
    if (InformeRenac) {
      const numero = InformeRenac?.numero ?? '';
      const nombrecircunscripcion = InformeRenac?.circunscripcion?.nombreCircunscripcion ?? '';
      let tipocircunscripcion = InformeRenac?.circunscripcion?.tipoCircunscripcion?.descripcion ?? '';
  
      tipocircunscripcion = (tipocircunscripcion || '').trim().toLowerCase();
  
      const departamentoTitulo = 'Asientos - Departamento: ';
      const provinciaTitulo = 'Asientos - Provincia: ';
      const distritoTitulo = 'Asientos - Distrito: ';
  
      if (tipocircunscripcion === 'departamento') {
        this._appComponent.title = departamentoTitulo + nombrecircunscripcion;
      } else if (tipocircunscripcion === 'provincia') {
        this._appComponent.title = provinciaTitulo + nombrecircunscripcion;
      } else if (tipocircunscripcion === 'distrito') {
        this._appComponent.title = distritoTitulo + nombrecircunscripcion;
      } else {
        this._appComponent.title = 'Asientos - Circunscripcion';
      }
  
      this._appComponent.subtitle = "Registro de Asientos para el informe N° " + numero;
    } else {
      this._appComponent.title = "Asientos - circunscripcion";
      this._appComponent.subtitle = "Registro de asientos de circunscripcion.";
    }
  }

}
