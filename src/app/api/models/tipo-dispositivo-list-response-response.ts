/* tslint:disable */
/* eslint-disable */
import { TipoDispositivoListResponse } from './tipo-dispositivo-list-response';
import { ValidationFailure } from './validation-failure';
export interface TipoDispositivoListResponseResponse {
  data?: TipoDispositivoListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
