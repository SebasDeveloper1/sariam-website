'use client';
import React, { useCallback, useState, useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { ServiceCardProps } from './ServiceCard.model';
import Modal from '@/containers/Modal/Modal';
import ServiceModal from '@/containers/ServicesSection/ServiceModal/ServiceModal';

const LoadingSkeleton = () => {
  return (
    <div className="col-span-6 md:col-span-3 xl:col-span-2 w-full h-full min-h-[7rem] rounded-2xl bg-gray-800 animate-pulse" />
  );
};

export default function ServiceCard({ data }: ServiceCardProps): JSX.Element {
  const { bgCard, icon, title, cardDescription } = data;
  const [serviceModalOpen, setServiceModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServiceModalOpen(!serviceModalOpen);
  };

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        setServiceModalOpen(!serviceModalOpen);
      }
    },
    [serviceModalOpen]
  );

  if (loading) return <LoadingSkeleton />;

  return (
    <>
      <div
        role="article"
        className="overflow-hidden col-span-6 md:col-span-3 xl:col-span-2 w-full h-full min-h-[7rem] rounded-2xl hover:bg-gray-700/50 cursor-pointer"
        onClick={handleClick}
        onKeyDown={handleKeyPress}
        tabIndex={0}
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
      </div>
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
