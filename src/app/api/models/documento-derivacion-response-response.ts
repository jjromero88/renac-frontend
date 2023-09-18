/* tslint:disable */
/* eslint-disable */
import { DocumentoDerivacionResponse } from './documento-derivacion-response';
import { ValidationFailure } from './validation-failure';
export interface DocumentoDerivacionResponseResponse {
  data?: DocumentoDerivacionResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
