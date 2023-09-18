/* tslint:disable */
/* eslint-disable */
import { InformeRenacListPaginatedResponse } from './informe-renac-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface InformeRenacListPaginatedResponseResponse {
  data?: InformeRenacListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
