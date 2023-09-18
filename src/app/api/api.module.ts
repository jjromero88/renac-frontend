/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AsientoCircunscripcionService } from './services/asiento-circunscripcion.service';
import { AsientoModificacionService } from './services/asiento-modificacion.service';
import { CircunscripcionService } from './services/circunscripcion.service';
import { CircunscripcionOrigenDestinoService } from './services/circunscripcion-origen-destino.service';
import { ConstanciaAnotacionService } from './services/constancia-anotacion.service';
import { DerivacionRenacService } from './services/derivacion-renac.service';
import { DocumentoDerivacionService } from './services/documento-derivacion.service';
import { FileManagerService } from './services/file-manager.service';
import { InformeDerivacionService } from './services/informe-derivacion.service';
import { InformeRenacService } from './services/informe-renac.service';
import { NormaService } from './services/norma.service';
import { ParametricasRenacService } from './services/parametricas-renac.service';
import { TipoAsientoService } from './services/tipo-asiento.service';
import { TipoCircunscripcionService } from './services/tipo-circunscripcion.service';
import { TipoDispositivoService } from './services/tipo-dispositivo.service';
import { TipoDocumentoRenacService } from './services/tipo-documento-renac.service';
import { TipoModificacionAsientoService } from './services/tipo-modificacion-asiento.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AsientoCircunscripcionService,
    AsientoModificacionService,
    CircunscripcionService,
    CircunscripcionOrigenDestinoService,
    ConstanciaAnotacionService,
    DerivacionRenacService,
    DocumentoDerivacionService,
    FileManagerService,
    InformeDerivacionService,
    InformeRenacService,
    NormaService,
    ParametricasRenacService,
    TipoAsientoService,
    TipoCircunscripcionService,
    TipoDispositivoService,
    TipoDocumentoRenacService,
    TipoModificacionAsientoService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
