'use client';
import { useState, useEffect, MouseEvent, CSSProperties } from 'react';
import Image from 'next/image';
import { Event } from '@/api/generated/graphql';
import Modal from '@/containers/Modal/Modal';
import EventsModal from '@/containers/EventsSection/EventsModal/EventsModal';

const imageStyle: CSSProperties = {
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
};
export default function EventCard({ event }: { event: Event }) {
  const { mediaCollection } = event;
  const [loading, setLoading] = useState<boolean>(true);
  const [eventModalOpen, setEventModalOpen] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  }, []);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setEventModalOpen(!eventModalOpen);
  };

  return (
    <>
      {loading ? (
        <div className="overflow-hidden col-span-1 md:col-span-3 relative w-full h-64 rounded-2xl bg-gray-700 animate-pulse" />
      ) : (
        <button
          type="button"
          className="overflow-hidden col-span-1 md:col-span-3 relative w-full h-64 rounded-2xl bg-slate-600"
          onClick={handleClick}
        >
          <Image
            src={mediaCollection?.items[0]?.url || ''}
            alt="evento"
            fill={true}
            style={imageStyle}
            loading="lazy"
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="lg:hover:scale-105 cursor-pointer"
          />
        </button>
      )}
      {eventModalOpen && (
        <Modal
          isOpen={eventModalOpen}
          handleClose={() => {
            setEventModalOpen(!eventModalOpen);
          }}
        >
          <EventsModal event={event} />
        </Modal>
      )}
    </>
  );
}
