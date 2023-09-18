/* tslint:disable */
/* eslint-disable */
import { DerivacionRenacListPaginatedResponse } from './derivacion-renac-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface DerivacionRenacListPaginatedResponseResponse {
  data?: DerivacionRenacListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
