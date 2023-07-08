'use client';
import { MouseEvent, useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { ServiceCardProps } from './ServiceCard.model';
import Modal from '@/containers/Modal/Modal';
import ServiceModal from '@/containers/ServicesSection/ServiceModal/ServiceModal';

export default function ServiceCard({ data }: ServiceCardProps): JSX.Element {
  const { bgCard, icon, title, cardDescription } = data;
  const [serviceModalOpen, setServiceModalOpen] = useState<boolean>(false);

  const handleClick = (e: MouseEvent) => {
    e.preventDefault();
    setServiceModalOpen(!serviceModalOpen);
  };

  return (
    <>
      <button
        className="col-span-6 md:col-span-3 xl:col-span-2 overflow-hidden w-full h-full min-h-[7rem] rounded-2xl shadow-lg bg-gray-800 hover:bg-gray-700"
        onClick={handleClick}
      >
        <div
          className={`w-full h-full ${bgCard} bg-no-repeat bg-right bg-contain`}
        >
          <div className="relative flex justify-center items-center gap-5 w-full h-full p-6 text-start bg-gray-900/25">
            <span className="flex items-center justify-center aspect-square rounded-full bg-lime-50 text-5xl text-lime-500">
              {icon}
            </span>
            <div className="w-full space-y-1">
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="text-sm text-white">{cardDescription}</p>
            </div>
            <span className="absolute top-3 right-3 text-2xl text-white">
              <FaAngleRight />
            </span>
          </div>
        </div>
      </button>
      {serviceModalOpen && (
        <Modal
          isOpen={serviceModalOpen}
          handleClose={() => {
            setServiceModalOpen(!serviceModalOpen);
          }}
        >
          <ServiceModal data={data} />
        </Modal>
      )}
    </>
  );
}
