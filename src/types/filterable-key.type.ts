export type FilterableKeyType<T> = Extract<keyof T, string> | string;
