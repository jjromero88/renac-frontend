/* tslint:disable */
/* eslint-disable */
import { DerivacionRenacResponse } from './derivacion-renac-response';
import { ValidationFailure } from './validation-failure';
export interface DerivacionRenacResponseResponse {
  data?: DerivacionRenacResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
