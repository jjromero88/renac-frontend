/* tslint:disable */
/* eslint-disable */
import { InformeDerivacionListResponse } from './informe-derivacion-list-response';
import { ValidationFailure } from './validation-failure';
export interface InformeDerivacionListResponseResponse {
  data?: InformeDerivacionListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
