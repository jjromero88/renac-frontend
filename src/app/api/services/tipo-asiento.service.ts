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

import { TipoAsientoIdRequest } from '../models/tipo-asiento-id-request';
import { TipoAsientoInsertRequest } from '../models/tipo-asiento-insert-request';
import { TipoAsientoListPaginatedResponseResponse } from '../models/tipo-asiento-list-paginated-response-response';
import { TipoAsientoListResponseResponse } from '../models/tipo-asiento-list-response-response';
import { TipoAsientoResponseResponse } from '../models/tipo-asiento-response-response';
import { TipoAsientoUpdateRequest } from '../models/tipo-asiento-update-request';

@Injectable({
  providedIn: 'root',
})
export class TipoAsientoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTipoAsientoInsertPost
   */
  static readonly ApiTipoAsientoInsertPostPath = '/api/TipoAsiento/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoInsertPost$Plain$Response(params?: {
    body?: TipoAsientoInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoInsertPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoInsertPost$Plain(params?: {
    body?: TipoAsientoInsertRequest
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoInsertPost$Json$Response(params?: {
    body?: TipoAsientoInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoInsertPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoInsertPost$Json(params?: {
    body?: TipoAsientoInsertRequest
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoAsientoUpdatePut
   */
  static readonly ApiTipoAsientoUpdatePutPath = '/api/TipoAsiento/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoUpdatePut$Plain$Response(params?: {
    body?: TipoAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoUpdatePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoUpdatePut$Plain(params?: {
    body?: TipoAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoUpdatePut$Json$Response(params?: {
    body?: TipoAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoUpdatePutPath, 'put');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoUpdatePut$Json(params?: {
    body?: TipoAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoAsientoDeleteDelete
   */
  static readonly ApiTipoAsientoDeleteDeletePath = '/api/TipoAsiento/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoDeleteDelete$Plain$Response(params?: {
    body?: TipoAsientoIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoDeleteDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoDeleteDelete$Plain(params?: {
    body?: TipoAsientoIdRequest
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoDeleteDelete$Json$Response(params?: {
    body?: TipoAsientoIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoDeleteDeletePath, 'delete');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoAsientoDeleteDelete$Json(params?: {
    body?: TipoAsientoIdRequest
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoAsientoGetByIdGet
   */
  static readonly ApiTipoAsientoGetByIdGetPath = '/api/TipoAsiento/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetByIdGet$Plain$Response(params?: {
    idTipoAsiento?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoGetByIdGetPath, 'get');
    if (params) {
      rb.query('idTipoAsiento', params.idTipoAsiento, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetByIdGet$Plain(params?: {
    idTipoAsiento?: number;
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetByIdGet$Json$Response(params?: {
    idTipoAsiento?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoGetByIdGetPath, 'get');
    if (params) {
      rb.query('idTipoAsiento', params.idTipoAsiento, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetByIdGet$Json(params?: {
    idTipoAsiento?: number;
  },
  context?: HttpContext

): Observable<TipoAsientoResponseResponse> {

    return this.apiTipoAsientoGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoResponseResponse>) => r.body as TipoAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoAsientoGetListGet
   */
  static readonly ApiTipoAsientoGetListGetPath = '/api/TipoAsiento/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListGet$Plain$Response(params?: {
    idTipoAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoGetListGetPath, 'get');
    if (params) {
      rb.query('idTipoAsiento', params.idTipoAsiento, {});
      rb.query('descripcion', params.descripcion, {});
      rb.query('activo', params.activo, {});
      rb.query('filtro', params.filtro, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListGet$Plain(params?: {
    idTipoAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<TipoAsientoListResponseResponse> {

    return this.apiTipoAsientoGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoListResponseResponse>) => r.body as TipoAsientoListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListGet$Json$Response(params?: {
    idTipoAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoGetListGetPath, 'get');
    if (params) {
      rb.query('idTipoAsiento', params.idTipoAsiento, {});
      rb.query('descripcion', params.descripcion, {});
      rb.query('activo', params.activo, {});
      rb.query('filtro', params.filtro, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListGet$Json(params?: {
    idTipoAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<TipoAsientoListResponseResponse> {

    return this.apiTipoAsientoGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoListResponseResponse>) => r.body as TipoAsientoListResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoAsientoGetListPaginatedGet
   */
  static readonly ApiTipoAsientoGetListPaginatedGetPath = '/api/TipoAsiento/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListPaginatedGet$Plain$Response(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('descripcion', params.descripcion, {});
      rb.query('activo', params.activo, {});
      rb.query('filtro', params.filtro, {});
      rb.query('PageSize', params.PageSize, {});
      rb.query('PageNumber', params.PageNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListPaginatedGet$Plain(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<TipoAsientoListPaginatedResponseResponse> {

    return this.apiTipoAsientoGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoListPaginatedResponseResponse>) => r.body as TipoAsientoListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoAsientoGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListPaginatedGet$Json$Response(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoAsientoListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoAsientoService.ApiTipoAsientoGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('descripcion', params.descripcion, {});
      rb.query('activo', params.activo, {});
      rb.query('filtro', params.filtro, {});
      rb.query('PageSize', params.PageSize, {});
      rb.query('PageNumber', params.PageNumber, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoAsientoListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoAsientoGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoAsientoGetListPaginatedGet$Json(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<TipoAsientoListPaginatedResponseResponse> {

    return this.apiTipoAsientoGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoAsientoListPaginatedResponseResponse>) => r.body as TipoAsientoListPaginatedResponseResponse)
    );
  }

}
