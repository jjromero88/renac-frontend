/* tslint:disable */
/* eslint-disable */
import { InformeRenacResponse } from './informe-renac-response';
import { NormaDto } from './norma-dto';
import { TipoAsientoResponse } from './tipo-asiento-response';
export interface AsientoCircunscripcionResponse {
  activo?: null | boolean;
  descripcion?: null | string;
  detalle_modificacion?: null | string;
  detallesModificacion?: null | string;
  fechaAnotacion?: null | string;
  idAsientoCircunscripcion?: null | number;
  idDispositivo?: null | number;
  idInformeRenac?: null | number;
  idTipoAsiento?: null | number;
  informacionComplementaria?: null | string;
  informeRenac?: InformeRenacResponse;
  nombreCapital?: null | string;
  nombreCircunscripcion?: null | string;
  nombreDepartamento?: null | string;
  nombreProvincia?: null | string;
  norma?: NormaDto;
  numeroAsiento?: null | string;
  rownum?: number;
  tipoAsiento?: TipoAsientoResponse;
}
