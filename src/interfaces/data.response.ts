import { SearchableKeyType, SortableType } from '../types';
import { FilterableInterface } from './filterable.interface';
import { FilterInterface } from './filter.interface';
import { PaginationStateInterface } from './pagination-state.interface';
import { SearchInterface } from './search.interface';
import { SortInterface } from './sort.interface';

export interface DataResponse<T> {
  items: T[];

  // Request options
  filterable: FilterableInterface<T>[];
  searchable: SearchableKeyType<T>[];
  sortable: SortableType<T>[];

  // Response state
  pagination: PaginationStateInterface;
  sort?: SortInterface<T>;
  filters?: FilterInterface<T>[];
  search?: SearchInterface<T>;
}
