import { FilterInterface } from './filter.interface';
import { PaginationInterface } from './pagination.interface';
import { SearchInterface } from './search.interface';
import { SortInterface } from './sort.interface';

export interface DataRequest<T> {
  pagination: PaginationInterface;
  filters?: FilterInterface<T>[];
  search?: SearchInterface<T>;
  sort?: SortInterface<T>;
}
