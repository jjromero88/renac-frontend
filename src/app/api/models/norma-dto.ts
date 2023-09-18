/* tslint:disable */
/* eslint-disable */
import { TipoDispositivoDto } from './tipo-dispositivo-dto';
export interface NormaDto {
  activo?: null | boolean;
  archivo?: null | string;
  codNorma?: null | number;
  fecha?: null | string;
  fechaMod?: null | string;
  fechaReg?: null | string;
  filtro?: null | string;
  numero?: null | string;
  pageNumber?: number;
  pageSize?: number;
  rownum?: number;
  tipo?: null | number;
  tipoDispositivo?: TipoDispositivoDto;
  usuarioMod?: null | string;
  usuarioReg?: null | string;
}
