/* tslint:disable */
/* eslint-disable */
import { InformeDerivacionResponse } from './informe-derivacion-response';
import { ValidationFailure } from './validation-failure';
export interface InformeDerivacionResponseResponse {
  data?: InformeDerivacionResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
