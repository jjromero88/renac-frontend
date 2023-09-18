import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse, ResponsableArchivoRegistroAnotacionResponse, Response } from 'src/app/api/models';
import { InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import Swal from 'sweetalert2';
import { AdjuntarAnotacionComponent } from '../adjuntar-anotacion/adjuntar-anotacion.component';

@Component({
  selector: 'app-list-resparchivo-anotacion',
  templateUrl: './list-resparchivo-anotacion.component.html',
  styleUrls: ['./list-resparchivo-anotacion.component.scss']
})
export class ListResparchivoAnotacionComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'documentos', 'registroanotacion','estadoinforme'];
  dataSource = new MatTableDataSource<ResponsableArchivoRegistroAnotacionResponse>([]);
  selection = new SelectionModel<ResponsableArchivoRegistroAnotacionResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor( 
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _dialog: MatDialog
  ){ 
    this._appComponent.title = "Responsable de archivo";
    this._appComponent.subtitle = "Registro de anotación de partidas registrales.";
  }

  ngOnInit() {

    this.obtenerListaInformesRenac();

  }

  cerrarProcesoAnotacion() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      Swal.fire({
        title: 'Confirmar la operación',
        text: selectedRows.length > 1 ? '¿Deseas cerrar el proceso de anotación de los Infofmes seleccionados?' : '¿Deseas cerrar el proceso de anotación del Infofme seleccionado?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, cerrar proceso',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
                    
          const params = {
            body: {
              listaInformesRenac: selectedRows.join(',') ?? undefined
            }
          };

          this._informeRenacService.apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Json(params).subscribe({
            next: (response: Response) => {
              Swal.fire({
                icon: 'success',
                title: 'Se cerraros los procesos de anotación',
                text: response.message ?? undefined,
                confirmButtonText: 'OK'
              });
              //actualiza la tabla
              this.obtenerListaInformesRenac();
            },
            error: (resp) => {
              //error callback code
              console.log(resp);
              Swal.fire({
                icon: 'error',
                title: 'Ha ocurrido un problema',
                text: resp.error.message,
                confirmButtonText: 'OK'
              });
            },
          });
        }
      });

    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'Verificar la información',
        text: 'Debe seleccionar por lo menos un informe para poder cerrar el proceso de anotacion',
        confirmButtonText: 'OK'
      });
    }
    
  }

   onAddAnotacion() {
    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(AdjuntarAnotacionComponent, {
        data: {
          informeRenacSelected: selectedRows
        }
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val) {
           this.obtenerListaInformesRenac();
          }
        }
      });
      
    }
    else {
      Swal.fire({
        icon: 'warning',
        title: 'Verificar la información',
        text: 'Debe seleccionar por lo menos un informe para registrarle la anotación.',
        confirmButtonText: 'OK'
      });
    }
  }

  onEditAnotacion(idInformeRenac: number | undefined) {
    if(idInformeRenac) {
      this.selectedRows.push(idInformeRenac);

      const dialogRef = this._dialog.open(AdjuntarAnotacionComponent, {
        data: {
          idInformeRenac: idInformeRenac,
          informeRenacSelected: this.selectedRows
        }
      });
    }
  }

  onVerDocumentos(idInformeRenac: number | undefined) {

  }

  obtenerListaInformesRenac(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Json(params).subscribe({
      next: (response: ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse) => {

        if (response.data) {
          const data = response.data.lista || [];
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
    this.obtenerListaInformesRenac();
  }

  applyFilters() {

  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selectedRows = [];
      return;
    }
  
    this.selectedRows = this.dataSource.data
      .filter(row => row.idInformeRenac != null && row.idInformeRenac !== undefined)
      .map(row => row.idInformeRenac as number);
  }

  toggleRow(row: ResponsableArchivoRegistroAnotacionResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: ResponsableArchivoRegistroAnotacionResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: ResponsableArchivoRegistroAnotacionResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
