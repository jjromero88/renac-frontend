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

import { TipoCircunscripcionListResponseResponse } from '../models/tipo-circunscripcion-list-response-response';

@Injectable({
  providedIn: 'root',
})
export class TipoCircunscripcionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTipoCircunscripcionGetListGet
   */
  static readonly ApiTipoCircunscripcionGetListGetPath = '/api/TipoCircunscripcion/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoCircunscripcionGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoCircunscripcionGetListGet$Plain$Response(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoCircunscripcionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoCircunscripcionService.ApiTipoCircunscripcionGetListGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('Grupo', params.Grupo, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoCircunscripcionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoCircunscripcionGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoCircunscripcionGetListGet$Plain(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<TipoCircunscripcionListResponseResponse> {

    return this.apiTipoCircunscripcionGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoCircunscripcionListResponseResponse>) => r.body as TipoCircunscripcionListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoCircunscripcionGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoCircunscripcionGetListGet$Json$Response(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoCircunscripcionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoCircunscripcionService.ApiTipoCircunscripcionGetListGetPath, 'get');
    if (params) {
      rb.query('Id', params.Id, {});
      rb.query('Grupo', params.Grupo, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoCircunscripcionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoCircunscripcionGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoCircunscripcionGetListGet$Json(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<TipoCircunscripcionListResponseResponse> {

    return this.apiTipoCircunscripcionGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoCircunscripcionListResponseResponse>) => r.body as TipoCircunscripcionListResponseResponse)
    );
  }

}
