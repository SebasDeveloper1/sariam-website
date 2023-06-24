import { createElement, CSSProperties } from 'react';
import Image from 'next/image';
import { Satisfy } from 'next/font/google';
import { socialMediaList } from '@/utils/socialMediaList';
import Logo from '/public/sariam.png';

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  const imageStyle: CSSProperties = {
    objectFit: 'cover',
  };

  const renderSocialMediaIcons = () => {
    return socialMediaList.map((item) => (
      <li key={`social-media-${item.title}`}>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={item.title}
          className="text-4xl text-gray-400 hover:text-gray-500"
        >
          {createElement(item.icon)}
        </a>
      </li>
    ));
  };

  return (
    <section className="w-full py-24 bg-gray-100 border-t-8 border-lime-500">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <figcaption className="flex justify-center items-center gap-x-2 mb-8">
          <figure className="relative w-12 aspect-square rounded-full bg-gray-900 border-2 border-lime-500">
            <Image
              src={Logo}
              alt="Logo Sariam Party"
              fill={true}
              style={imageStyle}
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </figure>
          <h3 className={`heading_3 ${satisfy.className} text-gray-900`}>
            SariamParty
          </h3>
        </figcaption>
        <span className="mb-12 font-medium text-center text-gray-500">
          © 2023 Sariam Party, Todos los derechos reservados.
        </span>
        <ul className="flex justify-center items-center gap-8 list-none">
          {renderSocialMediaIcons()}
        </ul>
      </div>
    </section>
  );
}
