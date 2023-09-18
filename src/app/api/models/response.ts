/* tslint:disable */
/* eslint-disable */
import { ValidationFailure } from './validation-failure';
export interface Response {
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
