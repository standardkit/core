import { SearchType } from '../types';

export interface SearchInterface<T> {
  key: Extract<keyof T, string> | SearchType;
  query: string;
}
