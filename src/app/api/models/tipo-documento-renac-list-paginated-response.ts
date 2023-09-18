/* tslint:disable */
/* eslint-disable */
import { PaginacionResponse } from './paginacion-response';
import { TipoDocumentoRenacResponse } from './tipo-documento-renac-response';
export interface TipoDocumentoRenacListPaginatedResponse {
  paginacion?: PaginacionResponse;
  tipoDocumentoRenac?: null | Array<TipoDocumentoRenacResponse>;
}
