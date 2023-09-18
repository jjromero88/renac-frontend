/* tslint:disable */
/* eslint-disable */
import { Severity } from './severity';
export interface ValidationFailure {
  attemptedValue?: null | any;
  customState?: null | any;
  errorCode?: null | string;
  errorMessage?: null | string;
  formattedMessagePlaceholderValues?: null | {
[key: string]: any;
};
  propertyName?: null | string;
  severity?: Severity;
}
