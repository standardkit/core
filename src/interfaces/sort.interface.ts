import { SortDirectionType } from '../types';

export interface SortInterface<T> {
  key: Extract<keyof T, string>;
  direction: SortDirectionType;
}
