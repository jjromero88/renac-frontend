import { Component, ViewChild, OnInit, ElementRef  } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTipoasientoComponent } from '../add-edit-tipoasiento/add-edit-tipoasiento.component';
import { TipoAsientoService } from 'src/app/api/services';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { PaginacionResponse, TipoAsientoIdRequest, TipoAsientoListPaginatedResponseResponse, TipoAsientoResponse, TipoAsientoResponseResponse } from 'src/app/api/models';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-list-tipoasiento',
  templateUrl: './list-tipoasiento.component.html',
  styleUrls: ['./list-tipoasiento.component.scss']
})
export class ListTipoasientoComponent implements OnInit {

  displayedColumns: string[] = ['rownum','descripcion', 'codigo','fechareg','acciones'];
  dataSource = new MatTableDataSource<TipoAsientoResponse>([]);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroTipoAsiento: string = '';

  constructor(
    private _appComponent: AppComponent,
    private _tipoasientoService: TipoAsientoService,
    private _dialog: MatDialog
    ) {
      this._appComponent.title = "Tipos de asiento";
      this._appComponent.subtitle = "Registro de los tipos de asiento de circunscripción.";
     }

  ngOnInit() {
    this.obtenerTiposAsiento();
  }

  openAddTipoAsientoForm(){
    const dialogRef = this._dialog.open(AddEditTipoasientoComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //despues de cerrar el dialog, actualiza la tabla
          this.obtenerTiposAsiento();
        }
      }
    });
  }

  openEditTipoAsientoForm(id: number) {
    const dialogRef = this._dialog.open(AddEditTipoasientoComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //despues de cerrar el dialog, actualiza la tabla
          this.obtenerTiposAsiento();
        }
      }
    });
  }

  onDeleteTipoAsiento(id: number): void{

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el Tipo de asiento?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario hace clic en "Sí, eliminar", se llama al servicio para eliminar
        const request: TipoAsientoIdRequest = {
          idTipoAsiento: id?? undefined
        };
      
        this._tipoasientoService.apiTipoAsientoDeleteDelete$Json({ body: request }).subscribe({
          next: (response: TipoAsientoResponseResponse) => {
              //se actualiza la tabla
              this.obtenerTiposAsiento(); 
              // Maneja la respuesta exitosa de la solicitud
              Swal.fire({
                icon: 'success',
                title: 'Eliminada',
                text: 'El tipo de asiento ha sido eliminada satisfactoriamente.',
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
    this.obtenerTiposAsiento();
  }

  obtenerTiposAsiento(): void {

    const params = {
      filtro: this.filtroTipoAsiento,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    }; 

    this._tipoasientoService.apiTipoAsientoGetListPaginatedGet$Json(params).subscribe({
      next: (response: TipoAsientoListPaginatedResponseResponse) => {
        if (response.data) {
          const dataTipoasientos = response.data.tipoAsiento || [];
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
      },
      complete: () => { }
    });

  }

  onPageChange(event: PageEvent) {
    this.paginateFilters.PageSize = event.pageSize;
    this.paginateFilters.PageNumber = event.pageIndex + 1;  
    this.obtenerTiposAsiento();    
  }

}
