/* tslint:disable */
/* eslint-disable */
import { TipoAsientoListPaginatedResponse } from './tipo-asiento-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface TipoAsientoListPaginatedResponseResponse {
  data?: TipoAsientoListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
