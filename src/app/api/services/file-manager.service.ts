/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { FileDownloadResponseResponse } from '../models/file-download-response-response';

@Injectable({
  providedIn: 'root',
})
export class FileManagerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiFileManagerDownloadFileGet
   */
  static readonly ApiFileManagerDownloadFileGetPath = '/api/FileManager/DownloadFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileManagerDownloadFileGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileManagerDownloadFileGet$Plain$Response(params?: {
    IdFolderPath?: number;
    FileName?: string;
    FilePath?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FileDownloadResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FileManagerService.ApiFileManagerDownloadFileGetPath, 'get');
    if (params) {
      rb.query('IdFolderPath', params.IdFolderPath, {});
      rb.query('FileName', params.FileName, {});
      rb.query('FilePath', params.FilePath, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileDownloadResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileManagerDownloadFileGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileManagerDownloadFileGet$Plain(params?: {
    IdFolderPath?: number;
    FileName?: string;
    FilePath?: string;
  },
  context?: HttpContext

): Observable<FileDownloadResponseResponse> {

    return this.apiFileManagerDownloadFileGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<FileDownloadResponseResponse>) => r.body as FileDownloadResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiFileManagerDownloadFileGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileManagerDownloadFileGet$Json$Response(params?: {
    IdFolderPath?: number;
    FileName?: string;
    FilePath?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FileDownloadResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, FileManagerService.ApiFileManagerDownloadFileGetPath, 'get');
    if (params) {
      rb.query('IdFolderPath', params.IdFolderPath, {});
      rb.query('FileName', params.FileName, {});
      rb.query('FilePath', params.FilePath, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<FileDownloadResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiFileManagerDownloadFileGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiFileManagerDownloadFileGet$Json(params?: {
    IdFolderPath?: number;
    FileName?: string;
    FilePath?: string;
  },
  context?: HttpContext

): Observable<FileDownloadResponseResponse> {

    return this.apiFileManagerDownloadFileGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<FileDownloadResponseResponse>) => r.body as FileDownloadResponseResponse)
    );
  }

}
