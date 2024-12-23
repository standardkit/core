import { FilterableKeyType } from '../types';

/** @deprecated prefer the coming new style */
export interface FilterInterface<T> {
  key: FilterableKeyType<T>;
  value: any;
}
