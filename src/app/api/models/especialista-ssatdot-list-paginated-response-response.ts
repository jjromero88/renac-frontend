/* tslint:disable */
/* eslint-disable */
import { EspecialistaSsatdotListPaginatedResponse } from './especialista-ssatdot-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface EspecialistaSsatdotListPaginatedResponseResponse {
  data?: EspecialistaSsatdotListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
