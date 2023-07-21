import { Observable } from 'rxjs';

export interface TableToggleActionInterface<T> {
  label: string;
  activateLabel: string;
  inactivateLabel: string;
  isActive?: (row: T) => boolean;
  toggleActive?: (row: T) => Observable<any>;
  toggleInactive?: (row: T) => Observable<any>;
}
