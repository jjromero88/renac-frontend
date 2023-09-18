/* tslint:disable */
/* eslint-disable */
import { CircunscripcionDto } from './circunscripcion-dto';
export interface ResponsableArchivoRegistroAnotacionResponse {
  circunscripcion?: CircunscripcionDto;
  constanciaAnotacionArchivo?: null | string;
  constanciaAnotacionFirmadaArchivo?: null | string;
  esDerivado?: null | boolean;
  estadoDerivacion?: null | string;
  evaluacionFavorable?: null | boolean;
  idCircunscripcion?: null | number;
  idEstadoDerivacion?: null | number;
  idInformeRenac?: null | number;
  informefavorablearchivo?: null | string;
  numero?: null | string;
  procesoAnotacionCerrado?: null | boolean;
  respuestaGoreArchivo?: null | string;
  rownum?: number;
  solicitudGore?: null | boolean;
}
