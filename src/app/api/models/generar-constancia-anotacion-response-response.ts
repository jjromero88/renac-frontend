/* tslint:disable */
/* eslint-disable */
import { GenerarConstanciaAnotacionResponse } from './generar-constancia-anotacion-response';
import { ValidationFailure } from './validation-failure';
export interface GenerarConstanciaAnotacionResponseResponse {
  data?: GenerarConstanciaAnotacionResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
