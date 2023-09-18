/* tslint:disable */
/* eslint-disable */
import { CircunscripcionListResponse } from './circunscripcion-list-response';
import { ValidationFailure } from './validation-failure';
export interface CircunscripcionListResponseResponse {
  data?: CircunscripcionListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
