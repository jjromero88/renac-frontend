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

import { CircunscripcionListResponseResponse } from '../models/circunscripcion-list-response-response';

@Injectable({
  providedIn: 'root',
})
export class CircunscripcionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCircunscripcionGetListGet
   */
  static readonly ApiCircunscripcionGetListGetPath = '/api/Circunscripcion/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionGetListGet$Plain$Response(params?: {
    CodCircunscripcion?: number;
    TipCircunscripcion?: number;
    NomCircunscripcion?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionService.ApiCircunscripcionGetListGetPath, 'get');
    if (params) {
      rb.query('CodCircunscripcion', params.CodCircunscripcion, {});
      rb.query('TipCircunscripcion', params.TipCircunscripcion, {});
      rb.query('NomCircunscripcion', params.NomCircunscripcion, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CircunscripcionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionGetListGet$Plain(params?: {
    CodCircunscripcion?: number;
    TipCircunscripcion?: number;
    NomCircunscripcion?: string;
  },
  context?: HttpContext

): Observable<CircunscripcionListResponseResponse> {

    return this.apiCircunscripcionGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionListResponseResponse>) => r.body as CircunscripcionListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionGetListGet$Json$Response(params?: {
    CodCircunscripcion?: number;
    TipCircunscripcion?: number;
    NomCircunscripcion?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionService.ApiCircunscripcionGetListGetPath, 'get');
    if (params) {
      rb.query('CodCircunscripcion', params.CodCircunscripcion, {});
      rb.query('TipCircunscripcion', params.TipCircunscripcion, {});
      rb.query('NomCircunscripcion', params.NomCircunscripcion, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CircunscripcionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionGetListGet$Json(params?: {
    CodCircunscripcion?: number;
    TipCircunscripcion?: number;
    NomCircunscripcion?: string;
  },
  context?: HttpContext

): Observable<CircunscripcionListResponseResponse> {

    return this.apiCircunscripcionGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionListResponseResponse>) => r.body as CircunscripcionListResponseResponse)
    );
  }

}
