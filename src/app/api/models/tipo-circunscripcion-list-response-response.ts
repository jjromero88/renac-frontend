/* tslint:disable */
/* eslint-disable */
import { TipoCircunscripcionListResponse } from './tipo-circunscripcion-list-response';
import { ValidationFailure } from './validation-failure';
export interface TipoCircunscripcionListResponseResponse {
  data?: TipoCircunscripcionListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
