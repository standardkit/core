import { FilterOption } from './filter.option';
import { SortOption } from './sort.option';

// TODO : Move to interface
export interface DataRequest<T> {
  offset?: number;
  limit?: number;
  filters?: FilterOption<T>[];
  sort?: SortOption<T>[];
}
