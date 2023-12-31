'use client';
import { useState, useEffect } from 'react';
import { SliderEventsProps } from './EventsSection.model';
import { WrapperImage } from '@/components';
import {
  AspectRatio,
  fitOptions,
} from '@/components/WrapperImage/WrapperImage.model';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';

const LoadingSkeleton = (): JSX.Element => {
  return (
    <div className="w-full md:w-1/2 lg:w-4/12 aspect-video rounded-xl bg-gray-800 animate-pulse" />
  );
};

export default function SliderEvents({
  eventsList,
}: SliderEventsProps): JSX.Element {
  if (typeof window !== 'undefined') {
    const [screen, setScreen] = useState<number>(window.innerWidth);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      // Simulate API call delay for loading skeleton
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const handleResize = () => setScreen(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, [window.innerWidth]);

    const slidesPerView = screen < 768 ? 1 : screen < 1024 ? 2 : 3;

    if (loading)
      return (
        <>
          <div className="w-full flex justify-center items-center gap-4">
            {[...Array(slidesPerView)].map((_, index) => (
              <LoadingSkeleton key={`skeleton-${index}`} />
            ))}
          </div>
        </>
      );

    return (
      <Swiper
        centeredSlides={true}
        spaceBetween={25}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop
        grabCursor
        freeMode={true}
        slidesPerView={slidesPerView}
        modules={[FreeMode, Autoplay, Pagination, Navigation]}
        className="w-full"
      >
        {eventsList.map((event) => (
          <SwiperSlide
            key={`event-${event.sys.id}`}
            className="overflow-hidden w-full h-full mb-12 rounded-xl flex justify-center items-center"
          >
            <figure className="relative w-full h-full">
              <WrapperImage
                src={event?.image?.url || ''}
                alt={event.title || ''}
                width={event?.image?.width || 1500}
                aspectRatio={AspectRatio['16:9']}
                fit={fitOptions.fill}
                priority
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 py-3 bg-gradient-to-t from-gray-950">
                <span className="paragraph_xl font-medium text-white">
                  {event?.title}
                </span>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  return <></>;
}
