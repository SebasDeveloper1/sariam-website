import { getClient } from '@/client';
import { GetServiceColection } from '@/api/queries/queries';
import { serviceProps } from './servicesSection.model';
import { ServiceCard } from '@/components/index';
import getServiceList from './getServiceList';

export default async function ServicesSection(): Promise<JSX.Element> {
  const { data } = await getClient().query({
    query: GetServiceColection,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  });

  const servicesList: serviceProps[] = getServiceList(
    data.serviceCollection.items
  );

  return (
    <section id="servicios" className="w-full py-24 lg:py-32 bg-gray-900">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h2 className="heading_2 w-fit mb-6 font-bold text-white">
          Nuestros Servicios
        </h2>
        <p className="paragraph_xl max-w-prose mb-20 text-center text-gray-400">
          Conoce nuestros servicios y cómo podemos ajustarnos a tus necesidades
          para hacer de tu evento un éxito inolvidable.
        </p>
        <section className="grid grid-cols-6 justify-center items-center gap-6 w-full">
          {servicesList.map((service: serviceProps) => (
            <ServiceCard key={`serviceCard-${service.sys.id}`} data={service} />
          ))}
          <article className="col-span-6 md:col-span-3 xl:col-span-2 relative flex justify-center items-center gap-4 w-full h-full min-h-[7rem] p-6 rounded-2xl border-2 border-lime-700 border-dashed text-center ">
            <div className="w-full space-y-1">
              <h3 className="text-xl font-medium text-gray-400">
                🎉 Proximos servicios 🎈
              </h3>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
}
