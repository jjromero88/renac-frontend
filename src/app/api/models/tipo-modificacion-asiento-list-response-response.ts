/* tslint:disable */
/* eslint-disable */
import { TipoModificacionAsientoListResponse } from './tipo-modificacion-asiento-list-response';
import { ValidationFailure } from './validation-failure';
export interface TipoModificacionAsientoListResponseResponse {
  data?: TipoModificacionAsientoListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
