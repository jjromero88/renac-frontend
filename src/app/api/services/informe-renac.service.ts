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

import { EspecialistaSsatdotListPaginatedResponseResponse } from '../models/especialista-ssatdot-list-paginated-response-response';
import { EspecialistaSsiatListPaginatedResponseResponse } from '../models/especialista-ssiat-list-paginated-response-response';
import { EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse } from '../models/especialista-ssiat-registro-formatos-list-paginated-response-response';
import { InformacionSsiatDocumentosResponseResponse } from '../models/informacion-ssiat-documentos-response-response';
import { InformeRenacIdRequest } from '../models/informe-renac-id-request';
import { InformeRenacListPaginatedResponseResponse } from '../models/informe-renac-list-paginated-response-response';
import { InformeRenacListResponseResponse } from '../models/informe-renac-list-response-response';
import { InformeRenacResponseResponse } from '../models/informe-renac-response-response';
import { ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse } from '../models/responsable-archivo-registro-anotacion-list-paginated-response-response';
import { ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse } from '../models/responsable-archivo-solicitud-informacion-list-paginated-response-response';
import { Response } from '../models/response';
import { SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse } from '../models/subsecretario-ssatdot-derivacion-informes-list-paginated-response-response';
import { SubsecretarioSsatdotListPaginatedResponseResponse } from '../models/subsecretario-ssatdot-list-paginated-response-response';
import { SubsecretarioSsiatListPaginatedResponseResponse } from '../models/subsecretario-ssiat-list-paginated-response-response';
import { SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse } from '../models/subsecretario-ssiat-registro-anotacion-list-paginated-response-response';

