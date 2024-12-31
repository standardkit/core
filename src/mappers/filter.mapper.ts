import { FilterOperator } from '../constants';
import { FilterOption, QueryParameters } from '../types';

export function mapFilterParameters<T>(filters: FilterOption<T>[] = []): QueryParameters {
  const parameters: QueryParameters = {};

  filters?.forEach((option: FilterOption<T>) => {
    const hasOperator: boolean = option.operator !== FilterOperator.In && option.operator !== FilterOperator.Equals;
    const operator = hasOperator ? `[${option.operator}]` : '';
    const key = `filter[${option.field}]${operator}`;

    parameters[key] = Array.isArray(option.value) ? option.value.join(',') : `${option.value}`;
  });

  return parameters;
}
