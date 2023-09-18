import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse, ResponsableArchivoSolicitudInformacionResponse, Response } from 'src/app/api/models';
import { DerivacionRenacService, InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import Swal from 'sweetalert2';
import { AdjuntarSolicitudinformacionComponent } from '../adjuntar-solicitudinformacion/adjuntar-solicitudinformacion.component';

@Component({
  selector: 'app-list-resparchivo-solicitud',
  templateUrl: './list-resparchivo-solicitud.component.html',
  styleUrls: ['./list-resparchivo-solicitud.component.scss']
})
export class ListResparchivoSolicitudComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'evaluacionfavorable','documentos', 'estadoinforme', 'solicitudinformacion'];
  dataSource = new MatTableDataSource<ResponsableArchivoSolicitudInformacionResponse>([]);
  selection = new SelectionModel<ResponsableArchivoSolicitudInformacionResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor( 
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _derivacionrenacservice: DerivacionRenacService,
    private _dialog: MatDialog
  ){ 
    this._appComponent.title = "Responsable de archivo";
    this._appComponent.subtitle = "Registro de oficio de solicitud de información al GORE y registro de evidencias de envío.";
  }

  ngOnInit(){
    this.obtenerListaInformesRenac();
  }

  onDerivarInformes() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {
      
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
                  esRetorno: false,
                  derivacioninformes: selectedRows.join(',') ?? undefined,
                  usuarioOrigen: 'R_ARCHIVO',
                  usuarioDestino: 'E_SSIAT'
                }
              };
               
              this._derivacionrenacservice.apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Json(params).subscribe({
                next: (response: Response) => {
                  Swal.fire({
                    icon: 'success',
                    title: 'Se realizó la derivación exitosamente',
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
    else {

      Swal.fire({
        icon: 'warning',
        title: 'Verificar la información',
        text: 'Debe seleccionar por lo menos un informe para derivar',
        confirmButtonText: 'OK'
      });
      
    }
  
  }

  onEditSolicitudinformacion(idInformeRenac: number | undefined) {   

    if(idInformeRenac) {
      this.selectedRows.push(idInformeRenac);

      const dialogRef = this._dialog.open(AdjuntarSolicitudinformacionComponent, {
        data: {
          idInformeRenac: idInformeRenac,
          informeRenacSelected: this.selectedRows
        }
      });
    }

  }

  onAddSolicitudInformacion() {
    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(AdjuntarSolicitudinformacionComponent, {
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
        text: 'Debe seleccionar por lo menos un informe que requiera ajustes',
        confirmButtonText: 'OK'
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

    this._informeRenacService.apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Json(params).subscribe({
      next: (response: ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse) => {

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

  toggleRow(row: ResponsableArchivoSolicitudInformacionResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: ResponsableArchivoSolicitudInformacionResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: ResponsableArchivoSolicitudInformacionResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
