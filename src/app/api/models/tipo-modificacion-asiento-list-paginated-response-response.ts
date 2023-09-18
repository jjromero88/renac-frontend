/* tslint:disable */
/* eslint-disable */
import { TipoModificacionAsientoListPaginatedResponse } from './tipo-modificacion-asiento-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface TipoModificacionAsientoListPaginatedResponseResponse {
  data?: TipoModificacionAsientoListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
