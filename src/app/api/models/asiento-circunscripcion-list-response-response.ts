/* tslint:disable */
/* eslint-disable */
import { AsientoCircunscripcionListResponse } from './asiento-circunscripcion-list-response';
import { ValidationFailure } from './validation-failure';
export interface AsientoCircunscripcionListResponseResponse {
  data?: AsientoCircunscripcionListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
