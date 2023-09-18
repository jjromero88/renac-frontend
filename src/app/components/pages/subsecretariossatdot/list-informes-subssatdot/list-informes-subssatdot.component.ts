import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, SubsecretarioSsatdotListPaginatedResponseResponse, SubsecretarioSsatdotResponse } from 'src/app/api/models';
import { InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { ListInformacionSsiatComponent } from '../../informacion-ssiat/list-informacion-ssiat/list-informacion-ssiat.component';
import { DerivarInformeSubssatdotComponent } from '../derivar-informe-subssatdot/derivar-informe-subssatdot.component';
import Swal from 'sweetalert2';
import { AsignarEspecialistaComponent } from '../asignar-especialista/asignar-especialista.component';

@Component({
  selector: 'app-list-informes-subssatdot',
  templateUrl: './list-informes-subssatdot.component.html',
  styleUrls: ['./list-informes-subssatdot.component.scss']
})
export class ListInformesSubssatdotComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'documentos', 'estadossatdot'];
  dataSource = new MatTableDataSource<SubsecretarioSsatdotResponse>([]);
  selection = new SelectionModel<SubsecretarioSsatdotResponse>(true, []);
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
    this._appComponent.title = "Subsecretario SSATDOT";
    this._appComponent.subtitle = "Registro de Circunscripción para Anotación.";
  }


  ngOnInit() { 
   this.obtenerListaInformesRenacSubSsatdot();
  }

  obtenerListaInformesRenacSubSsatdot(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacSubsecretarioSsatdotPaginatedGet$Json(params).subscribe({
      next: (response: SubsecretarioSsatdotListPaginatedResponseResponse) => {

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
    this.obtenerListaInformesRenacSubSsatdot();    
  }

  applyFilters(){}

  onAsignarEspecialista() {
    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

        const dialogRef = this._dialog.open(AsignarEspecialistaComponent, {
          data: {
            informesSubSsiatSelected: selectedRows
          }
        });
      
        dialogRef.afterClosed().subscribe({
          next: (val) => {
            if(val) {
              this.obtenerListaInformesRenacSubSsatdot();
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

 
  onVerDocumentos(idInformeRenac: number | undefined) {

    if(idInformeRenac){
      const dialogRef = this._dialog.open(ListInformacionSsiatComponent, {
        data: {
          idInformeRenac: idInformeRenac
        }
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

  toggleRow(row: SubsecretarioSsatdotResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: SubsecretarioSsatdotResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: SubsecretarioSsatdotResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
