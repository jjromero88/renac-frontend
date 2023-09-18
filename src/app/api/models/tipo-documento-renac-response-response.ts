/* tslint:disable */
/* eslint-disable */
import { TipoDocumentoRenacResponse } from './tipo-documento-renac-response';
import { ValidationFailure } from './validation-failure';
export interface TipoDocumentoRenacResponseResponse {
  data?: TipoDocumentoRenacResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
