import { ButtonHTMLAttributes } from 'react';
import { servicesListProps } from '@/containers/ServicesSection/servicesSection.model';
export interface ServiceCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: servicesListProps;
}
