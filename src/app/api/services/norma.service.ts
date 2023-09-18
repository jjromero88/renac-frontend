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

import { NormaListResponseResponse } from '../models/norma-list-response-response';

@Injectable({
  providedIn: 'root',
})
export class NormaService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiNormaGetListGet
   */
  static readonly ApiNormaGetListGetPath = '/api/Norma/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNormaGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNormaGetListGet$Plain$Response(params?: {
    CodNorma?: number;
    Tipo?: number;
    Numero?: string;
    Fecha?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<NormaListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NormaService.ApiNormaGetListGetPath, 'get');
    if (params) {
      rb.query('CodNorma', params.CodNorma, {});
      rb.query('Tipo', params.Tipo, {});
      rb.query('Numero', params.Numero, {});
      rb.query('Fecha', params.Fecha, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NormaListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNormaGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNormaGetListGet$Plain(params?: {
    CodNorma?: number;
    Tipo?: number;
    Numero?: string;
    Fecha?: string;
  },
  context?: HttpContext

): Observable<NormaListResponseResponse> {

    return this.apiNormaGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<NormaListResponseResponse>) => r.body as NormaListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiNormaGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNormaGetListGet$Json$Response(params?: {
    CodNorma?: number;
    Tipo?: number;
    Numero?: string;
    Fecha?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<NormaListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, NormaService.ApiNormaGetListGetPath, 'get');
    if (params) {
      rb.query('CodNorma', params.CodNorma, {});
      rb.query('Tipo', params.Tipo, {});
      rb.query('Numero', params.Numero, {});
      rb.query('Fecha', params.Fecha, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<NormaListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiNormaGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiNormaGetListGet$Json(params?: {
    CodNorma?: number;
    Tipo?: number;
    Numero?: string;
    Fecha?: string;
  },
  context?: HttpContext

): Observable<NormaListResponseResponse> {

    return this.apiNormaGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<NormaListResponseResponse>) => r.body as NormaListResponseResponse)
    );
  }

}
