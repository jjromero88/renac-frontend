/* tslint:disable */
/* eslint-disable */
import { CircunscripcionOrigenDestinoResponse } from './circunscripcion-origen-destino-response';
import { ValidationFailure } from './validation-failure';
export interface CircunscripcionOrigenDestinoResponseResponse {
  data?: CircunscripcionOrigenDestinoResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
