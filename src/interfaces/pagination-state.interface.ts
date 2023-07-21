import { PaginationInterface } from './pagination.interface';

export interface PaginationStateInterface extends PaginationInterface {
  numberOfRows: number;
  totalNumberOfRows: number;
  currentPage: number;
  totalNumberOfPages: number;
}
