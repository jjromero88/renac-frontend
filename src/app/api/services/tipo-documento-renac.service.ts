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

import { TipoDocumentoRenacIdRequest } from '../models/tipo-documento-renac-id-request';
import { TipoDocumentoRenacInsertRequest } from '../models/tipo-documento-renac-insert-request';
import { TipoDocumentoRenacListPaginatedResponseResponse } from '../models/tipo-documento-renac-list-paginated-response-response';
import { TipoDocumentoRenacListResponseResponse } from '../models/tipo-documento-renac-list-response-response';
import { TipoDocumentoRenacResponseResponse } from '../models/tipo-documento-renac-response-response';
import { TipoDocumentoRenacUpdateRequest } from '../models/tipo-documento-renac-update-request';

@Injectable({
  providedIn: 'root',
})
export class TipoDocumentoRenacService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiTipoDocumentoRenacInsertPost
   */
  static readonly ApiTipoDocumentoRenacInsertPostPath = '/api/TipoDocumentoRenac/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacInsertPost$Plain$Response(params?: {
    body?: TipoDocumentoRenacInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacInsertPost$Plain(params?: {
    body?: TipoDocumentoRenacInsertRequest
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacInsertPost$Json$Response(params?: {
    body?: TipoDocumentoRenacInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacInsertPost$Json(params?: {
    body?: TipoDocumentoRenacInsertRequest
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoDocumentoRenacUpdatePut
   */
  static readonly ApiTipoDocumentoRenacUpdatePutPath = '/api/TipoDocumentoRenac/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacUpdatePut$Plain$Response(params?: {
    body?: TipoDocumentoRenacUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacUpdatePut$Plain(params?: {
    body?: TipoDocumentoRenacUpdateRequest
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacUpdatePut$Json$Response(params?: {
    body?: TipoDocumentoRenacUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacUpdatePut$Json(params?: {
    body?: TipoDocumentoRenacUpdateRequest
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoDocumentoRenacDeleteDelete
   */
  static readonly ApiTipoDocumentoRenacDeleteDeletePath = '/api/TipoDocumentoRenac/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacDeleteDelete$Plain$Response(params?: {
    body?: TipoDocumentoRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacDeleteDelete$Plain(params?: {
    body?: TipoDocumentoRenacIdRequest
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacDeleteDelete$Json$Response(params?: {
    body?: TipoDocumentoRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiTipoDocumentoRenacDeleteDelete$Json(params?: {
    body?: TipoDocumentoRenacIdRequest
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoDocumentoRenacGetByIdGet
   */
  static readonly ApiTipoDocumentoRenacGetByIdGetPath = '/api/TipoDocumentoRenac/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetByIdGet$Plain$Response(params?: {
    idTipoDocumentoRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacGetByIdGetPath, 'get');
    if (params) {
      rb.query('idTipoDocumentoRenac', params.idTipoDocumentoRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetByIdGet$Plain(params?: {
    idTipoDocumentoRenac?: number;
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetByIdGet$Json$Response(params?: {
    idTipoDocumentoRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacGetByIdGetPath, 'get');
    if (params) {
      rb.query('idTipoDocumentoRenac', params.idTipoDocumentoRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TipoDocumentoRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetByIdGet$Json(params?: {
    idTipoDocumentoRenac?: number;
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacResponseResponse> {

    return this.apiTipoDocumentoRenacGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacResponseResponse>) => r.body as TipoDocumentoRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoDocumentoRenacGetListGet
   */
  static readonly ApiTipoDocumentoRenacGetListGetPath = '/api/TipoDocumentoRenac/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListGet$Plain$Response(params?: {
    idTipoDocumentoRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idTipoDocumentoRenac', params.idTipoDocumentoRenac, {});
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
        return r as StrictHttpResponse<TipoDocumentoRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListGet$Plain(params?: {
    idTipoDocumentoRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacListResponseResponse> {

    return this.apiTipoDocumentoRenacGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacListResponseResponse>) => r.body as TipoDocumentoRenacListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListGet$Json$Response(params?: {
    idTipoDocumentoRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idTipoDocumentoRenac', params.idTipoDocumentoRenac, {});
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
        return r as StrictHttpResponse<TipoDocumentoRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListGet$Json(params?: {
    idTipoDocumentoRenac?: number;
    descripcion?: string;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacListResponseResponse> {

    return this.apiTipoDocumentoRenacGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacListResponseResponse>) => r.body as TipoDocumentoRenacListResponseResponse)
    );
  }

  /**
   * Path part for operation apiTipoDocumentoRenacGetListPaginatedGet
   */
  static readonly ApiTipoDocumentoRenacGetListPaginatedGetPath = '/api/TipoDocumentoRenac/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    descripcion?: string;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('activo', params.activo, {});
      rb.query('descripcion', params.descripcion, {});
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
        return r as StrictHttpResponse<TipoDocumentoRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListPaginatedGet$Plain(params?: {
    activo?: boolean;
    descripcion?: string;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacListPaginatedResponseResponse> {

    return this.apiTipoDocumentoRenacGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacListPaginatedResponseResponse>) => r.body as TipoDocumentoRenacListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiTipoDocumentoRenacGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    descripcion?: string;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TipoDocumentoRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, TipoDocumentoRenacService.ApiTipoDocumentoRenacGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('activo', params.activo, {});
      rb.query('descripcion', params.descripcion, {});
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
        return r as StrictHttpResponse<TipoDocumentoRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiTipoDocumentoRenacGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiTipoDocumentoRenacGetListPaginatedGet$Json(params?: {
    activo?: boolean;
    descripcion?: string;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<TipoDocumentoRenacListPaginatedResponseResponse> {

    return this.apiTipoDocumentoRenacGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<TipoDocumentoRenacListPaginatedResponseResponse>) => r.body as TipoDocumentoRenacListPaginatedResponseResponse)
    );
  }

}
