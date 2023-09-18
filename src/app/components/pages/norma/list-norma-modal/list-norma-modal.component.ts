import { Component, OnInit, ViewChild, Inject, ElementRef} from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NormaListResponseResponse, NormaResponse, TipoDispositivoListResponse, TipoDispositivoListResponseResponse, TipoDispositivoResponse } from 'src/app/api/models';
import { FileManagerService, NormaService, TipoDispositivoService } from 'src/app/api/services';
import { formatDate, formatDateFromStringToPostgreSql } from 'src/app/components/shared/Util/date-utils';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import { FolderPath } from 'src/app/models/FilesConfig';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-norma-modal',
  templateUrl: './list-norma-modal.component.html',
  styleUrls: ['./list-norma-modal.component.scss']
})
export class ListNormaModalComponent implements OnInit   {

  dataSource = new MatTableDataSource<NormaResponse>([]);
  displayedColumns: string[] = ['tipodispositivo', 'numero', 'fecha', 'norma', 'eleccion' ];
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild('filtroNumero', { static: false }) filtroNumero!: ElementRef;

  tipoNormaList: TipoDispositivoResponse[] = [];
  selectedTipoNorma: any;
  tipoNorma: number |  undefined = undefined;
  numeroNorma: string | undefined = undefined;
  fechaNorma: string | undefined = undefined;
 

  constructor(
    private _normaService: NormaService,
    private _tipoDispositivoService: TipoDispositivoService,
    private _fileService: FileManagerService,
    private _dialogRef: MatDialogRef<ListNormaModalComponent>,
    @Inject(MAT_DIALOG_DATA) public serialkey: number
  ) {  
  } 

  ngOnInit(): void {    
     this.getListaNormas();
     this.getListaTiposNorma();
  }

  getListaTiposNorma() {
    this._tipoDispositivoService.apiTipoDispositivoGetListGet$Json().subscribe({
      next: (response: TipoDispositivoListResponseResponse) => {
        if (response.data) {         
          const dataList: TipoDispositivoListResponse | undefined = response.data;
          //this.tipoNormaList = (dataList as TipoDispositivoResponse[]) ?? [];
          this.tipoNormaList = [
            { id: undefined, descripcion: '[Todos]' },
            ...(dataList as TipoDispositivoResponse[]) ?? []
          ];
        }
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Ha ocurrido un problema al obtener los tipos de asiento',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });
  }

  getListaNormas() {

    const params = {
      Tipo:  this.tipoNorma ?? undefined,
      Numero: this.numeroNorma ?? undefined,
      Fecha: formatDateFromStringToPostgreSql(this.fechaNorma) ?? undefined
    };

    this._normaService.apiNormaGetListGet$Json(params).subscribe({
      next: (response: NormaListResponseResponse) => {

         if (response.data) {
          const data = response.data || [];          
          this.dataSource.data = (data as NormaResponse[]) ?? [];          
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'No se pudieron cargar las normas',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });

  }
  
  onSelectedNorma(objNorma: NormaResponse) {
    this._dialogRef.close(objNorma);
  }

  onDownloadNorma(filePath: string) {

    const params = {
      IdFolderPath: FolderPath.rootPathRenlim,
      FilePath: filePath
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

  onChangeTipoNorma( ) {
    if (this.selectedTipoNorma || this.selectedTipoNorma === undefined) {
      const selectedOption = this.tipoNormaList.find(option => option.id === this.selectedTipoNorma);
      this.tipoNorma = selectedOption?.id ?? undefined;
      this.getListaNormas();
    }
  }

  onChangeFecha(event: MatDatepickerInputEvent<Date>) {
    const fechaSeleccionada: Date| null | undefined = event.value ?? null;
    this.fechaNorma =  formatDate(fechaSeleccionada),
    this.getListaNormas();
  }

  onChangeNumero(){
    this.numeroNorma = this.filtroNumero.nativeElement.value.trim();
    this.getListaNormas();
  }

}
