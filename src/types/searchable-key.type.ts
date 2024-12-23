import { KeyOf } from '../generics';

/** @deprecated same as filterableKey, also, too generic, needs rethinking in new style */
export type SearchableKeyType<T> = KeyOf<T> | string;
