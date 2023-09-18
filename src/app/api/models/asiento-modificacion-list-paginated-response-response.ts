/* tslint:disable */
/* eslint-disable */
import { AsientoModificacionListPaginatedResponse } from './asiento-modificacion-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface AsientoModificacionListPaginatedResponseResponse {
  data?: AsientoModificacionListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
