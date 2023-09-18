/* tslint:disable */
/* eslint-disable */
import { PaginacionResponse } from './paginacion-response';
import { TipoModificacionAsientoResponse } from './tipo-modificacion-asiento-response';
export interface TipoModificacionAsientoListPaginatedResponse {
  paginacion?: PaginacionResponse;
  tipoModificacionAsiento?: null | Array<TipoModificacionAsientoResponse>;
}
