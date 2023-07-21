import { StyleEnum } from '../enums';

export type StyleType =
  | StyleEnum.Success
  | StyleEnum.Warning
  | StyleEnum.Info
  | StyleEnum.Error
  | StyleEnum.Neutral
  | StyleEnum.Primary
  | StyleEnum.Secondary
  | StyleEnum.Special
  | StyleEnum.Light
  | StyleEnum.Dark;
