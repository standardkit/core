import { FilterableKeyType, FilterType } from '../types';
import { DataRequest } from './data.request';
import { DataResponse } from './data.response';
import { FilterableValueInterface } from './filterable-value.interface';

export interface FilterableInterface<T> {
  key: FilterableKeyType<T>;
  values$?: (request: DataRequest<T>) => DataResponse<T>;
  values?: FilterableValueInterface[];
  type: FilterType;
}
