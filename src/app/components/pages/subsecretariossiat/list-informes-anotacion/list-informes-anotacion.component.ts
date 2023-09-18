import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PaginacionResponse, SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse, SubsecretarioSsiatRegistroAnotacionResponse } from 'src/app/api/models';
import { FileManagerService, InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { FolderPath } from 'src/app/models/FilesConfig';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import Swal from 'sweetalert2';
import { AddEditConstanciafirmadaComponent } from '../add-edit-constanciafirmada/add-edit-constanciafirmada.component';
import { DerivarInformeResparchivoComponent } from '../derivar-informe-resparchivo/derivar-informe-resparchivo.component';

@Component({
  selector: 'app-list-informes-anotacion',
  templateUrl: './list-informes-anotacion.component.html',
  styleUrls: ['./list-informes-anotacion.component.scss']
})
export class ListInformesAnotacionComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'constanciaanotacion', 'editconstanciaanotacion', 'documentos', 'estadoinforme'];
  dataSource = new MatTableDataSource<SubsecretarioSsiatRegistroAnotacionResponse>([]);
  selection = new SelectionModel<SubsecretarioSsiatRegistroAnotacionResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor(
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    private _dialog: MatDialog
  ) {
    this._appComponent.title = "Subsecretario SSIAT";
    this._appComponent.subtitle = "Aprobar anotación y registro de Constancia de anotación y fichas registrales.";
  }


  ngOnInit() {
    this.obtenerListaInformesRenac();
  }

  onDerivarInformes() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(DerivarInformeResparchivoComponent, {
        data: {
          informesRenacSelected: selectedRows
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
      text: 'Debe seleccionar por lo menos un informe para derivarlos',
      confirmButtonText: 'OK'
    });
    
  }

  }

  onEditConstanciaAnotacionFirmada(idInformeRenac: number | undefined) {

    const dialogRef = this._dialog.open(AddEditConstanciafirmadaComponent, {
      data: {
        idInformeRenac: idInformeRenac
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

  onDescargarConstancia(constanciaAnotacionArchivo: string | undefined) {

    if(constanciaAnotacionArchivo) {

      const params = {
        IdFolderPath: FolderPath.rootPathRenac,
        FilePath: constanciaAnotacionArchivo ?? undefined
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

  }

  onDescargarRespuestaGore(respuestaGoreArchivo: string | undefined) {

    if(respuestaGoreArchivo) {

      const params = {
        IdFolderPath: FolderPath.rootPathRenac,
        FilePath: respuestaGoreArchivo ?? undefined
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

  }

  onVerDocumentos(idInformeRenac: number | undefined) {

  }

  obtenerListaInformesRenac() {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Json(params).subscribe({
      next: (response: SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse) => {

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

  toggleRow(row: SubsecretarioSsiatRegistroAnotacionResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: SubsecretarioSsiatRegistroAnotacionResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: SubsecretarioSsiatRegistroAnotacionResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }
  
}
