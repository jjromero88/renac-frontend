/* tslint:disable */
/* eslint-disable */
import { EspecialistaSsiatRegistroFormatosListPaginatedResponse } from './especialista-ssiat-registro-formatos-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse {
  data?: EspecialistaSsiatRegistroFormatosListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
