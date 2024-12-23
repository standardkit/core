import { FilterOption } from './filter.option';
import { PaginationState } from './pagination-state.interface';
import { SortOption } from './sort.option';

export interface Metadata<DataType> {
  pagination: PaginationState;
  sort?: SortOption<DataType>[];
  filter?: FilterOption<DataType>[];
}
