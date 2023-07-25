import { FilterableKeyType, FilterType } from '../types';
import { FilterableValueInterface } from './filterable-value.interface';
import { DataRequest } from './data.request';
import { DataResponse } from './data.response';

export interface FilterableInterface<T> {
  key: FilterableKeyType<T>;
  values$?: (request: DataRequest<T>) => DataResponse<T>;
  values?: FilterableValueInterface[];
  type: FilterType;
}
