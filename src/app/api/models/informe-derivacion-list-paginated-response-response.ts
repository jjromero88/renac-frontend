/* tslint:disable */
/* eslint-disable */
import { InformeDerivacionListPaginatedResponse } from './informe-derivacion-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface InformeDerivacionListPaginatedResponseResponse {
  data?: InformeDerivacionListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
