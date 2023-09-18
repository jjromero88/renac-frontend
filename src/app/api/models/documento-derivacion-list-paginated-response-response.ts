/* tslint:disable */
/* eslint-disable */
import { DocumentoDerivacionListPaginatedResponse } from './documento-derivacion-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface DocumentoDerivacionListPaginatedResponseResponse {
  data?: DocumentoDerivacionListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
