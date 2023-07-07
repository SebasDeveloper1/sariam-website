import { getClient } from '@/client';
import { GetOpinionCollection } from '@/api/queries/queries';
import ScrollSection from './ScrollSection';

export default async function OpinionSection() {
  const { data } = await getClient().query({
    query: GetOpinionCollection,
    context: {
      fetchOptions: { next: { revalidate: 5 } },
    },
  });

  return (
    <section id="opiniones" className="w-full py-24 lg:py-32 bg-slate-50">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h2 className="heading_2 w-fit mb-6 font-bold text-gray-900">
          Opiniones
        </h2>
        <p className="paragraph_xl max-w-prose mb-4 font-medium text-center text-gray-600">
          ¿Qué opiniones tienen nuestros clientes sobre nuestro trabajo?
        </p>
        <div className="flex justify-center items-center gap-4 w-full mb-20">
          {Array.from(Array(5).keys()).map((index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-star-filled opacity-80"
              width="2.5rem"
              height="2.5rem"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="#65a30d"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
                strokeWidth={0}
                fill="#65a30d"
              />
            </svg>
          ))}
        </div>
        <ScrollSection dataList={data?.opinionCollection?.items} />
      </div>
    </section>
  );
}
