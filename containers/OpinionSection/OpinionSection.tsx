import { OpinionCard } from '@/components';
export default function OpinionSection(): JSX.Element {
  return (
    <section id="opiniones" className="w-full py-24 bg-white">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <h2 className="heading_2 w-fit mb-7 font-bold text-gray-900">
          Opiniones
        </h2>
        <p className="paragraph_xl max-w-prose mb-20 font-medium text-center text-gray-500">
          ¿Qué opiniones tienen nuestros clientes sobre nuestro trabajo?
        </p>
        <section className="grid grid-cols-6 justify-center items-center gap-8 w-full">
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
          <OpinionCard />
        </section>
      </div>
    </section>
  );
}
