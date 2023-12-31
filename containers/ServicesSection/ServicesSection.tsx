import { getClient } from '@/client';
import { GetServiceColection } from '@/api/queries/queries';
import { serviceProps } from './servicesSection.model';
import { ServiceCard } from '@/components/index';
import getServiceList from './getServiceList';

export default async function ServicesSection(): Promise<JSX.Element> {
  let servicesList: serviceProps[] = [];

  try {
    const { data } = await getClient().query({
      query: GetServiceColection,
      context: {
        fetchOptions: {
          next: { revalidate: 5 },
        },
      },
    });

    servicesList = getServiceList(data.serviceCollection.items);
  } catch (error) {
    console.log(error);
  }

  return (
    <section id="servicios" className="w-full bg-gray-900">
      <div className="w-full bg-dark-3 bg-cover bg-center">
        <div className="w-11/12 py-20 lg:py-32 mx-auto border-t border-lime-600">
          <div className="flex flex-col justify-center items-center w-full">
            <h2 className="heading_2 w-fit mb-7 font-bold text-white">
              Nuestros Servicios
            </h2>
            <p className="paragraph_xl max-w-prose mb-20 text-center text-gray-300">
              Conoce nuestros servicios y cómo podemos ajustarnos a tus
              necesidades para hacer de tu evento un éxito inolvidable.
            </p>
            <ul className="grid grid-cols-6 justify-center items-center gap-6 w-full">
              {servicesList.map((service: serviceProps) => (
                <ServiceCard
                  key={`serviceCard-${service.sys.id}`}
                  data={service}
                />
              ))}
              <li className="col-span-6 md:col-span-3 xl:col-span-2 relative flex justify-center items-center gap-4 w-full h-full min-h-[7rem] p-6 rounded-2xl border-2 border-lime-600 border-dashed text-center ">
                <div className="w-full space-y-1">
                  <h3 className="text-xl font-medium text-gray-400">
                    🎉 Proximos servicios 🎈
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
