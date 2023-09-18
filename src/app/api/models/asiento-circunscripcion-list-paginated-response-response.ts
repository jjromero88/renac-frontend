/* tslint:disable */
/* eslint-disable */
import { AsientoCircunscripcionListPaginatedResponse } from './asiento-circunscripcion-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface AsientoCircunscripcionListPaginatedResponseResponse {
  data?: AsientoCircunscripcionListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
