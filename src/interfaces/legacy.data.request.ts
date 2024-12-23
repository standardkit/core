import { FilterInterface } from './filter.interface';
import { PaginationInterface } from './pagination.interface';
import { SearchInterface } from './search.interface';
import { SortInterface } from './sort.interface';

/** @deprecated Remove in favor of new style DataRequest */
export interface LegacyDataRequest<T> {
  pagination: PaginationInterface;
  filters?: FilterInterface<T>[];
  search?: SearchInterface<T>;
  sort?: SortInterface<T>;
}
