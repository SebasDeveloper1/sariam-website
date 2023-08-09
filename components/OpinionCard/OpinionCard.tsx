'use client';
import { useState, useEffect } from 'react';
import { Opinion } from '@/api/generated/graphql';
import { MockOpinionTestProps } from './OpinionCard.model';
import { WrapperImage } from '@/components';
import { AspectRatio, fitOptions } from '../WrapperImage/WrapperImage.model';

const LoadingSkeleton = () => {
  return (
    <div className="w-full h-52 aspect-video rounded-xl bg-gray-300 animate-pulse" />
  );
};

export default function OpinionCard({
  opinionData,
}: {
  opinionData: Opinion | MockOpinionTestProps;
}) {
  const { content, author } = opinionData;
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <div
      role="article"
      className="relative overflow-hidden flex flex-col justify-start items-center gap-y-4 w-full p-6 rounded-2xl bg-white shadow-xl shadow-slate-900/10"
    >
      <figcaption className="flex justify-between items-center gap-x-3 w-full">
        <figure className="relative overflow-hidden w-14 aspect-square rounded-full object-cover">
          <WrapperImage
            src={author?.photo?.url || ''}
            alt={
              author?.photo?.description ||
              author?.name ||
              'Photo of the client'
            }
            width={author?.photo?.width || 100}
            aspectRatio={AspectRatio['1:1']}
            fit={fitOptions.fill}
            loading="lazy"
          />
        </figure>
        <div className="w-full">
          <h6 className="heading_6 font-semibold text-gray-900 capitalize leading-none">
            {author?.name}
          </h6>
          <span className="span_sm font-medium text-lime-600 capitalize">
            {author?.role}
          </span>
        </div>
      </figcaption>
      <div className="w-full">
        <blockquote className="overflow-hidden w-full paragraph_base text-gray-700">
          {content}
        </blockquote>
      </div>
    </div>
  );
}
