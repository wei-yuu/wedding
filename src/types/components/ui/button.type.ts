export interface Button {
  text: string;
  callback: () => void;
}

export enum ButtonColor {
  Gradient = 'gradient',
  Blue = 'blue',
  Pink = 'pink',
  Gray = 'gray',
}
