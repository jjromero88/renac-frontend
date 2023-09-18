/* tslint:disable */
/* eslint-disable */
import { EspecialistaSsiatListPaginatedResponse } from './especialista-ssiat-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface EspecialistaSsiatListPaginatedResponseResponse {
  data?: EspecialistaSsiatListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
