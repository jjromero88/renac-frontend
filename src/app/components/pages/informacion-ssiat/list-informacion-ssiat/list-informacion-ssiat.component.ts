import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { InformacionSsiatAsientosListResponseResponse, InformacionSsiatAsientosResponse, InformacionSsiatDocumentosResponse, InformacionSsiatDocumentosResponseResponse } from 'src/app/api/models';
import { AsientoCircunscripcionService } from '../../../../api/services/asiento-circunscripcion.service';
import { FileManagerService, InformeRenacService } from 'src/app/api/services';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FolderPath } from 'src/app/models/FilesConfig';
import { downloadBase64File } from 'src/app/components/shared/Util/file-utils';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-informacion-ssiat',
  templateUrl: './list-informacion-ssiat.component.html',
  styleUrls: ['./list-informacion-ssiat.component.scss']
})
export class ListInformacionSsiatComponent implements OnInit {

  documentosSsiat: InformacionSsiatDocumentosResponse | undefined = undefined;
  idInformeRenac: number |  undefined = undefined;
  dataSource = new MatTableDataSource<InformacionSsiatAsientosResponse>([]);
  displayedColumns: string[] = ['asiento', 'tipodispositivo', 'numero', 'fecha', 'norma' ];
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;

  constructor(
    private _asientoService: AsientoCircunscripcionService,
    private _informeRenacservice: InformeRenacService,
    private _fileService: FileManagerService,
    private _dialogRef: MatDialogRef<ListInformacionSsiatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){
      this.idInformeRenac = data.idInformeRenac;
  }

  ngOnInit(): void {
    this.getListaAsientos();
    this.getDocumentosSsiat();
  }

  getListaAsientos(){

    const params = {
      idInformeRenac:  this.idInformeRenac ?? undefined
    };

    this._asientoService.apiAsientoCircunscripcionInformacionSsiatAsientosGet$Json(params).subscribe({
      next: (response: InformacionSsiatAsientosListResponseResponse) => {
         if (response.data) {
          const data = response.data.lista || [];          
          this.dataSource.data = (data as InformacionSsiatAsientosResponse[]) ?? [];          
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'No se pudieron cargar los asientos',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });

  }

  getDocumentosSsiat() {

    const params = {
      idInformeRenac:  this.idInformeRenac ?? undefined
    };

    this._informeRenacservice.apiInformeRenacInformacionSsiatDocumentosGet$Json(params).subscribe({
      next: (response: InformacionSsiatDocumentosResponseResponse) => {
         if (response.data) {          
          this.documentosSsiat = response.data;    
        }
      },
      error: (error) => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'No se pudieron cargar los documentos del informe',
          text: error.error.message,
          confirmButtonText: 'OK'
        });
      }
    });

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

  onDownloadDocumentoSsiat( filePath: string | null | undefined ){
    
    const params = {
      IdFolderPath: FolderPath.rootPathRenac,
      FilePath: filePath ?? ""
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
