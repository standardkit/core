import { KeyOf } from '../generics';

/** @deprecated Check with new style nest-architect */
export type FilterableKeyType<T> = KeyOf<T> | string;
