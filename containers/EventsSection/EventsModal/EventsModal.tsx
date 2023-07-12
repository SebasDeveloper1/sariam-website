import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { fontSecondary } from '@/app/fonts';
import { Event } from '@/api/generated/graphql';
import { ArrowsTypes } from './Events.model';

function SampleNextArrow(props: ArrowsTypes) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        right: '0.5rem',
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: ArrowsTypes) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        zIndex: 1,
        left: '0.5rem',
      }}
      onClick={onClick}
    />
  );
}

export default function EventsModal({ event }: { event: Event }): JSX.Element {
  const { mediaCollection } = event;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="max-w-2xl h-full flex flex-col justify-center items-center">
      <div className="w-full">
        <Slider {...settings} className="mb-8">
          {mediaCollection?.items.map((item) => (
            <div key={item?.sys?.id} className="overflow-hidden">
              <figure className="relative">
                <Image
                  src={item?.url || ''}
                  alt={item?.title || ''}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                  width={1920}
                  height={1080}
                  priority
                />
                <div className="absolute bottom-0 w-full h-auto p-4 bg-gradient-to-t from-gray-950">
                  <span
                    className={`w-full ${fontSecondary.className} text-2xl md:text-3xl lg:text-4xl font-medium text-white truncate`}
                  >
                    {event.title}
                  </span>
                </div>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
