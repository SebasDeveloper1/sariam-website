import { MouseEvent } from 'react';
import { servicesListProps } from './servicesSection.model';
import servicesList from './servicesList';
import { ServiceCard } from '@/components/index';

export default function ServicesSection(): JSX.Element {
  return (
    <section id="servicios" className="w-full py-20 bg-gray-900">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h2 className="heading_2 w-fit mb-6 font-semibold text-white">
          Nuestros Servicios
        </h2>
        <p className="paragraph_lg max-w-prose mb-16 text-center text-gray-400">
          Conoce nuestros servicios y cómo podemos ajustarnos a tus necesidades
          para hacer de tu evento un éxito inolvidable.
        </p>
        <section className="grid grid-cols-6 justify-center items-center gap-6 w-full">
          {servicesList.map((service: servicesListProps) => (
            <ServiceCard
              key={`serviceCard-${service.title}`}
              type="button"
              icon={service.icon}
              title={service.title}
              description={service.description}
              bgCard={service.bgCard}
            />
          ))}
          <article className="col-span-6 md:col-span-3 xl:col-span-2 relative flex justify-center items-center gap-4 w-full h-full min-h-[7rem] p-6 rounded-2xl border-2 border-lime-700 border-dashed text-center ">
            <div className="w-full space-y-1">
              <h3 className="text-xl font-medium text-gray-300">
                🎉 Proximos servicios 🎈
              </h3>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
