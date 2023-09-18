/* tslint:disable */
/* eslint-disable */
import { PaginacionResponse } from './paginacion-response';
import { TipoAsientoResponse } from './tipo-asiento-response';
export interface TipoAsientoListPaginatedResponse {
  paginacion?: PaginacionResponse;
  tipoAsiento?: null | Array<TipoAsientoResponse>;
}
