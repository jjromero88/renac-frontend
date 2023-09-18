/* tslint:disable */
/* eslint-disable */
import { FileDownloadResponse } from './file-download-response';
import { ValidationFailure } from './validation-failure';
export interface FileDownloadResponseResponse {
  data?: FileDownloadResponse;
  error?: boolean;
  errors?: null | Array<ValidationFailure>;
  isSuccess?: boolean;
  message?: null | string;
  resultList?: null | {
[key: string]: any;
};
}
