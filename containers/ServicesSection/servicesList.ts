import { servicesListProps } from './servicesSection.model';
import {
  FaUtensils,
  FaGlassCheers,
  FaMusic,
  FaTheaterMasks,
  FaChair,
  FaCameraRetro,
  FaUserTie,
} from 'react-icons/fa';

const servicesList: servicesListProps[] = [
  {
    icon: FaUtensils,
    title: 'Comida',
    description:
      'Gastronomía gourmet para eventos y recepciones personalizadas.',
    bgCard: 'bg-thumbnail-green',
  },
  {
    icon: FaGlassCheers,
    title: 'Bebidas y Coctelería',
    description: 'Planes personalizados de bebidas y coctelería a medida.',
    bgCard: 'bg-thumbnail-violet',
  },
  {
    icon: FaMusic,
    title: 'Sonido y Animación',
    description:
      'Sonido profesional, luces, animación y DJ para todo tipo de evento.',
    bgCard: 'bg-thumbnail-blue',
  },
  {
    icon: FaTheaterMasks,
    title: 'Decoración',
    description: 'Decoración temática para cualquier ocasión.',
    bgCard: 'bg-thumbnail-orange',
  },
  {
    icon: FaChair,
    title: 'Alquiler de menaje',
    description:
      'Alquiler de telas, mesas, sillas y menaje especializado para eventos.',
    bgCard: 'bg-thumbnail-purple',
  },
  {
    icon: FaCameraRetro,
    title: 'Video y Fotografía',
    description: 'Servicio profesional de video y fotografía.',
    bgCard: 'bg-thumbnail-red',
  },
  {
    icon: FaUserTie,
    title: 'Logística y Servicio',
    description: 'Logística y personal de servicio.',
    bgCard: 'bg-thumbnail-yellow',
  },
];

export default servicesList;
