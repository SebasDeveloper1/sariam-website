import { getClient } from '@/client';
import { OpinionCard } from '@/components';
import { Opinion } from '@/api/generated/graphql/graphql';
import { GetOpinionCollection } from '@/api/queries/queries';

export default async function OpinionSection() {
  const { data } = await getClient().query({
    query: GetOpinionCollection,
    context: {
      fetchOptions: { cache: 'no-store' },
    },
  });

  return (
    <section id="opiniones" className="w-full py-24 bg-white">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h2 className="heading_2 w-fit mb-7 font-bold text-gray-900">
          Opiniones
        </h2>
        <p className="paragraph_xl max-w-prose mb-20 font-medium text-center text-gray-500">
          ¿Qué opiniones tienen nuestros clientes sobre nuestro trabajo?
        </p>
        <ul className="grid grid-cols-6 justify-center items-center gap-8 w-full">
          {data?.opinionCollection?.items.map((opinion: Opinion) => (
            <li
              key={`opinion-${opinion.sys.id}`}
              className="col-span-6 md:col-span-3 xl:col-span-2"
            >
              <OpinionCard opinionData={opinion} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
