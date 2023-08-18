import { SortDirectionEnum } from '../enums';
import { ApiSortDirectionType, SortDirectionType } from '../types';

export function isApiSortDirection(direction: SortDirectionType): direction is ApiSortDirectionType {
  return direction !== SortDirectionEnum.None;
}
