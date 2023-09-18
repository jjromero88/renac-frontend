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

import { TipoDispositivoListResponseResponse } from '../models/tipo-dispositivo-list-response-response';

@Injectable({
  providedIn: 'root',
})
export class TipoDispositivoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTipoDispositivoGetListGet
   */
  static readonly ApiTipoDispositivoGetListGetPath = '/api/TipoDispositivo/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDispositivoGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDispositivoGetListGet$Plain$Response(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDispositivoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDispositivoService.ApiTipoDispositivoGetListGetPath, 'get');
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
        return r as StrictHttpResponse<TipoDispositivoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDispositivoGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDispositivoGetListGet$Plain(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<TipoDispositivoListResponseResponse> {

    return this.apiTipoDispositivoGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDispositivoListResponseResponse>) => r.body as TipoDispositivoListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDispositivoGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDispositivoGetListGet$Json$Response(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDispositivoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDispositivoService.ApiTipoDispositivoGetListGetPath, 'get');
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
        return r as StrictHttpResponse<TipoDispositivoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDispositivoGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDispositivoGetListGet$Json(params?: {
    Id?: number;
    Grupo?: number;
  },
  context?: HttpContext

): Observable<TipoDispositivoListResponseResponse> {

    return this.apiTipoDispositivoGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDispositivoListResponseResponse>) => r.body as TipoDispositivoListResponseResponse)
    );
  }

}
