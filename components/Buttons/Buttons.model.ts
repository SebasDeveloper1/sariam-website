import { ButtonHTMLAttributes, Ref } from 'react';
import { IconType } from 'react-icons';

interface GeneralProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: 'button' | 'submit' | 'reset';
  variant: 'primary' | 'secondary' | 'tertiary' | 'outlined' | 'text';
  styles?: string;
  title?: string;
  ariaLabel?: string;
  disabled?: boolean;
  handleOnClick?: () => void;
  refElement?: Ref<HTMLButtonElement>;
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
