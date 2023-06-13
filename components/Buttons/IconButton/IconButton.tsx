import { createElement } from 'react';
import { IconButtonProps, ButtonVariant } from '../Buttons.model';

export default function IconButton({
  variant = 'primary',
  styles = '',
  iconSize = 'text-3xl',
  disabled = false,
  icon,
  ...IconButtonProps
}: IconButtonProps): JSX.Element {
  const buttonVariant: ButtonVariant = {
    primary: 'button-primary rounded-full p-2.5',
    secondary: 'button-secondary rounded-full p-2.5',
    tertiary: 'button-tertiary rounded-full p-2.5',
    outlined: 'button-outlined rounded-full p-2.5',
    text: 'button-text rounded-full p-2.5',
  };

  return (
    <button
      disabled={disabled}
      className={`${buttonVariant[variant]} ${styles} ${
        disabled ? 'opacity-50' : ''
      }`}
      {...IconButtonProps}
    >
      {icon ? <span className={iconSize}>{createElement(icon)}</span> : null}
    </button>
  );
}
