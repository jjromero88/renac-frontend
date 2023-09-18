import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, TipoModificacionAsientoIdRequest, TipoModificacionAsientoListPaginatedResponseResponse, TipoModificacionAsientoResponse, TipoModificacionAsientoResponseResponse } from 'src/app/api/models';
import { TipoModificacionAsientoService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import Swal from 'sweetalert2';
import { AddEditTipomodificacionasientoComponent } from '../add-edit-tipomodificacionasiento/add-edit-tipomodificacionasiento.component';

@Component({
  selector: 'app-list-tipomodificacionasiento',
  templateUrl: './list-tipomodificacionasiento.component.html',
  styleUrls: ['./list-tipomodificacionasiento.component.scss']
})
export class ListTipomodificacionasientoComponent implements OnInit {

  displayedColumns: string[] = ['rownum','descripcion', 'fechareg', 'acciones'];
  dataSource = new MatTableDataSource<TipoModificacionAsientoResponse>([]);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroTipoAsiento: string = '';

  constructor (
    private _appComponent: AppComponent,
    private _tipoModificacionAsientoService: TipoModificacionAsientoService,
    private _dialog: MatDialog
  ) {
    this._appComponent.title = "Tipos de modificaciones";
    this._appComponent.subtitle = "Registro de los tipos de modificaciones de asiento de circunscripción.";
  }

  ngOnInit() {
    this.obtenerTipoModificaciones();
  }

  openAddTipoModificacionForm(){
    
    const dialogRef = this._dialog.open(AddEditTipomodificacionasientoComponent, {
      data: {
        serialkey: undefined
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //despues de cerrar el dialog, actualiza la tabla
          this.obtenerTipoModificaciones();
        }
      }
    });
  }

  openEditTipoModificacionForm(id: number) {

    const dialogRef = this._dialog.open(AddEditTipomodificacionasientoComponent, {
      data: {
        serialkey: id
      }
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.obtenerTipoModificaciones();
        }
      }
    });
  }

  onDeleteTipoModificacion(id: number): void{

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el Tipo de modificación?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", se llama al servicio para eliminar
        const request: TipoModificacionAsientoIdRequest = {
          idTipoModificacionAsiento: id?? undefined
        };
      
        this._tipoModificacionAsientoService.apiTipoModificacionAsientoDeleteDelete$Json({ body: request }).subscribe({
          next: (response: TipoModificacionAsientoResponseResponse) => {
              this.obtenerTipoModificaciones(); 
              Swal.fire({
                icon: 'success',
                title: 'Eliminado',
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

  applyFilter() {
    this.filtroTipoAsiento = this.filtroInput.nativeElement.value.trim();
    this.obtenerTipoModificaciones();
  }

  obtenerTipoModificaciones(): void {

    const params = {
      filtro: this.filtroTipoAsiento,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    }; 

    this._tipoModificacionAsientoService.apiTipoModificacionAsientoGetListPaginatedGet$Json(params).subscribe({
      next: (response: TipoModificacionAsientoListPaginatedResponseResponse) => {
        if (response.data) {
          const dataTipoasientos = response.data.tipoModificacionAsiento || [];
          this.dataSource.data = dataTipoasientos;
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
    this.obtenerTipoModificaciones();    
  }

}
