/* tslint:disable */
/* eslint-disable */
import { InformacionSsiatAsientosListResponse } from './informacion-ssiat-asientos-list-response';
import { ValidationFailure } from './validation-failure';
export interface InformacionSsiatAsientosListResponseResponse {
  data?: InformacionSsiatAsientosListResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
