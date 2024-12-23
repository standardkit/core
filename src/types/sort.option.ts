import { KeyOf } from '../generics';
import { SortOrderType } from '../types';

export interface SortOption<DataType> {
  field: KeyOf<DataType>;
  order: SortOrderType;
}
