/* tslint:disable */
/* eslint-disable */
import { ParametricasRenacResponse } from './parametricas-renac-response';
import { ValidationFailure } from './validation-failure';
export interface ParametricasRenacResponseResponse {
  data?: ParametricasRenacResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
