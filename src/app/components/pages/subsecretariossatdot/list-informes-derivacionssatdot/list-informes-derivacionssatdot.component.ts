import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { ListInformacionSsiatComponent } from '../../informacion-ssiat/list-informacion-ssiat/list-informacion-ssiat.component';
import { PaginacionResponse, Response, SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse, SubsecretarioSsatdotDerivacionInformesResponse } from 'src/app/api/models';
import { AjustesSubssatdotComponent } from '../ajustes-subssatdot/ajustes-subssatdot.component';
import { EditInformesOpinionFavorableComponent } from '../../especialistassatdot/edit-informes-opinion-favorable/edit-informes-opinion-favorable.component';
import { DerivarInformeSubssatdotComponent } from '../derivar-informe-subssatdot/derivar-informe-subssatdot.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-informes-derivacionssatdot',
  templateUrl: './list-informes-derivacionssatdot.component.html',
  styleUrls: ['./list-informes-derivacionssatdot.component.scss']
})
export class ListInformesDerivacionssatdotComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'evaluacionfavorable','documentos', 'estadossatdot'];
  dataSource = new MatTableDataSource<SubsecretarioSsatdotDerivacionInformesResponse>([]);
  selection = new SelectionModel<SubsecretarioSsatdotDerivacionInformesResponse>(true, []);
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

   onSubirInformeOpinionFavorable() {

    const selectedRows =  this.selectedRows;
    let mensajeValidacion: string;

    if (selectedRows.length > 0) {

      const params = {
        body: {
          listaInformesRenac: selectedRows.join(',') ?? undefined
        }
      };

      this._informeRenacService.apiInformeRenacValidateInformeEvaluacionFavorablePut$Json(params).subscribe({
        next: (response: Response) => {
          // obtenemos el mensaje que corresponde a la validacion
          mensajeValidacion = response.message ?? '';

          Swal.fire({
            title: 'Advertencia',
            text: mensajeValidacion,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              
              const dialogRef = this._dialog.open(EditInformesOpinionFavorableComponent, {
                data: {
                  informesRenacSelected: selectedRows
                }
              });
                  
            }
          });
          
        },
        error: (resp) => {
          console.log(resp);
          Swal.fire({
            icon: 'error',
            title: 'Ha ocurrido un problema al intentar verificar el informe de evaluación favorable',
            text: resp.error.message,
            confirmButtonText: 'OK'
          });        
        },
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

      const dialogRef = this._dialog.open(AjustesSubssatdotComponent, {
        data: {
          informesRenacSelected: selectedRows
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
        text: 'Debe seleccionar por lo menos un informe que requiera ajustes',
        confirmButtonText: 'OK'
      });
    }
   }
   
   obtenerListaInformesRenacSubSsatdot(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Json(params).subscribe({
      next: (response: SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse) => {

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

  applyFilters() {

  }

  onDerivarInformes() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

        const dialogRef = this._dialog.open(DerivarInformeSubssatdotComponent, {
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

  toggleRow(row: SubsecretarioSsatdotDerivacionInformesResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: SubsecretarioSsatdotDerivacionInformesResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: SubsecretarioSsatdotDerivacionInformesResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
