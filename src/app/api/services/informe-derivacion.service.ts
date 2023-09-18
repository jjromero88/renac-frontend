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

import { InformeDerivacionIdRequest } from '../models/informe-derivacion-id-request';
import { InformeDerivacionInsertRequest } from '../models/informe-derivacion-insert-request';
import { InformeDerivacionListPaginatedResponseResponse } from '../models/informe-derivacion-list-paginated-response-response';
import { InformeDerivacionListResponseResponse } from '../models/informe-derivacion-list-response-response';
import { InformeDerivacionResponseResponse } from '../models/informe-derivacion-response-response';
import { InformeDerivacionUpdateRequest } from '../models/informe-derivacion-update-request';

@Injectable({
  providedIn: 'root',
})
export class InformeDerivacionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInformeDerivacionInsertPost
   */
  static readonly ApiInformeDerivacionInsertPostPath = '/api/InformeDerivacion/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionInsertPost$Plain$Response(params?: {
    body?: InformeDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionInsertPost$Plain(params?: {
    body?: InformeDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionInsertPost$Json$Response(params?: {
    body?: InformeDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionInsertPost$Json(params?: {
    body?: InformeDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeDerivacionUpdatePut
   */
  static readonly ApiInformeDerivacionUpdatePutPath = '/api/InformeDerivacion/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionUpdatePut$Plain$Response(params?: {
    body?: InformeDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionUpdatePut$Plain(params?: {
    body?: InformeDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionUpdatePut$Json$Response(params?: {
    body?: InformeDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionUpdatePut$Json(params?: {
    body?: InformeDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeDerivacionDeleteDelete
   */
  static readonly ApiInformeDerivacionDeleteDeletePath = '/api/InformeDerivacion/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionDeleteDelete$Plain$Response(params?: {
    body?: InformeDerivacionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionDeleteDelete$Plain(params?: {
    body?: InformeDerivacionIdRequest
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionDeleteDelete$Json$Response(params?: {
    body?: InformeDerivacionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeDerivacionDeleteDelete$Json(params?: {
    body?: InformeDerivacionIdRequest
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeDerivacionGetByIdGet
   */
  static readonly ApiInformeDerivacionGetByIdGetPath = '/api/InformeDerivacion/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetByIdGet$Plain$Response(params?: {
    idInformeDerivacion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idInformeDerivacion', params.idInformeDerivacion, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetByIdGet$Plain(params?: {
    idInformeDerivacion?: number;
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetByIdGet$Json$Response(params?: {
    idInformeDerivacion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idInformeDerivacion', params.idInformeDerivacion, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<InformeDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetByIdGet$Json(params?: {
    idInformeDerivacion?: number;
  },
  context?: HttpContext

): Observable<InformeDerivacionResponseResponse> {

    return this.apiInformeDerivacionGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionResponseResponse>) => r.body as InformeDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeDerivacionGetListGet
   */
  static readonly ApiInformeDerivacionGetListGetPath = '/api/InformeDerivacion/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListGet$Plain$Response(params?: {
    idInformeDerivacion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionGetListGetPath, 'get');
    if (params) {
      rb.query('idInformeDerivacion', params.idInformeDerivacion, {});
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
        return r as StrictHttpResponse<InformeDerivacionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListGet$Plain(params?: {
    idInformeDerivacion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<InformeDerivacionListResponseResponse> {

    return this.apiInformeDerivacionGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionListResponseResponse>) => r.body as InformeDerivacionListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListGet$Json$Response(params?: {
    idInformeDerivacion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionGetListGetPath, 'get');
    if (params) {
      rb.query('idInformeDerivacion', params.idInformeDerivacion, {});
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
        return r as StrictHttpResponse<InformeDerivacionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListGet$Json(params?: {
    idInformeDerivacion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<InformeDerivacionListResponseResponse> {

    return this.apiInformeDerivacionGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionListResponseResponse>) => r.body as InformeDerivacionListResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeDerivacionGetListPaginatedGet
   */
  static readonly ApiInformeDerivacionGetListPaginatedGetPath = '/api/InformeDerivacion/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<InformeDerivacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<InformeDerivacionListPaginatedResponseResponse> {

    return this.apiInformeDerivacionGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionListPaginatedResponseResponse>) => r.body as InformeDerivacionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeDerivacionGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeDerivacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeDerivacionService.ApiInformeDerivacionGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<InformeDerivacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeDerivacionGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeDerivacionGetListPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<InformeDerivacionListPaginatedResponseResponse> {

    return this.apiInformeDerivacionGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeDerivacionListPaginatedResponseResponse>) => r.body as InformeDerivacionListPaginatedResponseResponse)
    );
  }

}
