import { FilterableKeyType, FilterType } from '../types';
import { FilterableValueInterface } from './filterable-value.interface';
import { LegacyDataRequest } from './legacy.data.request';
import { LegacyDataResponse } from './legacy.data.response';

/** @deprecated This should be updated with new style, possibly just vanish */
export interface FilterableInterface<T> {
  key: FilterableKeyType<T>;
  values$?: (request: LegacyDataRequest<T>) => LegacyDataResponse<T>;
  values?: FilterableValueInterface[];
  type: FilterType;
}
