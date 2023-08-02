import { getClient } from '@/client';
import { GetEventColection } from '@/api/queries/queries';
import { Event } from '@/api/generated/graphql';
import SliderEvents from './SliderEvents';

export default async function EventsSection(): Promise<JSX.Element> {
  let eventsList: Event[] = [];

  try {
    const { data } = await getClient().query({
      query: GetEventColection,
      context: {
        fetchOptions: { next: { revalidate: 5 } },
      },
    });
    eventsList = data?.eventCollection?.items;
  } catch (error) {
    console.log(error);
  }

  return (
    <section id="eventos" className="w-full bg-gray-900">
      <div className="w-full py-20 lg:py-32 bg-dark-2 bg-cover bg-center">
        <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
          <h2 className="heading_2 w-fit mb-7 font-bold text-white">
            Últimos eventos
          </h2>
          <p className="paragraph_xl max-w-prose mb-20 text-center text-gray-300">
            ¡Échale un vistazo a los últimos eventos que hicimos para nuestros
            clientes y descubre cómo creamos experiencias inolvidables para
            ellos!
          </p>
          <SliderEvents eventsList={eventsList} />
        </div>
      </div>
    </section>
  );
}
