import { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface ServiceCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  title: string;
  description: string;
  bgCard?: string;
}
