import { DataRequest, QueryParameters } from '../types';
import { mapFilterParameters } from './filter.mapper';
import { mapPaginationParameters } from './pagination.mapper';
import { mapSortParameters } from './sort.mapper';

export function mapDataRequestParameters<T>(request: DataRequest<T>): QueryParameters {
  const pagination: QueryParameters = mapPaginationParameters(request.offset, request.limit);
  const sort: QueryParameters = mapSortParameters(request.sort);
  const filters: QueryParameters = mapFilterParameters(request.filters);

  // TODO : Handle Search

  return { ...pagination, ...sort, ...filters };
}
