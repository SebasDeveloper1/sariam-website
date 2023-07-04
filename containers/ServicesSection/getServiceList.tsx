import { serviceProps } from './servicesSection.model';
import {
  FaUtensils,
  FaGlassCheers,
  FaMusic,
  FaTheaterMasks,
  FaChair,
  FaCameraRetro,
  FaUserTie,
} from 'react-icons/fa';

const enrichmentArray = [
  {
    icon: <FaUtensils />,
    type: 'food',
    bgCard: 'bg-thumbnail-green',
  },
  {
    icon: <FaGlassCheers />,
    type: 'drink',
    bgCard: 'bg-thumbnail-violet',
  },
  {
    icon: <FaMusic />,
    type: 'sound',
    bgCard: 'bg-thumbnail-blue',
  },
  {
    icon: <FaTheaterMasks />,
    type: 'decoration',
    bgCard: 'bg-thumbnail-orange',
  },
  {
    icon: <FaChair />,
    type: 'rent',
    bgCard: 'bg-thumbnail-purple',
  },
  {
    icon: <FaCameraRetro />,
    type: 'photo',
    bgCard: 'bg-thumbnail-red',
  },
  {
    icon: <FaUserTie />,
    type: 'logistic',
    bgCard: 'bg-thumbnail-yellow',
  },
];
const getServiceList = (data: serviceProps[]): serviceProps[] => {
  const serviceList = data.map((service: serviceProps) => {
    const enrichment = enrichmentArray.find(
      (enrichment) => enrichment.type === service.type
    );
    return {
      ...service,
      icon: enrichment?.icon,
      type: service.type,
      bgCard: enrichment?.bgCard,
    };
  });
  return serviceList;
};

export default getServiceList;
