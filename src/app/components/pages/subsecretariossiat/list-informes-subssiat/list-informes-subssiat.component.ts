import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, SubsecretarioSsiatListPaginatedResponseResponse, SubsecretarioSsiatResponse } from 'src/app/api/models';
import { InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { DerivarInformeSubssiatComponent } from '../derivar-informe-subssiat/derivar-informe-subssiat.component';
import { ListInformacionSsiatComponent } from '../../informacion-ssiat/list-informacion-ssiat/list-informacion-ssiat.component';
import { AjustesSubssiatComponent } from '../ajustes-subssiat/ajustes-subssiat.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-informes-subssiat',
  templateUrl: './list-informes-subssiat.component.html',
  styleUrls: ['./list-informes-subssiat.component.scss']
})
export class ListInformesSubssiatComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numeropartida', 'circunscripcion', 'documentos', 'estadossiat'];
  dataSource = new MatTableDataSource<SubsecretarioSsiatResponse>([]);
  selection = new SelectionModel<SubsecretarioSsiatResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor(
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _dialog: MatDialog
  )
  {
    this._appComponent.title = "Subsecretario SSIAT";
    this._appComponent.subtitle = "Registro de Circunscripción para Anotación.";
  }  

  ngOnInit() { 
    this.obtenerListaInformesRenacSubSsiat();
  }

  onVerDocumentos(idInformeRenac: number | undefined) {

    if(idInformeRenac){
      const dialogRef = this._dialog.open(ListInformacionSsiatComponent, {
        data: {
          idInformeRenac: idInformeRenac
        }
      });
    }

  }

  onDerivarInformes() {
    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(DerivarInformeSubssiatComponent, {
        data: {
          informesSubSsiatSelected: selectedRows
        }
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val) {
            this.obtenerListaInformesRenacSubSsiat();
          }
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

  onRegistrarAjustes() {
    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(AjustesSubssiatComponent, {
        data: {
          informesSubSsiatSelected: selectedRows
        }
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val) {
           this.obtenerListaInformesRenacSubSsiat();
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

  obtenerListaInformesRenacSubSsiat(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacSubsecretarioSsiatPaginatedGet$Json(params).subscribe({
      next: (response: SubsecretarioSsiatListPaginatedResponseResponse) => {

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
    this.obtenerListaInformesRenacSubSsiat();    
  }

  applyFilters() { }

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

  toggleRow(row: SubsecretarioSsiatResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: SubsecretarioSsiatResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: SubsecretarioSsiatResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
