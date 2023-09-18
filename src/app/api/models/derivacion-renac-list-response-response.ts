/* tslint:disable */
/* eslint-disable */
import { DerivacionRenacListResponse } from './derivacion-renac-list-response';
import { ValidationFailure } from './validation-failure';
export interface DerivacionRenacListResponseResponse {
  data?: DerivacionRenacListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
