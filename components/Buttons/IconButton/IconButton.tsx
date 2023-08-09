'use client';
import { useState, useEffect } from 'react';
import { createElement } from 'react';
import { IconButtonProps, ButtonVariant } from '../Buttons.model';

const LoadingSkeleton = () => {
  return (
    <div className="button-primary w-12 aspect-square rounded-full p-2.5 bg-gray-800 hover:bg-gray-800 animate-pulse" />
  );
};

export default function IconButton({
  variant = 'primary',
  styles = '',
  iconSize = 'text-3xl',
  disabled = false,
  icon,
  ...IconButtonProps
}: IconButtonProps): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  const buttonVariant: ButtonVariant = {
    primary: 'button-primary rounded-full p-2.5',
    secondary: 'button-secondary rounded-full p-2.5',
    tertiary: 'button-tertiary rounded-full p-2.5',
    outlined: 'button-outlined rounded-full p-2.5',
    text: 'button-text rounded-full p-2.5',
  };

  if (loading) return <LoadingSkeleton />;

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
