import { Service } from '@/api/generated/graphql';
import { IconType } from 'react-icons';

export type serviceProps = Service & {
  icon?: JSX.Element;
  bgCard?: string;
};

interface Media {
  title: string;
  description: string;
  url: string;
}

interface Sys {
  id: string;
}

export interface mockServiceProps {
  sys: Sys;
  title: string;
  cardDescription: string;
  generalDescription: string;
  serviceDetails: string[];
  media: Media;
  icon: JSX.Element;
  bgCard: string;
}
