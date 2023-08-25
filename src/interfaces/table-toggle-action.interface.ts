import { Observable } from 'rxjs';

export interface TableToggleActionInterface<T> {
  label: string;
  activateLabel: string;
  inactivateLabel: string;
  isActive: (row: T) => boolean;
  toggleActive: (row: T) => Observable<void>;
  toggleInactive: (row: T) => Observable<void>;
}
