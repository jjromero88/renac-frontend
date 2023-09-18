/* tslint:disable */
/* eslint-disable */
import { TipoAsientoResponse } from './tipo-asiento-response';
import { ValidationFailure } from './validation-failure';
export interface TipoAsientoResponseResponse {
  data?: TipoAsientoResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
