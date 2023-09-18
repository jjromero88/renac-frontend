/* tslint:disable */
/* eslint-disable */
import { DocumentoDerivacionListResponse } from './documento-derivacion-list-response';
import { ValidationFailure } from './validation-failure';
export interface DocumentoDerivacionListResponseResponse {
  data?: DocumentoDerivacionListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
