/* tslint:disable */
/* eslint-disable */
import { TipoDocumentoRenacListPaginatedResponse } from './tipo-documento-renac-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface TipoDocumentoRenacListPaginatedResponseResponse {
  data?: TipoDocumentoRenacListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
