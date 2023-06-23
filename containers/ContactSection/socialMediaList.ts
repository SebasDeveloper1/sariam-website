import { IconType } from 'react-icons';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

interface SocialMediaListProps {
  title: string;
  icon: IconType;
  url: string;
}

export const socialMediaList: SocialMediaListProps[] = [
  {
    title: 'Facebook',
    icon: FaFacebook,
    url: 'https://www.facebook.com/sariam.party2016',
  },
  {
    title: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/sariam_party/',
  },
];
