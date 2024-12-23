import { PaginationInterface } from './pagination.interface';

// TODO : Should be updated based on new style pagination
export interface PaginationStateInterface extends PaginationInterface {
  numberOfRows: number;
  totalNumberOfRows: number;
  currentPage: number;
  totalNumberOfPages: number;
}
