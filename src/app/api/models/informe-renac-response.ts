/* tslint:disable */
/* eslint-disable */
import { CircunscripcionDto } from './circunscripcion-dto';
export interface InformeRenacResponse {
  activo?: null | boolean;
  archivado?: null | boolean;
  circunscripcion?: CircunscripcionDto;
  constanciaAnotacionArchivo?: null | string;
  constanciaAnotacionFirmadaArchivo?: null | string;
  constanciaAnotacionFirmadaFecha?: null | string;
  descripcion?: null | string;
  esDerivado?: null | boolean;
  estadoDerivacion?: null | string;
  evaluacionFavorable?: null | boolean;
  evidenciaAnotacionArchivo?: null | string;
  evidenciaAnotacionFecha?: null | string;
  evidenciaSolicitudArchivo?: null | string;
  evidenciaSolicitudFecha?: null | string;
  fecha?: null | string;
  fechaReg?: null | string;
  fechaSolicitudInformacion?: null | string;
  idCircunscripcion?: null | number;
  idEstadoDerivacion?: null | number;
  idInformeRenac?: null | number;
  nombreinformesustento?: null | string;
  numero?: null | string;
  oficioAnotacionArchivo?: null | string;
  oficioAnotacionFecha?: null | string;
  oficioAnotacionNumero?: null | string;
  oficioSolicitudArchivo?: null | string;
  oficioSolicitudFecha?: null | string;
  oficioSolicitudNumero?: null | string;
  respuestaGoreArchivo?: null | string;
  respuestaGoreFecha?: null | string;
  respuestaGoreNumero?: null | string;
  rownum?: number;
  solicitudDiasTranscurridos?: null | string;
  urlinformesustento?: null | string;
}
