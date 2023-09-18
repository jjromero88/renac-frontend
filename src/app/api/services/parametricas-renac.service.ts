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

import { ParametricasRenacIdRequest } from '../models/parametricas-renac-id-request';
import { ParametricasRenacInsertRequest } from '../models/parametricas-renac-insert-request';
import { ParametricasRenacListPaginatedResponseResponse } from '../models/parametricas-renac-list-paginated-response-response';
import { ParametricasRenacListResponseResponse } from '../models/parametricas-renac-list-response-response';
import { ParametricasRenacResponseResponse } from '../models/parametricas-renac-response-response';
import { ParametricasRenacUpdateRequest } from '../models/parametricas-renac-update-request';

@Injectable({
  providedIn: 'root',
})
export class ParametricasRenacService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiParametricasRenacInsertPost
   */
  static readonly ApiParametricasRenacInsertPostPath = '/api/ParametricasRenac/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacInsertPost$Plain$Response(params?: {
    body?: ParametricasRenacInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacInsertPost$Plain(params?: {
    body?: ParametricasRenacInsertRequest
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacInsertPost$Json$Response(params?: {
    body?: ParametricasRenacInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacInsertPost$Json(params?: {
    body?: ParametricasRenacInsertRequest
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiParametricasRenacUpdatePut
   */
  static readonly ApiParametricasRenacUpdatePutPath = '/api/ParametricasRenac/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacUpdatePut$Plain$Response(params?: {
    body?: ParametricasRenacUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacUpdatePut$Plain(params?: {
    body?: ParametricasRenacUpdateRequest
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacUpdatePut$Json$Response(params?: {
    body?: ParametricasRenacUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacUpdatePut$Json(params?: {
    body?: ParametricasRenacUpdateRequest
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiParametricasRenacDeleteDelete
   */
  static readonly ApiParametricasRenacDeleteDeletePath = '/api/ParametricasRenac/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacDeleteDelete$Plain$Response(params?: {
    body?: ParametricasRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacDeleteDelete$Plain(params?: {
    body?: ParametricasRenacIdRequest
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacDeleteDelete$Json$Response(params?: {
    body?: ParametricasRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiParametricasRenacDeleteDelete$Json(params?: {
    body?: ParametricasRenacIdRequest
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiParametricasRenacGetByIdGet
   */
  static readonly ApiParametricasRenacGetByIdGetPath = '/api/ParametricasRenac/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetByIdGet$Plain$Response(params?: {
    idParametricasRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacGetByIdGetPath, 'get');
    if (params) {
      rb.query('idParametricasRenac', params.idParametricasRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetByIdGet$Plain(params?: {
    idParametricasRenac?: number;
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetByIdGet$Json$Response(params?: {
    idParametricasRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacGetByIdGetPath, 'get');
    if (params) {
      rb.query('idParametricasRenac', params.idParametricasRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ParametricasRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetByIdGet$Json(params?: {
    idParametricasRenac?: number;
  },
  context?: HttpContext

): Observable<ParametricasRenacResponseResponse> {

    return this.apiParametricasRenacGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacResponseResponse>) => r.body as ParametricasRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiParametricasRenacGetListGet
   */
  static readonly ApiParametricasRenacGetListGetPath = '/api/ParametricasRenac/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListGet$Plain$Response(params?: {
    idParametricasRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idParametricasRenac', params.idParametricasRenac, {});
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
        return r as StrictHttpResponse<ParametricasRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListGet$Plain(params?: {
    idParametricasRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<ParametricasRenacListResponseResponse> {

    return this.apiParametricasRenacGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacListResponseResponse>) => r.body as ParametricasRenacListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListGet$Json$Response(params?: {
    idParametricasRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idParametricasRenac', params.idParametricasRenac, {});
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
        return r as StrictHttpResponse<ParametricasRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListGet$Json(params?: {
    idParametricasRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<ParametricasRenacListResponseResponse> {

    return this.apiParametricasRenacGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacListResponseResponse>) => r.body as ParametricasRenacListResponseResponse)
    );
  }

  /**
   * Path part for operation apiParametricasRenacGetListPaginatedGet
   */
  static readonly ApiParametricasRenacGetListPaginatedGetPath = '/api/ParametricasRenac/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListPaginatedGet$Plain$Response(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<ParametricasRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListPaginatedGet$Plain(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<ParametricasRenacListPaginatedResponseResponse> {

    return this.apiParametricasRenacGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacListPaginatedResponseResponse>) => r.body as ParametricasRenacListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiParametricasRenacGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListPaginatedGet$Json$Response(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ParametricasRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, ParametricasRenacService.ApiParametricasRenacGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<ParametricasRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiParametricasRenacGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiParametricasRenacGetListPaginatedGet$Json(params?: {
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<ParametricasRenacListPaginatedResponseResponse> {

    return this.apiParametricasRenacGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ParametricasRenacListPaginatedResponseResponse>) => r.body as ParametricasRenacListPaginatedResponseResponse)
    );
  }

}
