/* tslint:disable */
/* eslint-disable */
import { ResponsableArchivoSolicitudInformacionListPaginatedResponse } from './responsable-archivo-solicitud-informacion-list-paginated-response';
import { ValidationFailure } from './validation-failure';
export interface ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse {
  data?: ResponsableArchivoSolicitudInformacionListPaginatedResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
