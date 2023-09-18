/* tslint:disable */
/* eslint-disable */
import { TipoCircunscripcionDto } from './tipo-circunscripcion-dto';
export interface CircunscripcionResponse {
  activo?: null | boolean;
  codCircunscripcion?: null | number;
  codDepCircunscripcion?: null | number;
  codProvCircunscripcion?: null | number;
  nomCircunscripcion?: null | string;
  nombreCircunscripcion?: null | string;
  tipCircunscripcion?: null | number;
  tipoCircunscripcion?: TipoCircunscripcionDto;
}
