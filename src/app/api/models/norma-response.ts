/* tslint:disable */
/* eslint-disable */
import { TipoDispositivoDto } from './tipo-dispositivo-dto';
export interface NormaResponse {
  activo?: null | boolean;
  archivo?: null | string;
  codNorma?: null | number;
  fecha?: null | string;
  numero?: null | string;
  tipo?: null | number;
  tipoDispositivo?: TipoDispositivoDto;
}
