/* tslint:disable */
/* eslint-disable */
import { InformeRenacDto } from './informe-renac-dto';
import { NormaDto } from './norma-dto';
import { TipoAsientoDto } from './tipo-asiento-dto';
export interface AsientoCircunscripcionDto {
  activo?: null | boolean;
  circunscripcionDestinos?: null | string;
  circunscripcionOrigenes?: null | string;
  codTipoAsiento?: number;
  descripcion?: null | string;
  detalle_modificacion?: null | string;
  detallesModificacion?: null | string;
  fechaAnotacion?: null | string;
  fechaMod?: null | string;
  fechaReg?: null | string;
  filtro?: null | string;
  idAsientoCircunscripcion?: null | number;
  idDispositivo?: null | number;
  idInformeRenac?: null | number;
  idTipoAsiento?: null | number;
  informacionComplementaria?: null | string;
  informeRenac?: InformeRenacDto;
  nombreCapital?: null | string;
  nombreCircunscripcion?: null | string;
  nombreDepartamento?: null | string;
  nombreProvincia?: null | string;
  norma?: NormaDto;
  numeroAsiento?: null | string;
  pageNumber?: number;
  pageSize?: number;
  rownum?: number;
  tipoAsiento?: TipoAsientoDto;
  tipoCircunscripcion?: null | string;
  usuarioMod?: null | string;
  usuarioReg?: null | string;
}
