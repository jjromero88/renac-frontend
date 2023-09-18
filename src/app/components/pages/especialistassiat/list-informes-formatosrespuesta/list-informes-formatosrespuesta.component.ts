import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse, EspecialistaSsiatRegistroFormatosResponse, PaginacionResponse } from 'src/app/api/models';
import { ConstanciaAnotacionService, FileManagerService, InformeRenacService } from 'src/app/api/services';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import { AddEditConstanciaanotacionComponent } from '../add-edit-constanciaanotacion/add-edit-constanciaanotacion.component';
import { AddEditRespgoreComponent } from '../add-edit-respgore/add-edit-respgore.component';
import { RetornarInformesComponent } from '../retornar-informes/retornar-informes.component';
import { DerivarInformesAnotacionComponent } from '../derivar-informes-anotacion/derivar-informes-anotacion.component';
import { FolderPath } from 'src/app/models/FilesConfig';
import { MatDialog } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-informes-formatosrespuesta',
  templateUrl: './list-informes-formatosrespuesta.component.html',
  styleUrls: ['./list-informes-formatosrespuesta.component.scss']
})
export class ListInformesFormatosrespuestaComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'numero', 'circunscripcion', 'constanciaanotacion', 'editconstanciaanotacion', 'evaluacionfavorable', 'solicitudgore', 'diastranscurridos', 'documentos', 'estadoinforme'];
  dataSource = new MatTableDataSource<EspecialistaSsiatRegistroFormatosResponse>([]);
  selection = new SelectionModel<EspecialistaSsiatRegistroFormatosResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor(
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _constanciaAnotacionService: ConstanciaAnotacionService,
    private _fileService: FileManagerService,
    private _dialog: MatDialog
  ) {
    this._appComponent.title = "Especialista SSIAT";
    this._appComponent.subtitle = "Registro de oficio de solicitud de información al GORE y registro de evidencias de envío.";
  }

  ngOnInit() {
    this.obtenerListaInformesRenac();
  }

  onDerivarInformes() {

    const selectedRows =  this.selectedRows;

      if(selectedRows.length > 0) {
  
        const dialogRef = this._dialog.open(DerivarInformesAnotacionComponent, {
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

  onAddRespuestaGore() {
    
    const selectedRows =  this.selectedRows;

      if(selectedRows.length > 0) {
  
        const dialogRef = this._dialog.open(AddEditRespgoreComponent, {
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
        text: 'Debe seleccionar por lo menos un informe para registrar la respuesta GORE',
        confirmButtonText: 'OK'
      });
      
    }

  }

  onEditRespuestaGore(idInformeRenac: number | undefined) {
    if(idInformeRenac) {
      const dialogRef = this._dialog.open(AddEditRespgoreComponent, {
        data: {          
          informeRenacSelected: this.selectedRows,
          idInformeRenac: idInformeRenac
        }
      });
    }
  }

  onRetornarParaModificacion() {
    
    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {

      const dialogRef = this._dialog.open(RetornarInformesComponent, {
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
        text: 'Debe seleccionar por lo menos un informe que requiera ajustes',
        confirmButtonText: 'OK'
      });
    }

  }

  onVerDocumentos(idInformeRenac: number | undefined) {

  }

  onGenerarConstanciaAnotacion(idInformeRenac: number | undefined) {

    const params = {
      idInformeRenac: idInformeRenac ?? undefined
    };

    this._constanciaAnotacionService.apiConstanciaAnotacionGenerateDocumentConstanciaAnotacionGet$Json(params).subscribe({
      next: (response) => {
        //descarga el archivo
        downloadBase64File(response.data?.base64String, response.data?.contentType, response.data?.fileName);
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Ocurrió un problema al intentar descagrar la Constancia de Anotación',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });
    
  }

  onEditConstanciaAnotacion(idInformeRenac: number | undefined) {
    
    const dialogRef = this._dialog.open(AddEditConstanciaanotacionComponent, {
      data: {
        idInformeRenac: idInformeRenac
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

  obtenerListaInformesRenac(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    };

    this._informeRenacService.apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Json(params).subscribe({
      next: (response: EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse) => {

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

  toggleRow(row: EspecialistaSsiatRegistroFormatosResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: EspecialistaSsiatRegistroFormatosResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: EspecialistaSsiatRegistroFormatosResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
