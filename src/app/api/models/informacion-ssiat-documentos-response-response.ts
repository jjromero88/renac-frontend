/* tslint:disable */
/* eslint-disable */
import { InformacionSsiatDocumentosResponse } from './informacion-ssiat-documentos-response';
import { ValidationFailure } from './validation-failure';
export interface InformacionSsiatDocumentosResponseResponse {
  data?: InformacionSsiatDocumentosResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
