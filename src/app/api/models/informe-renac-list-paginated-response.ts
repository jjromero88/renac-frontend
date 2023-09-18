/* tslint:disable */
/* eslint-disable */
import { InformeRenacResponse } from './informe-renac-response';
import { PaginacionResponse } from './paginacion-response';
export interface InformeRenacListPaginatedResponse {
  informeRenac?: null | Array<InformeRenacResponse>;
  paginacion?: PaginacionResponse;
}
