import { createElement } from 'react';
import { ButtonProps, ButtonVariant } from '../Buttons.model';

export default function Button({
  variant = 'primary',
  styles = '',
  value = '',
  iconSize = 'text-3xl',
  disabled = false,
  startIcon,
  endIcon,
  ...ButtonProps
}: ButtonProps): JSX.Element {
  const buttonVariant: ButtonVariant = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    tertiary: 'button-tertiary',
    outlined: 'button-outlined',
    text: 'button-text',
  };
  return (
    <button
      disabled={disabled}
      className={
        disabled
          ? `${buttonVariant[variant]} ${styles} opacity-50`
          : `${buttonVariant[variant]} ${styles}`
      }
      {...ButtonProps}
    >
      {startIcon ? (
        <span className={iconSize}>{createElement(startIcon)}</span>
      ) : null}
      {value}
      {endIcon ? (
        <span className={iconSize}>{createElement(endIcon)}</span>
      ) : null}
    </button>
  );
}
