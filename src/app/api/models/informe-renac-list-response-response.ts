/* tslint:disable */
/* eslint-disable */
import { InformeRenacListResponse } from './informe-renac-list-response';
import { ValidationFailure } from './validation-failure';
export interface InformeRenacListResponseResponse {
  data?: InformeRenacListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
