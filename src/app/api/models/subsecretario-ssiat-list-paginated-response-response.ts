/* tslint:disable */
/* eslint-disable */
import { SubsecretarioSsiatListPaginatedResponse } from './subsecretario-ssiat-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface SubsecretarioSsiatListPaginatedResponseResponse {
  data?: SubsecretarioSsiatListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
