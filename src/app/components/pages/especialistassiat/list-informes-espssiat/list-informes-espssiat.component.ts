import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DerivacionRenacResponseResponse, EspecialistaSsiatListPaginatedResponseResponse, EspecialistaSsiatResponse, InformeRenacIdRequest, InformeRenacResponseResponse, PaginacionResponse } from 'src/app/api/models';
import { DerivacionRenacService, InformeRenacService } from 'src/app/api/services';
import { AppComponent } from 'src/app/app.component';
import { PaginateConfig } from 'src/app/models/PaginateConfig';
import { FolderPath } from 'src/app/models/FilesConfig';
import { MatDialog } from '@angular/material/dialog';
import { AddEditInformerenacComponent } from '../../informerenac/add-edit-informerenac/add-edit-informerenac.component';
import { FileManagerService } from 'src/app/api/services';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import { SelectionModel } from '@angular/cdk/collections';
import { DerivarInformeEspssiatComponent } from '../derivar-informe-espssiat/derivar-informe-espssiat.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-informes-espssiat',
  templateUrl: './list-informes-espssiat.component.html',
  styleUrls: ['./list-informes-espssiat.component.scss']
})
export class ListInformesEspssiatComponent implements OnInit {

  selectedRows: number[] = [];
  displayedColumns: string[] = ['select', 'rownum', 'fechareg', 'descripcion', 'numero', 'fecha', 'estadoderivacion','asientos','acciones'];
  dataSource = new MatTableDataSource<EspecialistaSsiatResponse>([]);
  selection = new SelectionModel<EspecialistaSsiatResponse>(true, []);
  paginacion: PaginacionResponse = {};
  paginateFilters = { PageSize: PaginateConfig.PageSize, PageNumber: PaginateConfig.PageNumber };
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild('filtroInput', { static: false }) filtroInput!: ElementRef;
  filtroInformeRenac: string = '';

  constructor(
    private _appComponent: AppComponent,
    private _informeRenacService: InformeRenacService,
    private _fileService: FileManagerService,
    private _derivacionrenacservice: DerivacionRenacService,
    private _dialog: MatDialog
  ){
    this._appComponent.title = "Registro de informes SSIAT";
    this._appComponent.subtitle = "Registro de Circunscripción para Anotación.";
  }

  ngOnInit() { 
    this.obtenerListaInformesRenac();
  }

  openAddInformeRenacForm() { 

    const dialogRef = this._dialog.open(AddEditInformerenacComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //despues de cerrar el dialog, actualiza la tabla
          this.obtenerListaInformesRenac();
        }
      }
    });

  }

  openEditInformerenacForm(id: number) {
    const dialogRef = this._dialog.open(AddEditInformerenacComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if(val) {
          //despues de cerrar el dialog, actualiza la tabla
          this.obtenerListaInformesRenac();
        }
      }
    });
   }

  onDeleteInformeRenac(id: number) { 

    Swal.fire({
      title: '¿Estás seguro?',
      text: '¿Deseas eliminar el Infofme renac?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        const request: InformeRenacIdRequest = {
          idInformeRenac: id
        };
      
        this._informeRenacService.apiInformeRenacDeleteDelete$Json({ body: request }).subscribe({
          next: (response: InformeRenacResponseResponse) => {
              //se actualiza la tabla
              this.obtenerListaInformesRenac(); 
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

  applyFilter() { }

  obtenerListaInformesRenac(): void {

    const params = {
      filtro: this.filtroInformeRenac,
      PageSize: this.paginateFilters.PageSize,
      PageNumber: this.paginateFilters.PageNumber
    }; 

    this._informeRenacService.apiInformeRenacEspecialistaSsiatPaginatedGet$Json(params).subscribe({
      next: (response: EspecialistaSsiatListPaginatedResponseResponse) => {
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
      },
      complete: () => { }
    });

  }

  onPageChange(event: PageEvent) {
    this.paginateFilters.PageSize = event.pageSize;
    this.paginateFilters.PageNumber = event.pageIndex + 1;  
    this.obtenerListaInformesRenac();    
  }

  onDownloadInformeRenac(filepath: string) {

    const params = {
      IdFolderPath: FolderPath.rootPathRenac,
      FilePath: filepath
    };

    this._fileService.apiFileManagerDownloadFileGet$Json(params).subscribe({
      next: (response) => {
        //descarga el archivo
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

  onDerivarInformes() {

    const selectedRows =  this.selectedRows;

    if(selectedRows.length > 0) {
    
        
      const dialogRef = this._dialog.open(DerivarInformeEspssiatComponent, {
        data: {
          informesEspSsiatSelected: selectedRows
        }
      });
      dialogRef.afterClosed().subscribe({
        next: (val) => {
          if(val) {
            //despues de cerrar el dialog, actualiza la tabla
            this.obtenerListaInformesRenac();
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

  toggleRow(row: EspecialistaSsiatResponse) {
    const rowIndex = this.selectedRows.indexOf(row.idInformeRenac ?? 0);
    if (rowIndex >= 0) {
      this.selectedRows.splice(rowIndex, 1);
    } else {
      this.selectedRows.push(row.idInformeRenac ?? 0);
    }
  }

  checkboxLabel(row?: EspecialistaSsiatResponse): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.isSelected(row) ? 'deselect' : 'select'} row ${row.rownum ?? 0 + 1}`;
  }

  isSelected(row: EspecialistaSsiatResponse): boolean {
    return this.selectedRows.includes(row.idInformeRenac ?? 0);
  }

}
