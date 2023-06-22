import { createElement } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { ServiceCardProps } from './ServiceCard.model';

export default function ServiceCard({
  icon,
  title,
  description,
  bgCard,
  ...ServiceCardProps
}: ServiceCardProps): JSX.Element {
  return (
    <button
      className="col-span-6 md:col-span-3 xl:col-span-2 overflow-hidden w-full h-full min-h-[7rem] rounded-2xl shadow-lg bg-gray-800"
      {...ServiceCardProps}
    >
      <div
        className={`w-full h-full ${bgCard} bg-no-repeat bg-right bg-contain`}
      >
        <div className="relative flex justify-center items-center gap-5 w-full h-full p-6 text-start bg-gray-900/25">
          <span className="flex items-center justify-center aspect-square rounded-full bg-lime-50 text-5xl text-lime-500">
            {createElement(icon)}
          </span>
          <div className="w-full space-y-1">
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="text-sm text-white">{description}</p>
          </div>
          <span className="absolute top-3 right-3 text-2xl text-white">
            <FaAngleRight />
          </span>
        </div>
      </div>
    </button>
  );
}