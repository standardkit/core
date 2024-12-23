import { SortDirectionType } from '../types';

/** @deprecated obsolete, still clinging onto the legacy data stuff */
export interface SortInterface<T> {
  key: Extract<keyof T, string>;
  direction: SortDirectionType;
}
