/* tslint:disable */
/* eslint-disable */
import { InformeRenacResponse } from './informe-renac-response';
import { ValidationFailure } from './validation-failure';
export interface InformeRenacResponseResponse {
  data?: InformeRenacResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
