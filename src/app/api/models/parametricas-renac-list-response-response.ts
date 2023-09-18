/* tslint:disable */
/* eslint-disable */
import { ParametricasRenacListResponse } from './parametricas-renac-list-response';
import { ValidationFailure } from './validation-failure';
export interface ParametricasRenacListResponseResponse {
  data?: ParametricasRenacListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
