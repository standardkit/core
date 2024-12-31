import { QueryParameters, SortOption } from '../types';

export function mapSortParameters<T>(sort: SortOption<T>[] = []): QueryParameters {
  const parameters: QueryParameters = {};

  sort?.forEach((sortOption: SortOption<T>) => {
    parameters[`sort[${sortOption.field}]`] = sortOption.order;
  });

  return parameters;
}
