import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EspecialistaSsatdotListPaginatedResponseResponse, EspecialistaSsatdotResponse, PaginacionResponse } from 'src/app/api/models';
import { InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { ListInformacionSsiatComponent } from '../../informacion-ssiat/list-informacion-ssiat/list-informacion-ssiat.component';
import { EditEvaluacionfavorableComponent } from '../edit-evaluacionfavorable/edit-evaluacionfavorable.component';
import { EditInformesOpinionFavorableComponent } from '../edit-informes-opinion-favorable/edit-informes-opinion-favorable.component';
import { DerivarInformeEspssatdotComponent } from '../derivar-informe-espssatdot/derivar-informe-espssatdot.component';
import { AjustesEspssatdotComponent } from '../ajustes-espssatdot/ajustes-espssatdot.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-informes-espssatdot',
  templateUrl: './list-informes-espssatdot.component.html',
  styleUrls: ['./list-informes-espssatdot.component.scss']
})
export class ListInformesEspssatdotComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'documentos', 'editarevaluacion','estadossatdot'];
  dataSource = new MatTableDataSource<EspecialistaSsatdotResponse>([]);
  selection = new SelectionModel<EspecialistaSsatdotResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor (
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _dialog: MatDialog
  ) {
    this._appComponent.title = "Especialista SSATDOT";
    this._appComponent.subtitle = "Registro de Circunscripción para Anotación.";
  }

  ngOnInit() {
    this.obtenerListaInformesRenacEspSsatdot();
  }

  obtenerListaInformesRenacEspSsatdot(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacEspecialistaSsatdotPaginatedGet$Json(params).subscribe({
      next: (response: EspecialistaSsatdotListPaginatedResponseResponse) => {

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
    this.obtenerListaInformesRenacEspSsatdot();    
  }

  applyFilters() {

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

  onEditEvaluacionfavorable(idInformeRenac: number | undefined, nomCircunscripcion: string | undefined) {

    if(idInformeRenac) {
      const dialogRef = this._dialog.open(EditEvaluacionfavorableComponent, {
        data: {
          idInformeRenac: idInformeRenac,
          nomCircunscripcion: nomCircunscripcion
        }
      });
    }
  }

  onDerivarInformes() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {    
        
      const dialogRef = this._dialog.open(DerivarInformeEspssatdotComponent, {
        data: {
          informesEspSsiatSelected: selectedRows
        }
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val) {
            //despues de cerrar el dialog, actualiza la tabla
            this.obtenerListaInformesRenacEspSsatdot();
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

  onSubirInformeOpinionFavorable() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(EditInformesOpinionFavorableComponent, {
        data: {
          informesRenacSelected: selectedRows
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

      const dialogRef = this._dialog.open(AjustesEspssatdotComponent, {
        data: {
          informesRenacSelected: selectedRows
        }
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val) {
           this.obtenerListaInformesRenacEspSsatdot();
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

  //checked element

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

  toggleRow(row: EspecialistaSsatdotResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: EspecialistaSsatdotResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: EspecialistaSsatdotResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }


}
