/* tslint:disable */
/* eslint-disable */
import { AsientoCircunscripcionResponse } from './asiento-circunscripcion-response';
import { ValidationFailure } from './validation-failure';
export interface AsientoCircunscripcionResponseResponse {
  data?: AsientoCircunscripcionResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
