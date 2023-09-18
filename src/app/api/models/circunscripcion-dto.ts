/* tslint:disable */
/* eslint-disable */
import { TipoCircunscripcionDto } from './tipo-circunscripcion-dto';
export interface CircunscripcionDto {
  activo?: null | boolean;
  codCircunscripcion?: null | number;
  codDepCircunscripcion?: null | number;
  codProvCircunscripcion?: null | number;
  fechaMod?: null | string;
  fechaReg?: null | string;
  filtro?: null | string;
  nomCircunscripcion?: null | string;
  nombreCircunscripcion?: null | string;
  pageNumber?: number;
  pageSize?: number;
  rownum?: number;
  tipCircunscripcion?: null | number;
  tipoCircunscripcion?: TipoCircunscripcionDto;
  usuarioMod?: null | string;
  usuarioReg?: null | string;
}
