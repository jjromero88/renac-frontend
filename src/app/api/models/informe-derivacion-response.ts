/* tslint:disable */
/* eslint-disable */
import { DerivacionRenacDto } from './derivacion-renac-dto';
import { InformeRenacDto } from './informe-renac-dto';
export interface InformeDerivacionResponse {
  activo?: null | boolean;
  derivacionRenac?: DerivacionRenacDto;
  fechaReg?: null | string;
  idDerivacionRenac?: null | number;
  idInformeDerivacion?: null | number;
  idInformeRenac?: null | number;
  informeRenac?: InformeRenacDto;
  rownum?: number;
}
