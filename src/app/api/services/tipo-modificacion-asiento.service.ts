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

import { TipoModificacionAsientoIdRequest } from '../models/tipo-modificacion-asiento-id-request';
import { TipoModificacionAsientoInsertRequest } from '../models/tipo-modificacion-asiento-insert-request';
import { TipoModificacionAsientoListPaginatedResponseResponse } from '../models/tipo-modificacion-asiento-list-paginated-response-response';
import { TipoModificacionAsientoListResponseResponse } from '../models/tipo-modificacion-asiento-list-response-response';
import { TipoModificacionAsientoResponseResponse } from '../models/tipo-modificacion-asiento-response-response';
import { TipoModificacionAsientoUpdateRequest } from '../models/tipo-modificacion-asiento-update-request';

@Injectable({
  providedIn: 'root',
})
export class TipoModificacionAsientoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTipoModificacionAsientoInsertPost
   */
  static readonly ApiTipoModificacionAsientoInsertPostPath = '/api/TipoModificacionAsiento/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoInsertPost$Plain$Response(params?: {
    body?: TipoModificacionAsientoInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoInsertPostPath, 'post');
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
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoInsertPost$Plain(params?: {
    body?: TipoModificacionAsientoInsertRequest
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoInsertPost$Json$Response(params?: {
    body?: TipoModificacionAsientoInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoInsertPostPath, 'post');
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
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoInsertPost$Json(params?: {
    body?: TipoModificacionAsientoInsertRequest
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoModificacionAsientoUpdatePut
   */
  static readonly ApiTipoModificacionAsientoUpdatePutPath = '/api/TipoModificacionAsiento/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoUpdatePut$Plain$Response(params?: {
    body?: TipoModificacionAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoUpdatePut$Plain(params?: {
    body?: TipoModificacionAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoUpdatePut$Json$Response(params?: {
    body?: TipoModificacionAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoUpdatePut$Json(params?: {
    body?: TipoModificacionAsientoUpdateRequest
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoModificacionAsientoDeleteDelete
   */
  static readonly ApiTipoModificacionAsientoDeleteDeletePath = '/api/TipoModificacionAsiento/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoDeleteDelete$Plain$Response(params?: {
    body?: TipoModificacionAsientoIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoDeleteDelete$Plain(params?: {
    body?: TipoModificacionAsientoIdRequest
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoDeleteDelete$Json$Response(params?: {
    body?: TipoModificacionAsientoIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoModificacionAsientoDeleteDelete$Json(params?: {
    body?: TipoModificacionAsientoIdRequest
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoModificacionAsientoGetByIdGet
   */
  static readonly ApiTipoModificacionAsientoGetByIdGetPath = '/api/TipoModificacionAsiento/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetByIdGet$Plain$Response(params?: {
    idTipoModificacionAsiento?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoGetByIdGetPath, 'get');
    if (params) {
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetByIdGet$Plain(params?: {
    idTipoModificacionAsiento?: number;
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetByIdGet$Json$Response(params?: {
    idTipoModificacionAsiento?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoGetByIdGetPath, 'get');
    if (params) {
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoModificacionAsientoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetByIdGet$Json(params?: {
    idTipoModificacionAsiento?: number;
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoResponseResponse> {

    return this.apiTipoModificacionAsientoGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoResponseResponse>) => r.body as TipoModificacionAsientoResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoModificacionAsientoGetListGet
   */
  static readonly ApiTipoModificacionAsientoGetListGetPath = '/api/TipoModificacionAsiento/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListGet$Plain$Response(params?: {
    idTipoModificacionAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoGetListGetPath, 'get');
    if (params) {
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
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
        return r as StrictHttpResponse<TipoModificacionAsientoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListGet$Plain(params?: {
    idTipoModificacionAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoListResponseResponse> {

    return this.apiTipoModificacionAsientoGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoListResponseResponse>) => r.body as TipoModificacionAsientoListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListGet$Json$Response(params?: {
    idTipoModificacionAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoGetListGetPath, 'get');
    if (params) {
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
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
        return r as StrictHttpResponse<TipoModificacionAsientoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListGet$Json(params?: {
    idTipoModificacionAsiento?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoListResponseResponse> {

    return this.apiTipoModificacionAsientoGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoListResponseResponse>) => r.body as TipoModificacionAsientoListResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoModificacionAsientoGetListPaginatedGet
   */
  static readonly ApiTipoModificacionAsientoGetListPaginatedGetPath = '/api/TipoModificacionAsiento/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListPaginatedGet$Plain$Response(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<TipoModificacionAsientoListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListPaginatedGet$Plain(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoListPaginatedResponseResponse> {

    return this.apiTipoModificacionAsientoGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoListPaginatedResponseResponse>) => r.body as TipoModificacionAsientoListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoModificacionAsientoGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListPaginatedGet$Json$Response(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoModificacionAsientoListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoModificacionAsientoService.ApiTipoModificacionAsientoGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<TipoModificacionAsientoListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoModificacionAsientoGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoModificacionAsientoGetListPaginatedGet$Json(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<TipoModificacionAsientoListPaginatedResponseResponse> {

    return this.apiTipoModificacionAsientoGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoModificacionAsientoListPaginatedResponseResponse>) => r.body as TipoModificacionAsientoListPaginatedResponseResponse)
    );
  }

}
