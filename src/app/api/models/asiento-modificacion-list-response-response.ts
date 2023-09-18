/* tslint:disable */
/* eslint-disable */
import { AsientoModificacionListResponse } from './asiento-modificacion-list-response';
import { ValidationFailure } from './validation-failure';
export interface AsientoModificacionListResponseResponse {
  data?: AsientoModificacionListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
