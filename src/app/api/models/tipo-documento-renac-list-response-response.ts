/* tslint:disable */
/* eslint-disable */
import { TipoDocumentoRenacListResponse } from './tipo-documento-renac-list-response';
import { ValidationFailure } from './validation-failure';
export interface TipoDocumentoRenacListResponseResponse {
  data?: TipoDocumentoRenacListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
