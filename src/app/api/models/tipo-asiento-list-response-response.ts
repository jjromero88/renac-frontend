/* tslint:disable */
/* eslint-disable */
import { TipoAsientoListResponse } from './tipo-asiento-list-response';
import { ValidationFailure } from './validation-failure';
export interface TipoAsientoListResponseResponse {
  data?: TipoAsientoListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
