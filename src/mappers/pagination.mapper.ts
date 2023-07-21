import { PaginationInterface, PaginationStateInterface } from '../interfaces';

/** We indicate unknown totals as -1 */
export function mapPagination(
  pagination: PaginationInterface,
  numberOfRows: number,
  totalNumberOfRows: number = -1
): PaginationStateInterface {
  let numberOfPages = -1;
  if (totalNumberOfRows > -1) {
    numberOfPages =
      totalNumberOfRows < pagination.limit
        ? 1
        : totalNumberOfRows % pagination.limit === 0
          ? totalNumberOfRows / pagination.limit
          : Math.floor(totalNumberOfRows / pagination.limit) + 1;
  }

  return {
    ...pagination,
    totalNumberOfRows: totalNumberOfRows,
    numberOfRows: numberOfRows,
    totalNumberOfPages: numberOfPages,
    currentPage: pagination.offset / pagination.limit + 1
  };
}
