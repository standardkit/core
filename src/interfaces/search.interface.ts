import { SearchableKeyType } from '../types';

/** @deprecated obsolete, still clinging onto the legacy data stuff */
export interface SearchInterface<T> {
  key: SearchableKeyType<T>;
  query: string;
}
