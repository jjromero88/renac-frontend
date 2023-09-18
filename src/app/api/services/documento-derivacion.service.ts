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

import { DocumentoDerivacionIdRequest } from '../models/documento-derivacion-id-request';
import { DocumentoDerivacionInsertRequest } from '../models/documento-derivacion-insert-request';
import { DocumentoDerivacionListPaginatedResponseResponse } from '../models/documento-derivacion-list-paginated-response-response';
import { DocumentoDerivacionListResponseResponse } from '../models/documento-derivacion-list-response-response';
import { DocumentoDerivacionResponseResponse } from '../models/documento-derivacion-response-response';
import { DocumentoDerivacionUpdateRequest } from '../models/documento-derivacion-update-request';

@Injectable({
  providedIn: 'root',
})
export class DocumentoDerivacionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDocumentoDerivacionInsertPost
   */
  static readonly ApiDocumentoDerivacionInsertPostPath = '/api/DocumentoDerivacion/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionInsertPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionInsertPost$Plain$Response(params?: {
    body?: DocumentoDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionInsertPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionInsertPost$Plain(params?: {
    body?: DocumentoDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionInsertPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionInsertPost$Json$Response(params?: {
    body?: DocumentoDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionInsertPostPath, 'post');
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
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionInsertPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionInsertPost$Json(params?: {
    body?: DocumentoDerivacionInsertRequest
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiDocumentoDerivacionUpdatePut
   */
  static readonly ApiDocumentoDerivacionUpdatePutPath = '/api/DocumentoDerivacion/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionUpdatePut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionUpdatePut$Plain$Response(params?: {
    body?: DocumentoDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionUpdatePut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionUpdatePut$Plain(params?: {
    body?: DocumentoDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionUpdatePut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionUpdatePut$Json$Response(params?: {
    body?: DocumentoDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionUpdatePut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionUpdatePut$Json(params?: {
    body?: DocumentoDerivacionUpdateRequest
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiDocumentoDerivacionDeleteDelete
   */
  static readonly ApiDocumentoDerivacionDeleteDeletePath = '/api/DocumentoDerivacion/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionDeleteDelete$Plain$Response(params?: {
    body?: DocumentoDerivacionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionDeleteDelete$Plain(params?: {
    body?: DocumentoDerivacionIdRequest
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionDeleteDelete$Json$Response(params?: {
    body?: DocumentoDerivacionIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiDocumentoDerivacionDeleteDelete$Json(params?: {
    body?: DocumentoDerivacionIdRequest
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiDocumentoDerivacionGetByIdGet
   */
  static readonly ApiDocumentoDerivacionGetByIdGetPath = '/api/DocumentoDerivacion/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetByIdGet$Plain$Response(params?: {
    idDocumentoDerivacion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idDocumentoDerivacion', params.idDocumentoDerivacion, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetByIdGet$Plain(params?: {
    idDocumentoDerivacion?: number;
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetByIdGet$Json$Response(params?: {
    idDocumentoDerivacion?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionGetByIdGetPath, 'get');
    if (params) {
      rb.query('idDocumentoDerivacion', params.idDocumentoDerivacion, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DocumentoDerivacionResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetByIdGet$Json(params?: {
    idDocumentoDerivacion?: number;
  },
  context?: HttpContext

): Observable<DocumentoDerivacionResponseResponse> {

    return this.apiDocumentoDerivacionGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionResponseResponse>) => r.body as DocumentoDerivacionResponseResponse)
    );
  }

  /**
   * Path part for operation apiDocumentoDerivacionGetListGet
   */
  static readonly ApiDocumentoDerivacionGetListGetPath = '/api/DocumentoDerivacion/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListGet$Plain$Response(params?: {
    idDocumentoDerivacion?: number;
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionGetListGetPath, 'get');
    if (params) {
      rb.query('idDocumentoDerivacion', params.idDocumentoDerivacion, {});
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
        return r as StrictHttpResponse<DocumentoDerivacionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListGet$Plain(params?: {
    idDocumentoDerivacion?: number;
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<DocumentoDerivacionListResponseResponse> {

    return this.apiDocumentoDerivacionGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionListResponseResponse>) => r.body as DocumentoDerivacionListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListGet$Json$Response(params?: {
    idDocumentoDerivacion?: number;
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionGetListGetPath, 'get');
    if (params) {
      rb.query('idDocumentoDerivacion', params.idDocumentoDerivacion, {});
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
        return r as StrictHttpResponse<DocumentoDerivacionListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListGet$Json(params?: {
    idDocumentoDerivacion?: number;
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<DocumentoDerivacionListResponseResponse> {

    return this.apiDocumentoDerivacionGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionListResponseResponse>) => r.body as DocumentoDerivacionListResponseResponse)
    );
  }

  /**
   * Path part for operation apiDocumentoDerivacionGetListPaginatedGet
   */
  static readonly ApiDocumentoDerivacionGetListPaginatedGetPath = '/api/DocumentoDerivacion/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListPaginatedGet$Plain$Response(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idDerivacionRenac', params.idDerivacionRenac, {});
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
        return r as StrictHttpResponse<DocumentoDerivacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListPaginatedGet$Plain(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<DocumentoDerivacionListPaginatedResponseResponse> {

    return this.apiDocumentoDerivacionGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionListPaginatedResponseResponse>) => r.body as DocumentoDerivacionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDocumentoDerivacionGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListPaginatedGet$Json$Response(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<DocumentoDerivacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, DocumentoDerivacionService.ApiDocumentoDerivacionGetListPaginatedGetPath, 'get');
    if (params) {
      rb.query('idDerivacionRenac', params.idDerivacionRenac, {});
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
        return r as StrictHttpResponse<DocumentoDerivacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiDocumentoDerivacionGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDocumentoDerivacionGetListPaginatedGet$Json(params?: {
    idDerivacionRenac?: number;
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<DocumentoDerivacionListPaginatedResponseResponse> {

    return this.apiDocumentoDerivacionGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<DocumentoDerivacionListPaginatedResponseResponse>) => r.body as DocumentoDerivacionListPaginatedResponseResponse)
    );
  }

}
