/* eslint-disable react/prop-types */
import { CSSProperties } from 'react';
import Image from 'next/image';
import defaultImage from '@/public/sariam.png';
import { Opinion } from '@/api/generated/graphql/graphql';
export default function OpinionCard({ opinionData }: { opinionData: Opinion }) {
  const { content, author } = opinionData;
  const imageStyle: CSSProperties = {
    objectFit: 'cover',
  };
  return (
    <div className="relative overflow-hidden flex flex-col justify-start items-center gap-y-4 w-full p-6 rounded-2xl bg-white shadow-xl shadow-slate-900/10">
      <figcaption className="flex justify-between items-center gap-x-2 w-full">
        <figure className="relative overflow-hidden w-14 aspect-square rounded-full object-cover">
          <Image
            src={author?.photo?.url || defaultImage}
            alt={
              author?.photo?.description ||
              author?.name ||
              'Photo of the client'
            }
            fill={true}
            style={imageStyle}
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
        <div className="w-full">
          <h6 className="heading_6 font-medium text-gray-900 capitalize leading-none">
            {author?.name}
          </h6>
          <span className="span_base font-medium text-lime-600 capitalize">
            {author?.role}
          </span>
        </div>
      </figcaption>
      <div className="w-full">
        <blockquote className="overflow-hidden p_base w-full text-gray-700">
          {content}
        </blockquote>
      </div>
    </div>
  );
}
