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

import { CircunscripcionOrigenDestinoIdRequest } from '../models/circunscripcion-origen-destino-id-request';
import { CircunscripcionOrigenDestinoInsertRequest } from '../models/circunscripcion-origen-destino-insert-request';
import { CircunscripcionOrigenDestinoListPaginatedResponseResponse } from '../models/circunscripcion-origen-destino-list-paginated-response-response';
import { CircunscripcionOrigenDestinoListResponseResponse } from '../models/circunscripcion-origen-destino-list-response-response';
import { CircunscripcionOrigenDestinoResponseResponse } from '../models/circunscripcion-origen-destino-response-response';
import { CircunscripcionOrigenDestinoUpdateRequest } from '../models/circunscripcion-origen-destino-update-request';

@Injectable({
  providedIn: 'root',
})
export class CircunscripcionOrigenDestinoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCircunscripcionOrigenDestinoInsertPost
   */
  static readonly ApiCircunscripcionOrigenDestinoInsertPostPath = '/api/CircunscripcionOrigenDestino/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoInsertPost$Plain$Response(params?: {
    body?: CircunscripcionOrigenDestinoInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoInsertPostPath, 'post');
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoInsertPost$Plain(params?: {
    body?: CircunscripcionOrigenDestinoInsertRequest
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoInsertPost$Json$Response(params?: {
    body?: CircunscripcionOrigenDestinoInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoInsertPostPath, 'post');
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoInsertPost$Json(params?: {
    body?: CircunscripcionOrigenDestinoInsertRequest
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * Path part for operation apiCircunscripcionOrigenDestinoUpdatePut
   */
  static readonly ApiCircunscripcionOrigenDestinoUpdatePutPath = '/api/CircunscripcionOrigenDestino/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoUpdatePut$Plain$Response(params?: {
    body?: CircunscripcionOrigenDestinoUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoUpdatePut$Plain(params?: {
    body?: CircunscripcionOrigenDestinoUpdateRequest
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoUpdatePut$Json$Response(params?: {
    body?: CircunscripcionOrigenDestinoUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoUpdatePut$Json(params?: {
    body?: CircunscripcionOrigenDestinoUpdateRequest
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * Path part for operation apiCircunscripcionOrigenDestinoDeleteDelete
   */
  static readonly ApiCircunscripcionOrigenDestinoDeleteDeletePath = '/api/CircunscripcionOrigenDestino/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoDeleteDelete$Plain$Response(params?: {
    body?: CircunscripcionOrigenDestinoIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoDeleteDelete$Plain(params?: {
    body?: CircunscripcionOrigenDestinoIdRequest
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoDeleteDelete$Json$Response(params?: {
    body?: CircunscripcionOrigenDestinoIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiCircunscripcionOrigenDestinoDeleteDelete$Json(params?: {
    body?: CircunscripcionOrigenDestinoIdRequest
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * Path part for operation apiCircunscripcionOrigenDestinoGetByIdGet
   */
  static readonly ApiCircunscripcionOrigenDestinoGetByIdGetPath = '/api/CircunscripcionOrigenDestino/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetByIdGet$Plain$Response(params?: {
    idCircunscripcionOrigenDestino?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoGetByIdGetPath, 'get');
    if (params) {
      rb.query('idCircunscripcionOrigenDestino', params.idCircunscripcionOrigenDestino, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetByIdGet$Plain(params?: {
    idCircunscripcionOrigenDestino?: number;
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetByIdGet$Json$Response(params?: {
    idCircunscripcionOrigenDestino?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoGetByIdGetPath, 'get');
    if (params) {
      rb.query('idCircunscripcionOrigenDestino', params.idCircunscripcionOrigenDestino, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetByIdGet$Json(params?: {
    idCircunscripcionOrigenDestino?: number;
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoResponseResponse>) => r.body as CircunscripcionOrigenDestinoResponseResponse)
    );
  }

  /**
   * Path part for operation apiCircunscripcionOrigenDestinoGetListGet
   */
  static readonly ApiCircunscripcionOrigenDestinoGetListGetPath = '/api/CircunscripcionOrigenDestino/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListGet$Plain$Response(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoGetListGetPath, 'get');
    if (params) {
      rb.query('idCircunscripcionOrigenDestino', params.idCircunscripcionOrigenDestino, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListGet$Plain(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoListResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoListResponseResponse>) => r.body as CircunscripcionOrigenDestinoListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListGet$Json$Response(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoGetListGetPath, 'get');
    if (params) {
      rb.query('idCircunscripcionOrigenDestino', params.idCircunscripcionOrigenDestino, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListGet$Json(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoListResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoListResponseResponse>) => r.body as CircunscripcionOrigenDestinoListResponseResponse)
    );
  }

  /**
   * Path part for operation apiCircunscripcionOrigenDestinoGetListPaginatedGet
   */
  static readonly ApiCircunscripcionOrigenDestinoGetListPaginatedGetPath = '/api/CircunscripcionOrigenDestino/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListPaginatedGet$Plain$Response(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idCircunscripcionOrigenDestino', params.idCircunscripcionOrigenDestino, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListPaginatedGet$Plain(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoListPaginatedResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoListPaginatedResponseResponse>) => r.body as CircunscripcionOrigenDestinoListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCircunscripcionOrigenDestinoGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListPaginatedGet$Json$Response(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<CircunscripcionOrigenDestinoListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, CircunscripcionOrigenDestinoService.ApiCircunscripcionOrigenDestinoGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idCircunscripcionOrigenDestino', params.idCircunscripcionOrigenDestino, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
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
        return r as StrictHttpResponse<CircunscripcionOrigenDestinoListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiCircunscripcionOrigenDestinoGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCircunscripcionOrigenDestinoGetListPaginatedGet$Json(params?: {
    idCircunscripcionOrigenDestino?: number;
    idAsientoCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<CircunscripcionOrigenDestinoListPaginatedResponseResponse> {

    return this.apiCircunscripcionOrigenDestinoGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<CircunscripcionOrigenDestinoListPaginatedResponseResponse>) => r.body as CircunscripcionOrigenDestinoListPaginatedResponseResponse)
    );
  }

}
