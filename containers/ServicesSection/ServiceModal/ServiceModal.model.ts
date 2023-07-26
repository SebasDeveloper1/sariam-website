import { mockServiceProps, serviceProps } from '../servicesSection.model';

export interface ServiceModalProps {
  data: serviceProps | mockServiceProps;
}

export interface ServiceDetailProps {
  detail: string | null;
}
