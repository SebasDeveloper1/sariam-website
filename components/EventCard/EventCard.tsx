'use client';
import { useState, MouseEvent, CSSProperties } from 'react';
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
  const [eventModalOpen, setEventModalOpen] = useState<boolean>(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setEventModalOpen(!eventModalOpen);
  };

  return (
    <>
      <li className="w-full h-64">
        <button
          type="button"
          className="overflow-hidden relative w-full h-full rounded-2xl bg-slate-600"
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
          />
          <div className="absolute inset-0 flex justify-center items-center p-6 bg-gray-900/30 backdrop-filter backdrop-blur-sm transition-opacity ease-in duration-300 lg:opacity-0 lg:hover:opacity-100 cursor-pointer ">
            <span className="relative block w-full pb-2 truncate span_xl text-2xl text-center font-semibold text-white after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-24 after:h-0.5 after:rounded-full after:bg-cover after:bg-lime-500">
              {event.title}
            </span>
          </div>
        </button>
      </li>
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
