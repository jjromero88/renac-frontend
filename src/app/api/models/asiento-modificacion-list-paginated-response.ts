/* tslint:disable */
/* eslint-disable */
import { AsientoModificacionResponse } from './asiento-modificacion-response';
import { PaginacionResponse } from './paginacion-response';
export interface AsientoModificacionListPaginatedResponse {
  asientoModificacion?: null | Array<AsientoModificacionResponse>;
  paginacion?: PaginacionResponse;
}
