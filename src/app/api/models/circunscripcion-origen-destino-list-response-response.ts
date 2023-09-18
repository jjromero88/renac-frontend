/* tslint:disable */
/* eslint-disable */
import { CircunscripcionOrigenDestinoListResponse } from './circunscripcion-origen-destino-list-response';
import { ValidationFailure } from './validation-failure';
export interface CircunscripcionOrigenDestinoListResponseResponse {
  data?: CircunscripcionOrigenDestinoListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
