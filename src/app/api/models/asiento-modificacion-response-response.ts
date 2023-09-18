/* tslint:disable */
/* eslint-disable */
import { AsientoModificacionResponse } from './asiento-modificacion-response';
import { ValidationFailure } from './validation-failure';
export interface AsientoModificacionResponseResponse {
  data?: AsientoModificacionResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
