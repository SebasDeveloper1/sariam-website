import { createElement } from 'react';
import { IconButtonProps, ButtonVariant } from '../Buttons.model';

export default function IconButton({
  type = 'button',
  variant = 'primary',
  styles = '',
  title = '',
  ariaLabel = '',
  disabled = false,
  refElement = null,
  handleOnClick,
  icon,
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
      ref={refElement}
      type={type}
      disabled={disabled}
      className={`${buttonVariant[variant]} ${styles} ${
        disabled ? 'opacity-50' : ''
      }`}
      onClick={handleOnClick}
      title={title}
      aria-label={ariaLabel}
    >
      {icon ? <span className="text-3xl">{createElement(icon)}</span> : null}
    </button>
  );
}
