export interface TableRowActionInterface<T> {
  action: (row: T) => void;
  icon: string;
  label: string;
  isDisabled?: (row: T) => boolean;
}
