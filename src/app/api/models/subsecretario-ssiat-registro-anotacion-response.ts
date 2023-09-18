/* tslint:disable */
/* eslint-disable */
import { CircunscripcionDto } from './circunscripcion-dto';
export interface SubsecretarioSsiatRegistroAnotacionResponse {
  circunscripcion?: CircunscripcionDto;
  constanciaAnotacionArchivo?: null | string;
  constanciaAnotacionFirmadaArchivo?: null | string;
  esDerivado?: null | boolean;
  estadoDerivacion?: null | string;
  evaluacionFavorable?: null | boolean;
  idCircunscripcion?: null | number;
  idEstadoDerivacion?: null | number;
  idInformeRenac?: null | number;
  numero?: null | string;
  respuestaGoreArchivo?: null | string;
  rownum?: number;
  solicitudGore?: null | boolean;
}