@Injectable({
  providedIn: 'root',
})
export class InformeRenacService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiInformeRenacInsertPost
   */
  static readonly ApiInformeRenacInsertPostPath = '/api/InformeRenac/Insert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacInsertPost$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacInsertPost$Plain$Response(params?: {
    body?: {
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacInsertPost$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacInsertPost$Plain(params?: {
    body?: {
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacInsertPost$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacInsertPost$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacInsertPost$Json$Response(params?: {
    body?: {
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacInsertPostPath, 'post');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacInsertPost$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacInsertPost$Json(params?: {
    body?: {
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacInsertPost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdatePut
   */
  static readonly ApiInformeRenacUpdatePutPath = '/api/InformeRenac/Update';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdatePut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdatePut$Plain$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacUpdatePut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdatePut$Plain(params?: {
    body?: {
'idInformeRenac'?: number;
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacUpdatePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdatePut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdatePut$Json$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdatePutPath, 'put');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacUpdatePut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdatePut$Json(params?: {
    body?: {
'idInformeRenac'?: number;
'idCircunscripcion'?: number;
'idEstadoDerivacion'?: number;
'numero'?: string;
'fecha'?: string;
'descripcion'?: string;
'nombreinformesustento'?: string;
'InformeAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacUpdatePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacDeleteDelete
   */
  static readonly ApiInformeRenacDeleteDeletePath = '/api/InformeRenac/Delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacDeleteDelete$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeRenacDeleteDelete$Plain$Response(params?: {
    body?: InformeRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacDeleteDelete$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeRenacDeleteDelete$Plain(params?: {
    body?: InformeRenacIdRequest
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacDeleteDelete$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacDeleteDelete$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeRenacDeleteDelete$Json$Response(params?: {
    body?: InformeRenacIdRequest
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacDeleteDeletePath, 'delete');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacDeleteDelete$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiInformeRenacDeleteDelete$Json(params?: {
    body?: InformeRenacIdRequest
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacDeleteDelete$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacGetByIdGet
   */
  static readonly ApiInformeRenacGetByIdGetPath = '/api/InformeRenac/GetById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetByIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetByIdGet$Plain$Response(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetByIdGetPath, 'get');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetByIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetByIdGet$Plain(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacGetByIdGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetByIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetByIdGet$Json$Response(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetByIdGetPath, 'get');
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
        return r as StrictHttpResponse<InformeRenacResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetByIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetByIdGet$Json(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<InformeRenacResponseResponse> {

    return this.apiInformeRenacGetByIdGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacResponseResponse>) => r.body as InformeRenacResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacGetListGet
   */
  static readonly ApiInformeRenacGetListGetPath = '/api/InformeRenac/GetList';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListGet$Plain$Response(params?: {
    idInformeRenac?: number;
    idCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
      rb.query('idCircunscripcion', params.idCircunscripcion, {});
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
        return r as StrictHttpResponse<InformeRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListGet$Plain(params?: {
    idInformeRenac?: number;
    idCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<InformeRenacListResponseResponse> {

    return this.apiInformeRenacGetListGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacListResponseResponse>) => r.body as InformeRenacListResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListGet$Json$Response(params?: {
    idInformeRenac?: number;
    idCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacListResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
      rb.query('idCircunscripcion', params.idCircunscripcion, {});
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
        return r as StrictHttpResponse<InformeRenacListResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListGet$Json(params?: {
    idInformeRenac?: number;
    idCircunscripcion?: number;
    activo?: boolean;
    filtro?: string;
  },
  context?: HttpContext

): Observable<InformeRenacListResponseResponse> {

    return this.apiInformeRenacGetListGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacListResponseResponse>) => r.body as InformeRenacListResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacGetListPaginatedGet
   */
  static readonly ApiInformeRenacGetListPaginatedGetPath = '/api/InformeRenac/GetListPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<InformeRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<InformeRenacListPaginatedResponseResponse> {

    return this.apiInformeRenacGetListPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacListPaginatedResponseResponse>) => r.body as InformeRenacListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformeRenacListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<InformeRenacListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<InformeRenacListPaginatedResponseResponse> {

    return this.apiInformeRenacGetListPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformeRenacListPaginatedResponseResponse>) => r.body as InformeRenacListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacEspecialistaSsiatPaginatedGet
   */
  static readonly ApiInformeRenacEspecialistaSsiatPaginatedGetPath = '/api/InformeRenac/EspecialistaSsiatPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacEspecialistaSsiatPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EspecialistaSsiatListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacEspecialistaSsiatPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<EspecialistaSsiatListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacEspecialistaSsiatPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<EspecialistaSsiatListPaginatedResponseResponse> {

    return this.apiInformeRenacEspecialistaSsiatPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<EspecialistaSsiatListPaginatedResponseResponse>) => r.body as EspecialistaSsiatListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacEspecialistaSsiatPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EspecialistaSsiatListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacEspecialistaSsiatPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<EspecialistaSsiatListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacEspecialistaSsiatPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<EspecialistaSsiatListPaginatedResponseResponse> {

    return this.apiInformeRenacEspecialistaSsiatPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EspecialistaSsiatListPaginatedResponseResponse>) => r.body as EspecialistaSsiatListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacSubsecretarioSsiatPaginatedGet
   */
  static readonly ApiInformeRenacSubsecretarioSsiatPaginatedGetPath = '/api/InformeRenac/SubsecretarioSsiatPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacSubsecretarioSsiatPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsiatPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsiatListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacSubsecretarioSsiatPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<SubsecretarioSsiatListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacSubsecretarioSsiatPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsiatPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsiatListPaginatedResponseResponse> {

    return this.apiInformeRenacSubsecretarioSsiatPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsiatListPaginatedResponseResponse>) => r.body as SubsecretarioSsiatListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacSubsecretarioSsiatPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsiatPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsiatListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacSubsecretarioSsiatPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<SubsecretarioSsiatListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacSubsecretarioSsiatPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsiatPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsiatListPaginatedResponseResponse> {

    return this.apiInformeRenacSubsecretarioSsiatPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsiatListPaginatedResponseResponse>) => r.body as SubsecretarioSsiatListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacSubsecretarioSsatdotPaginatedGet
   */
  static readonly ApiInformeRenacSubsecretarioSsatdotPaginatedGetPath = '/api/InformeRenac/SubsecretarioSsatdotPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacSubsecretarioSsatdotPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsatdotListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacSubsecretarioSsatdotPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<SubsecretarioSsatdotListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacSubsecretarioSsatdotPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsatdotListPaginatedResponseResponse> {

    return this.apiInformeRenacSubsecretarioSsatdotPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsatdotListPaginatedResponseResponse>) => r.body as SubsecretarioSsatdotListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacSubsecretarioSsatdotPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsatdotListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacSubsecretarioSsatdotPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<SubsecretarioSsatdotListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacSubsecretarioSsatdotPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsatdotListPaginatedResponseResponse> {

    return this.apiInformeRenacSubsecretarioSsatdotPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsatdotListPaginatedResponseResponse>) => r.body as SubsecretarioSsatdotListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacEspecialistaSsatdotPaginatedGet
   */
  static readonly ApiInformeRenacEspecialistaSsatdotPaginatedGetPath = '/api/InformeRenac/EspecialistaSsatdotPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacEspecialistaSsatdotPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsatdotPaginatedGet$Plain$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EspecialistaSsatdotListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacEspecialistaSsatdotPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<EspecialistaSsatdotListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacEspecialistaSsatdotPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsatdotPaginatedGet$Plain(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<EspecialistaSsatdotListPaginatedResponseResponse> {

    return this.apiInformeRenacEspecialistaSsatdotPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<EspecialistaSsatdotListPaginatedResponseResponse>) => r.body as EspecialistaSsatdotListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacEspecialistaSsatdotPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsatdotPaginatedGet$Json$Response(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EspecialistaSsatdotListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacEspecialistaSsatdotPaginatedGetPath, 'get');
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
        return r as StrictHttpResponse<EspecialistaSsatdotListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacEspecialistaSsatdotPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsatdotPaginatedGet$Json(params?: {
    activo?: boolean;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<EspecialistaSsatdotListPaginatedResponseResponse> {

    return this.apiInformeRenacEspecialistaSsatdotPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EspecialistaSsatdotListPaginatedResponseResponse>) => r.body as EspecialistaSsatdotListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet
   */
  static readonly ApiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGetPath = '/api/InformeRenac/SubsecretarioSsatdotDerivacionInformesPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Plain$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Plain(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse> {

    return this.apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse>) => r.body as SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Json$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Json(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse> {

    return this.apiInformeRenacSubsecretarioSsatdotDerivacionInformesPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse>) => r.body as SubsecretarioSsatdotDerivacionInformesListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacInformacionSsiatDocumentosGet
   */
  static readonly ApiInformeRenacInformacionSsiatDocumentosGetPath = '/api/InformeRenac/InformacionSsiatDocumentos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacInformacionSsiatDocumentosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacInformacionSsiatDocumentosGet$Plain$Response(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformacionSsiatDocumentosResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacInformacionSsiatDocumentosGetPath, 'get');
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
        return r as StrictHttpResponse<InformacionSsiatDocumentosResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacInformacionSsiatDocumentosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacInformacionSsiatDocumentosGet$Plain(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<InformacionSsiatDocumentosResponseResponse> {

    return this.apiInformeRenacInformacionSsiatDocumentosGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformacionSsiatDocumentosResponseResponse>) => r.body as InformacionSsiatDocumentosResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacInformacionSsiatDocumentosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacInformacionSsiatDocumentosGet$Json$Response(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<InformacionSsiatDocumentosResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacInformacionSsiatDocumentosGetPath, 'get');
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
        return r as StrictHttpResponse<InformacionSsiatDocumentosResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacInformacionSsiatDocumentosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacInformacionSsiatDocumentosGet$Json(params?: {
    idInformeRenac?: number;
  },
  context?: HttpContext

): Observable<InformacionSsiatDocumentosResponseResponse> {

    return this.apiInformeRenacInformacionSsiatDocumentosGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<InformacionSsiatDocumentosResponseResponse>) => r.body as InformacionSsiatDocumentosResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateEvaluacionFavorablePut
   */
  static readonly ApiInformeRenacUpdateEvaluacionFavorablePutPath = '/api/InformeRenac/UpdateEvaluacionFavorable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateEvaluacionFavorablePut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateEvaluacionFavorablePut$Plain$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'evaluacionFavorable'?: boolean;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateEvaluacionFavorablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateEvaluacionFavorablePut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateEvaluacionFavorablePut$Plain(params?: {
    body?: {
'idInformeRenac'?: number;
'evaluacionFavorable'?: boolean;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateEvaluacionFavorablePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateEvaluacionFavorablePut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateEvaluacionFavorablePut$Json$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'evaluacionFavorable'?: boolean;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateEvaluacionFavorablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateEvaluacionFavorablePut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateEvaluacionFavorablePut$Json(params?: {
    body?: {
'idInformeRenac'?: number;
'evaluacionFavorable'?: boolean;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateEvaluacionFavorablePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateInformesOpinionFavorablePut
   */
  static readonly ApiInformeRenacUpdateInformesOpinionFavorablePutPath = '/api/InformeRenac/UpdateInformesOpinionFavorable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateInformesOpinionFavorablePut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateInformesOpinionFavorablePut$Plain$Response(params?: {
    body?: {
'informeFavorableArchivo'?: string;
'informeFavorableNumero'?: string;
'informeFavorableFecha'?: string;
'listaInformesRenac'?: string;
'informeFavorableArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateInformesOpinionFavorablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateInformesOpinionFavorablePut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateInformesOpinionFavorablePut$Plain(params?: {
    body?: {
'informeFavorableArchivo'?: string;
'informeFavorableNumero'?: string;
'informeFavorableFecha'?: string;
'listaInformesRenac'?: string;
'informeFavorableArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateInformesOpinionFavorablePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateInformesOpinionFavorablePut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateInformesOpinionFavorablePut$Json$Response(params?: {
    body?: {
'informeFavorableArchivo'?: string;
'informeFavorableNumero'?: string;
'informeFavorableFecha'?: string;
'listaInformesRenac'?: string;
'informeFavorableArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateInformesOpinionFavorablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateInformesOpinionFavorablePut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateInformesOpinionFavorablePut$Json(params?: {
    body?: {
'informeFavorableArchivo'?: string;
'informeFavorableNumero'?: string;
'informeFavorableFecha'?: string;
'listaInformesRenac'?: string;
'informeFavorableArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateInformesOpinionFavorablePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacValidateInformeEvaluacionFavorablePut
   */
  static readonly ApiInformeRenacValidateInformeEvaluacionFavorablePutPath = '/api/InformeRenac/ValidateInformeEvaluacionFavorable';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacValidateInformeEvaluacionFavorablePut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacValidateInformeEvaluacionFavorablePut$Plain$Response(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacValidateInformeEvaluacionFavorablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacValidateInformeEvaluacionFavorablePut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacValidateInformeEvaluacionFavorablePut$Plain(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacValidateInformeEvaluacionFavorablePut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacValidateInformeEvaluacionFavorablePut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacValidateInformeEvaluacionFavorablePut$Json$Response(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacValidateInformeEvaluacionFavorablePutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacValidateInformeEvaluacionFavorablePut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacValidateInformeEvaluacionFavorablePut$Json(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacValidateInformeEvaluacionFavorablePut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet
   */
  static readonly ApiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGetPath = '/api/InformeRenac/ResponsableArchivoSolicitudInformacionPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Plain$Response(params?: {
    idInformeRenac?: number;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
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
        return r as StrictHttpResponse<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Plain(params?: {
    idInformeRenac?: number;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse> {

    return this.apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse>) => r.body as ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Json$Response(params?: {
    idInformeRenac?: number;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGetPath, 'get');
    if (params) {
      rb.query('idInformeRenac', params.idInformeRenac, {});
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
        return r as StrictHttpResponse<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Json(params?: {
    idInformeRenac?: number;
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse> {

    return this.apiInformeRenacResponsableArchivoSolicitudInformacionPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse>) => r.body as ResponsableArchivoSolicitudInformacionListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateSolicitudInformacionInformeRenacPut
   */
  static readonly ApiInformeRenacUpdateSolicitudInformacionInformeRenacPutPath = '/api/InformeRenac/UpdateSolicitudInformacionInformeRenac';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Plain$Response(params?: {
    body?: {
'oficioSolicitudNumero'?: string;
'oficioSolicitudFecha'?: string;
'evidenciaSolicitudFecha'?: string;
'listaInformesRenac'?: string;
'oficioSolicitudArchivo'?: string;
'evidenciaSolicitudArchivo'?: string;
'oficioSolicitudArchivoBase64'?: string;
'evidenciaSolicitudArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateSolicitudInformacionInformeRenacPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Plain(params?: {
    body?: {
'oficioSolicitudNumero'?: string;
'oficioSolicitudFecha'?: string;
'evidenciaSolicitudFecha'?: string;
'listaInformesRenac'?: string;
'oficioSolicitudArchivo'?: string;
'evidenciaSolicitudArchivo'?: string;
'oficioSolicitudArchivoBase64'?: string;
'evidenciaSolicitudArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Json$Response(params?: {
    body?: {
'oficioSolicitudNumero'?: string;
'oficioSolicitudFecha'?: string;
'evidenciaSolicitudFecha'?: string;
'listaInformesRenac'?: string;
'oficioSolicitudArchivo'?: string;
'evidenciaSolicitudArchivo'?: string;
'oficioSolicitudArchivoBase64'?: string;
'evidenciaSolicitudArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateSolicitudInformacionInformeRenacPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Json(params?: {
    body?: {
'oficioSolicitudNumero'?: string;
'oficioSolicitudFecha'?: string;
'evidenciaSolicitudFecha'?: string;
'listaInformesRenac'?: string;
'oficioSolicitudArchivo'?: string;
'evidenciaSolicitudArchivo'?: string;
'oficioSolicitudArchivoBase64'?: string;
'evidenciaSolicitudArchivoBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateSolicitudInformacionInformeRenacPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacEspecialistaSsiatRegistroFormatosGet
   */
  static readonly ApiInformeRenacEspecialistaSsiatRegistroFormatosGetPath = '/api/InformeRenac/EspecialistaSsiatRegistroFormatos';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Plain$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacEspecialistaSsiatRegistroFormatosGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Plain(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse> {

    return this.apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse>) => r.body as EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Json$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacEspecialistaSsiatRegistroFormatosGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Json(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse> {

    return this.apiInformeRenacEspecialistaSsiatRegistroFormatosGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse>) => r.body as EspecialistaSsiatRegistroFormatosListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut
   */
  static readonly ApiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPutPath = '/api/InformeRenac/UpdateConstanciaAnotacionResponsableArchivo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Plain$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionArchivo'?: string;
'constanciaAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Plain(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionArchivo'?: string;
'constanciaAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Json$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionArchivo'?: string;
'constanciaAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Json(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionArchivo'?: string;
'constanciaAnotacionBase64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateConstanciaAnotacionResponsableArchivoPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut
   */
  static readonly ApiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPutPath = '/api/InformeRenac/UpdateRespuestaGoreEspecialistaSsiat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Plain$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'respuestaGoreNumero'?: string;
'respuestaGoreFecha'?: string;
'respuestaGoreArchivo'?: string;
'respuestaGoreBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Plain(params?: {
    body?: {
'idInformeRenac'?: number;
'respuestaGoreNumero'?: string;
'respuestaGoreFecha'?: string;
'respuestaGoreArchivo'?: string;
'respuestaGoreBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Json$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'respuestaGoreNumero'?: string;
'respuestaGoreFecha'?: string;
'respuestaGoreArchivo'?: string;
'respuestaGoreBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Json(params?: {
    body?: {
'idInformeRenac'?: number;
'respuestaGoreNumero'?: string;
'respuestaGoreFecha'?: string;
'respuestaGoreArchivo'?: string;
'respuestaGoreBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateRespuestaGoreEspecialistaSsiatPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet
   */
  static readonly ApiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGetPath = '/api/InformeRenac/GetListPaginatedSubsecretarioSsiatRegistroAnotacion';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Plain$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Plain(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse> {

    return this.apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse>) => r.body as SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Json$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Json(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse> {

    return this.apiInformeRenacGetListPaginatedSubsecretarioSsiatRegistroAnotacionGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse>) => r.body as SubsecretarioSsiatRegistroAnotacionListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateRegistroAnotacionInformeRenacPut
   */
  static readonly ApiInformeRenacUpdateRegistroAnotacionInformeRenacPutPath = '/api/InformeRenac/UpdateRegistroAnotacionInformeRenac';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Plain$Response(params?: {
    body?: {
'oficioAnotacionNumero'?: string;
'oficioAnotacionFecha'?: string;
'oficioAnotacionArchivo'?: string;
'evidenciaAnotacionFecha'?: string;
'evidenciaAnotacionArchivo'?: string;
'oficioAnotacionArchivoBase64'?: string;
'evidenciaAnotacionArchivoBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateRegistroAnotacionInformeRenacPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Plain(params?: {
    body?: {
'oficioAnotacionNumero'?: string;
'oficioAnotacionFecha'?: string;
'oficioAnotacionArchivo'?: string;
'evidenciaAnotacionFecha'?: string;
'evidenciaAnotacionArchivo'?: string;
'oficioAnotacionArchivoBase64'?: string;
'evidenciaAnotacionArchivoBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Json$Response(params?: {
    body?: {
'oficioAnotacionNumero'?: string;
'oficioAnotacionFecha'?: string;
'oficioAnotacionArchivo'?: string;
'evidenciaAnotacionFecha'?: string;
'evidenciaAnotacionArchivo'?: string;
'oficioAnotacionArchivoBase64'?: string;
'evidenciaAnotacionArchivoBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateRegistroAnotacionInformeRenacPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Json(params?: {
    body?: {
'oficioAnotacionNumero'?: string;
'oficioAnotacionFecha'?: string;
'oficioAnotacionArchivo'?: string;
'evidenciaAnotacionFecha'?: string;
'evidenciaAnotacionArchivo'?: string;
'oficioAnotacionArchivoBase64'?: string;
'evidenciaAnotacionArchivoBase64'?: string;
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateRegistroAnotacionInformeRenacPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateConstanciaAnotacionFirmadaPut
   */
  static readonly ApiInformeRenacUpdateConstanciaAnotacionFirmadaPutPath = '/api/InformeRenac/UpdateConstanciaAnotacionFirmada';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Plain$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionFirmadaFecha'?: string;
'constanciaAnotacionFirmadaArchivo'?: string;
'constanciaAnotacionFirmadaArchivo64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateConstanciaAnotacionFirmadaPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Plain(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionFirmadaFecha'?: string;
'constanciaAnotacionFirmadaArchivo'?: string;
'constanciaAnotacionFirmadaArchivo64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Json$Response(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionFirmadaFecha'?: string;
'constanciaAnotacionFirmadaArchivo'?: string;
'constanciaAnotacionFirmadaArchivo64'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateConstanciaAnotacionFirmadaPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Json(params?: {
    body?: {
'idInformeRenac'?: number;
'constanciaAnotacionFirmadaFecha'?: string;
'constanciaAnotacionFirmadaArchivo'?: string;
'constanciaAnotacionFirmadaArchivo64'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateConstanciaAnotacionFirmadaPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * Path part for operation apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet
   */
  static readonly ApiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGetPath = '/api/InformeRenac/GetListResponsableArchivoRegistroAnotacionPaginated';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Plain$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Plain(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse> {

    return this.apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse>) => r.body as ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Json$Response(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGetPath, 'get');
    if (params) {
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
        return r as StrictHttpResponse<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Json(params?: {
    filtro?: string;
    PageSize?: number;
    PageNumber?: number;
  },
  context?: HttpContext

): Observable<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse> {

    return this.apiInformeRenacGetListResponsableArchivoRegistroAnotacionPaginatedGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse>) => r.body as ResponsableArchivoRegistroAnotacionListPaginatedResponseResponse)
    );
  }

  /**
   * Path part for operation apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut
   */
  static readonly ApiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPutPath = '/api/InformeRenac/UpdateCerrarProcesoAnotacionInformeRenac';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Plain()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Plain$Response(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Plain$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Plain(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Json()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Json$Response(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Response>> {

    const rb = new RequestBuilder(this.rootUrl, InformeRenacService.ApiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Json$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Json(params?: {
    body?: {
'listaInformesRenac'?: string;
}
  },
  context?: HttpContext

): Observable<Response> {

    return this.apiInformeRenacUpdateCerrarProcesoAnotacionInformeRenacPut$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Response>) => r.body as Response)
    );
  }

}
