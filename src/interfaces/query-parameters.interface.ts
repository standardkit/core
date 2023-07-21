import { FilterValueType } from '../types';

export interface QueryParametersInterface {
  [key: string]: FilterValueType | undefined;
}
