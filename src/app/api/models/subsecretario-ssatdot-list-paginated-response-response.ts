/* tslint:disable */
/* eslint-disable */
import { SubsecretarioSsatdotListPaginatedResponse } from './subsecretario-ssatdot-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface SubsecretarioSsatdotListPaginatedResponseResponse {
  data?: SubsecretarioSsatdotListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
