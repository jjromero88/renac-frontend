/* tslint:disable */
/* eslint-disable */
import { TipoModificacionAsientoResponse } from './tipo-modificacion-asiento-response';
import { ValidationFailure } from './validation-failure';
export interface TipoModificacionAsientoResponseResponse {
  data?: TipoModificacionAsientoResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
