import { getClient } from '@/client';
import { GetEventColection } from '@/api/queries/queries';
import { Event } from '@/api/generated/graphql';
import EventCard from '@/components/EventCard/EventCard';

export default async function EventsSection(): Promise<
  JSX.Element | { notFound: boolean }
> {
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
    return {
      notFound: true,
    };
  }

  return (
    <section id="eventos" className="w-full bg-gray-900">
      <div className="w-full py-20 lg:py-32 bg-dark-2 bg-cover bg-center">
        <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
          <h2 className="heading_2 w-fit mb-6 font-bold text-white">
            Últimos eventos
          </h2>
          <span className="text-4xl mb-16 text-center">🎉 🥳</span>

          <ul className="grid grid-cols-7 justify-center items-center gap-6 w-full [&>*:nth-child(1)]:col-span-7 md:[&>*:nth-child(1)]:col-span-3 [&>*:nth-child(2)]:col-span-7 md:[&>*:nth-child(2)]:col-span-2 [&>*:nth-child(3)]:col-span-7 md:[&>*:nth-child(3)]:col-span-2 [&>*:nth-child(4)]:col-span-7 md:[&>*:nth-child(4)]:col-span-2 [&>*:nth-child(5)]:col-span-7 md:[&>*:nth-child(5)]:col-span-2 [&>*:nth-child(6)]:col-span-7 md:[&>*:nth-child(6)]:col-span-3">
            {eventsList.map((event: Event) => (
              <EventCard key={`event-${event.sys.id}`} event={event} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
