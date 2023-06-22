import Image from 'next/image';
import { CSSProperties } from 'react';
import image from '@/public/party.jpg';
export default function OpinionCard(): JSX.Element {
  const imageStyle: CSSProperties = {
    objectFit: 'cover',
  };
  return (
    <li className="col-span-6 md:col-span-3 xl:col-span-2 relative overflow-hidden flex flex-col justify-center items-center gap-y-6 w-full p-6 rounded-2xl shadow-sm bg-sky-50 list-none">
      <figcaption className="flex justify-between items-center gap-x-2 w-full">
        <figure className="relative overflow-hidden w-14 aspect-square rounded-full object-cover">
          <Image
            src={image}
            alt="evento"
            fill={true}
            style={imageStyle}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
        <div className="w-full">
          <h6 className="heading_6 font-semibold text-gray-900">
            Ryan Florence
          </h6>
          <span className="span_base font-medium text-lime-600">Cliente</span>
        </div>
      </figcaption>
      <div className="w-full">
        <blockquote className="p_base w-100 font-medium text-gray-500">
          Sariam Party superó mis expectativas y creó una experiencia mágica en
          mi evento. ¡Altamente recomendado!
        </blockquote>
      </div>
    </li>
  );
}
