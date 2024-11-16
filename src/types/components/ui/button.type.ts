export enum ButtonColor {
  Gradient = 'gradient',
  Blue = 'blue',
  Pink = 'pink',
  Gray = 'gray',
}

export interface Button {
  text: string;
  color?: ButtonColor | `${ButtonColor}`;
  callback: () => void;
}
