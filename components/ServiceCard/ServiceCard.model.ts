import { ButtonHTMLAttributes } from 'react';
import {
  mockServiceProps,
  serviceProps,
} from '@/containers/ServicesSection/servicesSection.model';
export interface ServiceCardProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: serviceProps | mockServiceProps;
}
