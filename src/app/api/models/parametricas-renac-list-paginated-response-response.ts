/* tslint:disable */
/* eslint-disable */
import { ParametricasRenacListPaginatedResponse } from './parametricas-renac-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface ParametricasRenacListPaginatedResponseResponse {
  data?: ParametricasRenacListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
