/* tslint:disable */
/* eslint-disable */
import { CircunscripcionOrigenDestinoListPaginatedResponse } from './circunscripcion-origen-destino-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface CircunscripcionOrigenDestinoListPaginatedResponseResponse {
  data?: CircunscripcionOrigenDestinoListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
