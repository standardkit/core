export interface TableBatchActionInterface<T> {
  action: (rows: T[]) => void;
  icon: string;
  label: string;
}
