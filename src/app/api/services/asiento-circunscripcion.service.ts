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

import { AsientoCircunscripcionIdRequest } from '../models/asiento-circunscripcion-id-request';
import { AsientoCircunscripcionInsertRequest } from '../models/asiento-circunscripcion-insert-request';
import { AsientoCircunscripcionListPaginatedResponseResponse } from '../models/asiento-circunscripcion-list-paginated-response-response';
import { AsientoCircunscripcionListResponseResponse } from '../models/asiento-circunscripcion-list-response-response';
import { AsientoCircunscripcionResponseResponse } from '../models/asiento-circunscripcion-response-response';
import { AsientoCircunscripcionUpdateRequest } from '../models/asiento-circunscripcion-update-request';
import { InformacionSsiatAsientosListResponseResponse } from '../models/informacion-ssiat-asientos-list-response-response';

@Injectable({
  providedIn: 'root',
})
export class AsientoCircunscripcionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAsientoCircunscripcionInsertPost
   */
  static readonly ApiAsientoCircunscripcionInsertPostPath = '/api/AsientoCircunscripcion/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionInsertPost$Plain$Response(params?: {
    body?: AsientoCircunscripcionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionInsertPost$Plain(params?: {
    body?: AsientoCircunscripcionInsertRequest
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionInsertPost$Json$Response(params?: {
    body?: AsientoCircunscripcionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionInsertPost$Json(params?: {
    body?: AsientoCircunscripcionInsertRequest
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoCircunscripcionUpdatePut
   */
  static readonly ApiAsientoCircunscripcionUpdatePutPath = '/api/AsientoCircunscripcion/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionUpdatePut$Plain$Response(params?: {
    body?: AsientoCircunscripcionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionUpdatePut$Plain(params?: {
    body?: AsientoCircunscripcionUpdateRequest
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionUpdatePut$Json$Response(params?: {
    body?: AsientoCircunscripcionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionUpdatePut$Json(params?: {
    body?: AsientoCircunscripcionUpdateRequest
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoCircunscripcionDeleteDelete
   */
  static readonly ApiAsientoCircunscripcionDeleteDeletePath = '/api/AsientoCircunscripcion/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionDeleteDelete$Plain$Response(params?: {
    body?: AsientoCircunscripcionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionDeleteDelete$Plain(params?: {
    body?: AsientoCircunscripcionIdRequest
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionDeleteDelete$Json$Response(params?: {
    body?: AsientoCircunscripcionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAsientoCircunscripcionDeleteDelete$Json(params?: {
    body?: AsientoCircunscripcionIdRequest
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoCircunscripcionGetByIdGet
   */
  static readonly ApiAsientoCircunscripcionGetByIdGetPath = '/api/AsientoCircunscripcion/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetByIdGet$Plain$Response(params?: {
    idAsientoCircunscripcion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetByIdGet$Plain(params?: {
    idAsientoCircunscripcion?: number;
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetByIdGet$Json$Response(params?: {
    idAsientoCircunscripcion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AsientoCircunscripcionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetByIdGet$Json(params?: {
    idAsientoCircunscripcion?: number;
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionResponseResponse> {

    return this.apiAsientoCircunscripcionGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionResponseResponse>) => r.body as AsientoCircunscripcionResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoCircunscripcionGetListGet
   */
  static readonly ApiAsientoCircunscripcionGetListGetPath = '/api/AsientoCircunscripcion/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListGet$Plain$Response(params?: {
    idAsientoCircunscripcion?: number;
    idInformeRenac?: number;
    idTipoAsiento?: number;
    idDispositivo?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionGetListGetPath, 'get');
    if (params) {
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
      rb.query('idInformeRenac', params.idInformeRenac, {});
      rb.query('idTipoAsiento', params.idTipoAsiento, {});
      rb.query('idDispositivo', params.idDispositivo, {});
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
        return r as StrictHttpResponse<AsientoCircunscripcionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListGet$Plain(params?: {
    idAsientoCircunscripcion?: number;
    idInformeRenac?: number;
    idTipoAsiento?: number;
    idDispositivo?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionListResponseResponse> {

    return this.apiAsientoCircunscripcionGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionListResponseResponse>) => r.body as AsientoCircunscripcionListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListGet$Json$Response(params?: {
    idAsientoCircunscripcion?: number;
    idInformeRenac?: number;
    idTipoAsiento?: number;
    idDispositivo?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionGetListGetPath, 'get');
    if (params) {
      rb.query('idAsientoCircunscripcion', params.idAsientoCircunscripcion, {});
      rb.query('idInformeRenac', params.idInformeRenac, {});
      rb.query('idTipoAsiento', params.idTipoAsiento, {});
      rb.query('idDispositivo', params.idDispositivo, {});
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
        return r as StrictHttpResponse<AsientoCircunscripcionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListGet$Json(params?: {
    idAsientoCircunscripcion?: number;
    idInformeRenac?: number;
    idTipoAsiento?: number;
    idDispositivo?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionListResponseResponse> {

    return this.apiAsientoCircunscripcionGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionListResponseResponse>) => r.body as AsientoCircunscripcionListResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoCircunscripcionGetListPaginatedGet
   */
  static readonly ApiAsientoCircunscripcionGetListPaginatedGetPath = '/api/AsientoCircunscripcion/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListPaginatedGet$Plain$Response(params?: {
    idInformeRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
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
        return r as StrictHttpResponse<AsientoCircunscripcionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListPaginatedGet$Plain(params?: {
    idInformeRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionListPaginatedResponseResponse> {

    return this.apiAsientoCircunscripcionGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionListPaginatedResponseResponse>) => r.body as AsientoCircunscripcionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListPaginatedGet$Json$Response(params?: {
    idInformeRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<AsientoCircunscripcionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
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
        return r as StrictHttpResponse<AsientoCircunscripcionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionGetListPaginatedGet$Json(params?: {
    idInformeRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<AsientoCircunscripcionListPaginatedResponseResponse> {

    return this.apiAsientoCircunscripcionGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<AsientoCircunscripcionListPaginatedResponseResponse>) => r.body as AsientoCircunscripcionListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiAsientoCircunscripcionInformacionSsiatAsientosGet
   */
  static readonly ApiAsientoCircunscripcionInformacionSsiatAsientosGetPath = '/api/AsientoCircunscripcion/InformacionSsiatAsientos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionInformacionSsiatAsientosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionInformacionSsiatAsientosGet$Plain$Response(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformacionSsiatAsientosListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionInformacionSsiatAsientosGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InformacionSsiatAsientosListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionInformacionSsiatAsientosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionInformacionSsiatAsientosGet$Plain(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<InformacionSsiatAsientosListResponseResponse> {

    return this.apiAsientoCircunscripcionInformacionSsiatAsientosGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformacionSsiatAsientosListResponseResponse>) => r.body as InformacionSsiatAsientosListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAsientoCircunscripcionInformacionSsiatAsientosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionInformacionSsiatAsientosGet$Json$Response(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformacionSsiatAsientosListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AsientoCircunscripcionService.ApiAsientoCircunscripcionInformacionSsiatAsientosGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InformacionSsiatAsientosListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiAsientoCircunscripcionInformacionSsiatAsientosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAsientoCircunscripcionInformacionSsiatAsientosGet$Json(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<InformacionSsiatAsientosListResponseResponse> {

    return this.apiAsientoCircunscripcionInformacionSsiatAsientosGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformacionSsiatAsientosListResponseResponse>) => r.body as InformacionSsiatAsientosListResponseResponse)
    );
  }

}
