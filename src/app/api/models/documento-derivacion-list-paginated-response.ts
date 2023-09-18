/* tslint:disable */
/* eslint-disable */
import { DocumentoDerivacionResponse } from './documento-derivacion-response';
import { PaginacionResponse } from './paginacion-response';
export interface DocumentoDerivacionListPaginatedResponse {
  documentoDerivacion?: null | Array<DocumentoDerivacionResponse>;
  paginacion?: PaginacionResponse;
}
