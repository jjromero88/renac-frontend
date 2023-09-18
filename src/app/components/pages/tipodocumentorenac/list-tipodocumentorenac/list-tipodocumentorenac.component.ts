import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, TipoDocumentoRenacIdRequest, TipoDocumentoRenacListPaginatedResponseResponse, TipoDocumentoRenacResponse, TipoDocumentoRenacResponseResponse } from 'src/app/api/models';
import { TipoDocumentoRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { AddEditTipodocumentorenacComponent } from '../add-edit-tipodocumentorenac/add-edit-tipodocumentorenac.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-tipodocumentorenac',
  templateUrl: './list-tipodocumentorenac.component.html',
  styleUrls: ['./list-tipodocumentorenac.component.scss']
})
export class ListTipodocumentorenacComponent implements OnInit {

  displayedColumns: string[] = ['rownum','descripcion', 'codigo','fechareg','acciones'];
  dataSource = new MatTableDataSource<TipoDocumentoRenacResponse>([]);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroTipoAsiento: string = '';

  constructor (
    private _appComponent: AppComponent,
    private _tipoDocumentoRenacService: TipoDocumentoRenacService,
    private _dialog: MatDialog
    ) {
      this._appComponent.title = "Tipos de documento";
      this._appComponent.subtitle = "Registro de los tipo de documentos.";
    }

  ngOnInit() {
    this.obtenerTiposDocumento();
  }

  openAddTipoDocumentoForm(){
    const dialogRef = this._dialog.open(AddEditTipodocumentorenacComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.obtenerTiposDocumento();
        }
      }
    });
  }

  openEditTipoDocumentoForm(id: number) {
    const dialogRef = this._dialog.open(AddEditTipodocumentorenacComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          this.obtenerTiposDocumento();
        }
      }
    });
  }

  onDeleteTipoDocumento(id: number): void{

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el Tipo de documento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", se llama al servicio para eliminar
        const request: TipoDocumentoRenacIdRequest = {
          idTipoDocumentoRenac: id?? undefined
        };
      
        this._tipoDocumentoRenacService.apiTipoDocumentoRenacDeleteDelete$Json({ body: request }).subscribe({
          next: (response: TipoDocumentoRenacResponseResponse) => {
              //se actualiza la tabla
              this.obtenerTiposDocumento(); 
              // Maneja la respuesta exitosa de la solicitud
              Swal.fire({
                icon: 'success',
                title: 'Eliminada',
                text: 'El tipo de documento ha sido eliminada satisfactoriamente.',
                confirmButtonText: 'OK'
              });
          },
          error: (resp) => {
              console.log(resp);
              // Maneja el error de la solicitud
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
    });

  }

  applyFilter() {
    this.filtroTipoAsiento = this.filtroInput.nativeElement.value.trim();
    this.obtenerTiposDocumento();
  }

  obtenerTiposDocumento(): void {

    const params = {
      filtro: this.filtroTipoAsiento,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    }; 

    this._tipoDocumentoRenacService.apiTipoDocumentoRenacGetListPaginatedGet$Json(params).subscribe({
      next: (response: TipoDocumentoRenacListPaginatedResponseResponse) => {

        console.log(response);

        if (response.data) {
          const dataTipoasientos = response.data.tipoDocumentoRenac || [];
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
    this.obtenerTiposDocumento();    
  }

}
