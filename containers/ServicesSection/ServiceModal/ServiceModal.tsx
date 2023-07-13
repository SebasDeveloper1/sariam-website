import { FaCaretRight } from 'react-icons/fa';
import { ContactButton } from '@/components';
import { ServiceDetailProps, ServiceModalProps } from './ServiceModal.model';

function ServiceDetail({ detail }: ServiceDetailProps): JSX.Element {
  return (
    <li className="paragraph_base leading-relaxed text-gray-600 flex justify-start items-center">
      <span className="mr-2 text-lg text-sky-500/80">
        <FaCaretRight />
      </span>
      <span>{detail}</span>
    </li>
  );
}

export default function ServiceModal({ data }: ServiceModalProps): JSX.Element {
  const { title, media, generalDescription, serviceDetails } = data;

  return (
    <div className="overflow-auto w-full h-full rounded-b-2xl p-0 lg:p-7 lg:pt-0">
      <div className="grid grid-cols-7 grid-flow-row justify-start items-start gap-6 lg:gap-x-12">
        <div className="col-span-7">
          <span className="block span_sm w-fit px-2 py-0.5 mb-3 bg-lime-500/80 text-white font-medium rounded-r-full lg:rounded-full">
            Servicio
          </span>
          <h4 className="heading_4 leading-none font-bold text-gray-900 px-6 lg:p-0">
            {title}
          </h4>
        </div>
        <div className="overflow-hidden col-span-7 lg:col-span-4 lg:order-2 lg:rounded-2xl">
          <video
            className="w-full aspect-video mx-auto bg-gray-200 shadow-lg"
            controls
            src={media?.url || ''}
          />
        </div>
        <div className="col-span-7 lg:col-span-3 lg:order-1 flex flex-col justify-center items-center w-full h-full p-6 pt-0 lg:p-0">
          <p className="paragraph_base text-gray-600 mb-6">
            {generalDescription}
          </p>
          <div className="w-full mb-10">
            <span className="block span_xl text-xl font-semibold text-sky-500 w-full mb-4">
              Tenemos para ti
            </span>
            <ul className="w-full space-y-2">
              {serviceDetails?.map((detail, index) => (
                <ServiceDetail key={index} detail={detail} />
              ))}
            </ul>
          </div>
          <ContactButton />
        </div>
      </div>
    </div>
  );
}
