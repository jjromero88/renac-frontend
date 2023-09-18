/* tslint:disable */
/* eslint-disable */
import { DerivacionRenacDto } from './derivacion-renac-dto';
import { TipoDocumentoRenacDto } from './tipo-documento-renac-dto';
export interface DocumentoDerivacionResponse {
  activo?: null | boolean;
  derivacionRenac?: DerivacionRenacDto;
  fechaDocumento?: null | string;
  idDerivacionRenac?: null | number;
  idDocumentoDerivacion?: null | number;
  idTipoDocumentoRenac?: null | number;
  nombreDocumento?: null | string;
  numeroDocumento?: null | string;
  rutaDocumento?: null | string;
  tipoDocumentoRenac?: TipoDocumentoRenacDto;
}
