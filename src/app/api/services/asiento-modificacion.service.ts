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

import { AsientoModificacionIdRequest } from '../models/asiento-modificacion-id-request';
import { AsientoModificacionInsertRequest } from '../models/asiento-modificacion-insert-request';
import { AsientoModificacionListPaginatedResponseResponse } from '../models/asiento-modificacion-list-paginated-response-response';
import { AsientoModificacionListResponseResponse } from '../models/asiento-modificacion-list-response-response';
import { AsientoModificacionResponseResponse } from '../models/asiento-modificacion-response-response';
import { AsientoModificacionUpdateRequest } from '../models/asiento-modificacion-update-request';

@Injectable({
  providedIn: 'root',
})
export class AsientoModificacionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAsientoModificacionInsertPost
   */
  static readonly ApiAsientoModificacionInsertPostPath = '/api/AsientoModificacion/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionInsertPost$Plain$Response(params?: {
    body?: AsientoModificacionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionInsertPost$Plain(params?: {
    body?: AsientoModificacionInsertRequest
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionInsertPost$Json$Response(params?: {
    body?: AsientoModificacionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionInsertPost$Json(params?: {
    body?: AsientoModificacionInsertRequest
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoModificacionUpdatePut
   */
  static readonly ApiAsientoModificacionUpdatePutPath = '/api/AsientoModificacion/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionUpdatePut$Plain$Response(params?: {
    body?: AsientoModificacionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionUpdatePut$Plain(params?: {
    body?: AsientoModificacionUpdateRequest
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionUpdatePut$Json$Response(params?: {
    body?: AsientoModificacionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionUpdatePut$Json(params?: {
    body?: AsientoModificacionUpdateRequest
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoModificacionDeleteDelete
   */
  static readonly ApiAsientoModificacionDeleteDeletePath = '/api/AsientoModificacion/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionDeleteDelete$Plain$Response(params?: {
    body?: AsientoModificacionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionDeleteDelete$Plain(params?: {
    body?: AsientoModificacionIdRequest
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionDeleteDelete$Json$Response(params?: {
    body?: AsientoModificacionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoModificacionDeleteDelete$Json(params?: {
    body?: AsientoModificacionIdRequest
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoModificacionGetByIdGet
   */
  static readonly ApiAsientoModificacionGetByIdGetPath = '/api/AsientoModificacion/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetByIdGet$Plain$Response(params?: {
    idAsientoModificacion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idAsientoModificacion', params.idAsientoModificacion, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetByIdGet$Plain(params?: {
    idAsientoModificacion?: number;
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetByIdGet$Json$Response(params?: {
    idAsientoModificacion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idAsientoModificacion', params.idAsientoModificacion, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AsientoModificacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetByIdGet$Json(params?: {
    idAsientoModificacion?: number;
  },
  context?: HttpContext

): Observable<AsientoModificacionResponseResponse> {

    return this.apiAsientoModificacionGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionResponseResponse>) => r.body as AsientoModificacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoModificacionGetListGet
   */
  static readonly ApiAsientoModificacionGetListGetPath = '/api/AsientoModificacion/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListGet$Plain$Response(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionGetListGetPath, 'get');
    if (params) {
      rb.query('idAsientoModificacion', params.idAsientoModificacion, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
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
        return r as StrictHttpResponse<AsientoModificacionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListGet$Plain(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<AsientoModificacionListResponseResponse> {

    return this.apiAsientoModificacionGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionListResponseResponse>) => r.body as AsientoModificacionListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListGet$Json$Response(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionGetListGetPath, 'get');
    if (params) {
      rb.query('idAsientoModificacion', params.idAsientoModificacion, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
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
        return r as StrictHttpResponse<AsientoModificacionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListGet$Json(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<AsientoModificacionListResponseResponse> {

    return this.apiAsientoModificacionGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionListResponseResponse>) => r.body as AsientoModificacionListResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoModificacionGetListPaginatedGet
   */
  static readonly ApiAsientoModificacionGetListPaginatedGetPath = '/api/AsientoModificacion/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListPaginatedGet$Plain$Response(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idAsientoModificacion', params.idAsientoModificacion, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
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
        return r as StrictHttpResponse<AsientoModificacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListPaginatedGet$Plain(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<AsientoModificacionListPaginatedResponseResponse> {

    return this.apiAsientoModificacionGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionListPaginatedResponseResponse>) => r.body as AsientoModificacionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoModificacionGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListPaginatedGet$Json$Response(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoModificacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoModificacionService.ApiAsientoModificacionGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idAsientoModificacion', params.idAsientoModificacion, {});
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
      rb.query('idTipoModificacionAsiento', params.idTipoModificacionAsiento, {});
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
        return r as StrictHttpResponse<AsientoModificacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoModificacionGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoModificacionGetListPaginatedGet$Json(params?: {
    idAsientoModificacion?: number;
    idAsientoCircunscripcion?: number;
    idTipoModificacionAsiento?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<AsientoModificacionListPaginatedResponseResponse> {

    return this.apiAsientoModificacionGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoModificacionListPaginatedResponseResponse>) => r.body as AsientoModificacionListPaginatedResponseResponse)
    );
  }

}
