import { Service } from '@/api/generated/graphql';

export type serviceProps = Service & {
  icon?: JSX.Element;
  bgCard?: string;
};
