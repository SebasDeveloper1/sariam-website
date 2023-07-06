import { ButtonHTMLAttributes } from 'react';
import { serviceProps } from '@/containers/ServicesSection/servicesSection.model';
export interface ServiceCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: serviceProps;
}
