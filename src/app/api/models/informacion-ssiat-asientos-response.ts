/* tslint:disable */
/* eslint-disable */
import { InformeRenacResponse } from './informe-renac-response';
import { NormaDto } from './norma-dto';
export interface InformacionSsiatAsientosResponse {
  fechaAnotacion?: null | string;
  idAsientoCircunscripcion?: null | number;
  idDispositivo?: null | number;
  idInformeRenac?: null | number;
  informeRenac?: InformeRenacResponse;
  nombreCircunscripcion?: null | string;
  norma?: NormaDto;
  rownum?: number;
}
