import { KeyOf } from '../generics';
import { FilterOperatorType } from './filter-operator.type';
import { FilterValueType } from './filter-value.type';

export interface FilterOption<DataType> {
  field: KeyOf<DataType> | string;
  operator: FilterOperatorType;
  value: FilterValueType;
}
