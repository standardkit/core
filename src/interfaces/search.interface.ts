import { SearchableKeyType } from '../types';

export interface SearchInterface<T> {
  key: SearchableKeyType<T>;
  query: string;
}
