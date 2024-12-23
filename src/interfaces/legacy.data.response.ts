import { KeyOf } from '../generics';
import { SearchableKeyType } from '../types';
import { FilterInterface } from './filter.interface';
import { FilterableInterface } from './filterable.interface';
import { PaginationStateInterface } from './pagination-state.interface';
import { SearchInterface } from './search.interface';
import { SortInterface } from './sort.interface';

/** @deprecated replaced by new style DataResponse */
export interface LegacyDataResponse<T> {
  items: T[];

  // Request options
  filterable: FilterableInterface<T>[];
  searchable: SearchableKeyType<T>[];
  sortable: KeyOf<T>[];

  // Response state
  pagination: PaginationStateInterface;
  sort?: SortInterface<T>;
  filters?: FilterInterface<T>[];
  search?: SearchInterface<T>;
}
