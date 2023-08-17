import { EnumType, StyleType } from '../types';

export const STYLE: EnumType<StyleType> = {
  Success: 'success',
  Warning: 'warning',
  Info: 'info',
  Error: 'error',
  Neutral: 'neutral',
  Primary: 'primary',
  Secondary: 'secondary',
  Special: 'special',
  Light: 'light',
  Dark: 'dark',
} as const;
