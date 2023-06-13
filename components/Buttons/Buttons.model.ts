import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

interface GeneralProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text';
  styles?: string;
  disabled?: boolean;
  iconSize?: string;
}

export interface ButtonProps extends GeneralProps {
  value?: string;
  startIcon?: IconType;
  endIcon?: IconType;
}

export interface IconButtonProps extends GeneralProps {
  icon?: IconType;
}

export type ButtonVariant = {
  primary?: string;
  secondary?: string;
  tertiary?: string;
  outlined?: string;
  text?: string;
};
