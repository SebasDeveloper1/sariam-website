import { createElement } from 'react';
import { ButtonProps, ButtonVariant } from '../Buttons.model';

export default function Button({
  type = 'button',
  variant = 'primary',
  styles = '',
  title = '',
  value = '',
  ariaLabel = '',
  iconSize = 'text-3xl',
  disabled = false,
  refElement = null,
  handleOnClick,
  startIcon,
  endIcon,
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
      ref={refElement}
      type={type}
      title={title}
      disabled={disabled}
      className={
        disabled
          ? `${buttonVariant[variant]} ${styles} opacity-50`
          : `${buttonVariant[variant]} ${styles}`
      }
      onClick={handleOnClick}
      aria-label={ariaLabel}
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
