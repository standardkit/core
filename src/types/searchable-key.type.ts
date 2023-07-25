export type SearchableKeyType<T> = Extract<keyof T, string> | string;
