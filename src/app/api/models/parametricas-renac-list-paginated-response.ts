/* tslint:disable */
/* eslint-disable */
import { PaginacionResponse } from './paginacion-response';
import { ParametricasRenacResponse } from './parametricas-renac-response';
export interface ParametricasRenacListPaginatedResponse {
  paginacion?: PaginacionResponse;
  parametricasRenac?: null | Array<ParametricasRenacResponse>;
}
