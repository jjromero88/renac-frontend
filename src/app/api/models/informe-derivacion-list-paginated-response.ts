/* tslint:disable */
/* eslint-disable */
import { InformeDerivacionResponse } from './informe-derivacion-response';
import { PaginacionResponse } from './paginacion-response';
export interface InformeDerivacionListPaginatedResponse {
  informeDerivacion?: null | Array<InformeDerivacionResponse>;
  paginacion?: PaginacionResponse;
}
