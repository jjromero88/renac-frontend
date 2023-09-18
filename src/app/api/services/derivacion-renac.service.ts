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

import { DerivacionAjustesEspecialistaSsatdotRequest } from '../models/derivacion-ajustes-especialista-ssatdot-request';
import { DerivacionAjustesSubsecretarioSsatdotRequest } from '../models/derivacion-ajustes-subsecretario-ssatdot-request';
import { DerivacionAjustesSubsecretarioSsiatRequest } from '../models/derivacion-ajustes-subsecretario-ssiat-request';
import { DerivacionEspecialistaSsiatRequest } from '../models/derivacion-especialista-ssiat-request';
import { DerivacionInformesResponsableArchivoRequest } from '../models/derivacion-informes-responsable-archivo-request';
import { DerivacionModificacionEspecialistaSsiatRequest } from '../models/derivacion-modificacion-especialista-ssiat-request';
import { DerivacionParaAnotacionEspecialistaSsiatRequest } from '../models/derivacion-para-anotacion-especialista-ssiat-request';
import { DerivacionRenacIdRequest } from '../models/derivacion-renac-id-request';
import { DerivacionRenacInsertRequest } from '../models/derivacion-renac-insert-request';
import { DerivacionRenacListPaginatedResponseResponse } from '../models/derivacion-renac-list-paginated-response-response';
import { DerivacionRenacListResponseResponse } from '../models/derivacion-renac-list-response-response';
import { DerivacionRenacResponseResponse } from '../models/derivacion-renac-response-response';
import { DerivacionRenacUpdateRequest } from '../models/derivacion-renac-update-request';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class DerivacionRenacService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDerivacionRenacInsertPost
   */
  static readonly ApiDerivacionRenacInsertPostPath = '/api/DerivacionRenac/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacInsertPost$Plain$Response(params?: {
    body?: DerivacionRenacInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacInsertPost$Plain(params?: {
    body?: DerivacionRenacInsertRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacInsertPost$Json$Response(params?: {
    body?: DerivacionRenacInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacInsertPost$Json(params?: {
    body?: DerivacionRenacInsertRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacUpdatePut
   */
  static readonly ApiDerivacionRenacUpdatePutPath = '/api/DerivacionRenac/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacUpdatePut$Plain$Response(params?: {
    body?: DerivacionRenacUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacUpdatePut$Plain(params?: {
    body?: DerivacionRenacUpdateRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacUpdatePut$Json$Response(params?: {
    body?: DerivacionRenacUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacUpdatePut$Json(params?: {
    body?: DerivacionRenacUpdateRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDeleteDelete
   */
  static readonly ApiDerivacionRenacDeleteDeletePath = '/api/DerivacionRenac/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDeleteDelete$Plain$Response(params?: {
    body?: DerivacionRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDeleteDelete$Plain(params?: {
    body?: DerivacionRenacIdRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDeleteDelete$Json$Response(params?: {
    body?: DerivacionRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDeleteDelete$Json(params?: {
    body?: DerivacionRenacIdRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacGetByIdGet
   */
  static readonly ApiDerivacionRenacGetByIdGetPath = '/api/DerivacionRenac/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetByIdGet$Plain$Response(params?: {
    idDerivacionRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacGetByIdGetPath, 'get');
    if (params) {
      rb.query('idDerivacionRenac', params.idDerivacionRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetByIdGet$Plain(params?: {
    idDerivacionRenac?: number;
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetByIdGet$Json$Response(params?: {
    idDerivacionRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacGetByIdGetPath, 'get');
    if (params) {
      rb.query('idDerivacionRenac', params.idDerivacionRenac, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetByIdGet$Json(params?: {
    idDerivacionRenac?: number;
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacGetListGet
   */
  static readonly ApiDerivacionRenacGetListGetPath = '/api/DerivacionRenac/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListGet$Plain$Response(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idDerivacionRenac', params.idDerivacionRenac, {});
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
        return r as StrictHttpResponse<DerivacionRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListGet$Plain(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<DerivacionRenacListResponseResponse> {

    return this.apiDerivacionRenacGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacListResponseResponse>) => r.body as DerivacionRenacListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListGet$Json$Response(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idDerivacionRenac', params.idDerivacionRenac, {});
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
        return r as StrictHttpResponse<DerivacionRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListGet$Json(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<DerivacionRenacListResponseResponse> {

    return this.apiDerivacionRenacGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacListResponseResponse>) => r.body as DerivacionRenacListResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacGetListPaginatedGet
   */
  static readonly ApiDerivacionRenacGetListPaginatedGetPath = '/api/DerivacionRenac/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacGetListPaginatedGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<DerivacionRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<DerivacionRenacListPaginatedResponseResponse> {

    return this.apiDerivacionRenacGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacListPaginatedResponseResponse>) => r.body as DerivacionRenacListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacGetListPaginatedGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<DerivacionRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDerivacionRenacGetListPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<DerivacionRenacListPaginatedResponseResponse> {

    return this.apiDerivacionRenacGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacListPaginatedResponseResponse>) => r.body as DerivacionRenacListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionEspecialistaSsiatPut
   */
  static readonly ApiDerivacionRenacDerivacionEspecialistaSsiatPutPath = '/api/DerivacionRenac/DerivacionEspecialistaSsiat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionEspecialistaSsiatPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsiatPut$Plain$Response(params?: {
    body?: DerivacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionEspecialistaSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionEspecialistaSsiatPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsiatPut$Plain(params?: {
    body?: DerivacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionEspecialistaSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionEspecialistaSsiatPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsiatPut$Json$Response(params?: {
    body?: DerivacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionEspecialistaSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionEspecialistaSsiatPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsiatPut$Json(params?: {
    body?: DerivacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionEspecialistaSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionSubsecretarioSsiatPut
   */
  static readonly ApiDerivacionRenacDerivacionSubsecretarioSsiatPutPath = '/api/DerivacionRenac/DerivacionSubsecretarioSsiat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Plain$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
'numeroDocumento'?: string;
'fechaDocumento'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionSubsecretarioSsiatPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Plain(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
'numeroDocumento'?: string;
'fechaDocumento'?: string;
}
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Json$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
'numeroDocumento'?: string;
'fechaDocumento'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionSubsecretarioSsiatPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Json(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
'numeroDocumento'?: string;
'fechaDocumento'?: string;
}
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionSubsecretarioSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionSubsecretarioSsatdotPut
   */
  static readonly ApiDerivacionRenacDerivacionSubsecretarioSsatdotPutPath = '/api/DerivacionRenac/DerivacionSubsecretarioSsatdot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Plain$Response(params?: {
    body?: {
'idEspecialistaSsatdot'?: string;
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionSubsecretarioSsatdotPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Plain(params?: {
    body?: {
'idEspecialistaSsatdot'?: string;
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
}
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Json$Response(params?: {
    body?: {
'idEspecialistaSsatdot'?: string;
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionSubsecretarioSsatdotPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Json(params?: {
    body?: {
'idEspecialistaSsatdot'?: string;
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
}
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionSubsecretarioSsatdotPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionEspecialistaSsatdotPut
   */
  static readonly ApiDerivacionRenacDerivacionEspecialistaSsatdotPutPath = '/api/DerivacionRenac/DerivacionEspecialistaSsatdot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Plain$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionEspecialistaSsatdotPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Plain(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Json$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionEspecialistaSsatdotPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Json(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionEspecialistaSsatdotPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut
   */
  static readonly ApiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPutPath = '/api/DerivacionRenac/DerivacionInformesSubsecretarioSsatdot';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Plain$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Plain(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Json$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Json(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'idTipoDocumento'?: number;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionInformesSubsecretarioSsatdotPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut
   */
  static readonly ApiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPutPath = '/api/DerivacionRenac/DerivacionAjustesSubsecretarioSsiat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Plain$Response(params?: {
    body?: DerivacionAjustesSubsecretarioSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Plain(params?: {
    body?: DerivacionAjustesSubsecretarioSsiatRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Json$Response(params?: {
    body?: DerivacionAjustesSubsecretarioSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Json(params?: {
    body?: DerivacionAjustesSubsecretarioSsiatRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacDerivacionAjustesSubsecretarioSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut
   */
  static readonly ApiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPutPath = '/api/DerivacionRenac/DerivacionAjustesEspecialistaSSATDOT';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Plain$Response(params?: {
    body?: DerivacionAjustesEspecialistaSsatdotRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Plain(params?: {
    body?: DerivacionAjustesEspecialistaSsatdotRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Json$Response(params?: {
    body?: DerivacionAjustesEspecialistaSsatdotRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Json(params?: {
    body?: DerivacionAjustesEspecialistaSsatdotRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionAjustesEspecialistaSsatdotPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut
   */
  static readonly ApiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPutPath = '/api/DerivacionRenac/DerivacionAjustesSubsecretarioSSATDOT';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Plain$Response(params?: {
    body?: DerivacionAjustesSubsecretarioSsatdotRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Plain(params?: {
    body?: DerivacionAjustesSubsecretarioSsatdotRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Json$Response(params?: {
    body?: DerivacionAjustesSubsecretarioSsatdotRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Json(params?: {
    body?: DerivacionAjustesSubsecretarioSsatdotRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionAjustesSubsecretarioSsatdotPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivacionInformesResponsableArchivoPut
   */
  static readonly ApiDerivacionRenacDerivacionInformesResponsableArchivoPutPath = '/api/DerivacionRenac/DerivacionInformesResponsableArchivo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Plain$Response(params?: {
    body?: DerivacionInformesResponsableArchivoRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionInformesResponsableArchivoPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Plain(params?: {
    body?: DerivacionInformesResponsableArchivoRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Json$Response(params?: {
    body?: DerivacionInformesResponsableArchivoRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivacionInformesResponsableArchivoPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Json(params?: {
    body?: DerivacionInformesResponsableArchivoRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivacionInformesResponsableArchivoPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacRetornarInformeModificacionEspSsiatPut
   */
  static readonly ApiDerivacionRenacRetornarInformeModificacionEspSsiatPutPath = '/api/DerivacionRenac/RetornarInformeModificacionEspSsiat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Plain$Response(params?: {
    body?: DerivacionModificacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacRetornarInformeModificacionEspSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Plain(params?: {
    body?: DerivacionModificacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Json$Response(params?: {
    body?: DerivacionModificacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DerivacionRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacRetornarInformeModificacionEspSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<DerivacionRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Json(params?: {
    body?: DerivacionModificacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<DerivacionRenacResponseResponse> {

    return this.apiDerivacionRenacRetornarInformeModificacionEspSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DerivacionRenacResponseResponse>) => r.body as DerivacionRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut
   */
  static readonly ApiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPutPath = '/api/DerivacionRenac/DerivarInformesParaAnotacionEspecialistaSSIAT';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Plain$Response(params?: {
    body?: DerivacionParaAnotacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Plain(params?: {
    body?: DerivacionParaAnotacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Json$Response(params?: {
    body?: DerivacionParaAnotacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPutPath, 'put');
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
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Json(params?: {
    body?: DerivacionParaAnotacionEspecialistaSsiatRequest
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivarInformesParaAnotacionEspecialistaSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut
   */
  static readonly ApiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPutPath = '/api/DerivacionRenac/DerivarInformesParaAnotacionSubsecretarioSsiat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Plain$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Plain(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Json$Response(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, DerivacionRenacService.ApiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPutPath, 'put');
    if (params) {
      rb.body(params.body, 'multipart/form-data');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Response>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Json(params?: {
    body?: {
'usuarioOrigen'?: string;
'usuarioDestino'?: string;
'esRetorno'?: boolean;
'derivacioninformes'?: string;
'documentoMemoRuta'?: string;
'documentoMemoNombre'?: string;
'fechaDocumento'?: string;
'numeroDocumento'?: string;
'documentoMemoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiDerivacionRenacDerivarInformesParaAnotacionSubsecretarioSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

}
