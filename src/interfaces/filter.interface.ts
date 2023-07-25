import { FilterableKeyType } from '../types';

export interface FilterInterface<T> {
  key: FilterableKeyType<T>;
  value: any;
}
