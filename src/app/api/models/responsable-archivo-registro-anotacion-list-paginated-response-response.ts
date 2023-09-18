/* tslint:disable */
/* eslint-disable */
import { ResponsableArchivoRegistroAnotacionListPaginatedResponse } from './responsable-archivo-registro-anotacion-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse {
  data?: ResponsableArchivoRegistroAnotacionListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
