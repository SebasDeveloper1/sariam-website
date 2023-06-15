import Image from 'next/image';
import Logo from '@/public/sariam.png';
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

export default function HeroSection(): JSX.Element {
  return (
    <section className="overflow-hidden flex justify-center items-center min-h-[70vh] py-32 bg-lime-900/20 backdrop-filter backdrop-blur-sm">
      <div className="grid grid-cols-3 justify-center items-center gap-6 w-10/12">
        <div className="col-span-3 xl:col-span-2 order-2 xl:order-1 text-center xl:text-start flex flex-col justify-center items-center xl:items-start gap-4">
          <div className="text-center xl:text-left">
            <h1
              className={`text-6xl md:text-7xl xl:text-8xl ${satisfy.className} text-white`}
            >
              Sariam Party
            </h1>
            <span
              className={`text-3xl md:text-4xl xl:text-5xl font-semibold text-lime-400 ${satisfy.className}`}
            >
              Eventos y Recepciones
            </span>
          </div>
          <span className="text-lg xl:text-3xl font-medium text-lime-50 max-w-[38ch]">
            Celebremos juntos momentos inolvidables, donde la magia cobra vida.
          </span>
        </div>
        <div className="col-span-3 xl:col-span-1 place-self-center order-1 xl:order-2 w-64 h-64 xl:w-72 xl:h-72 flex justify-center items-center">
          <Image src={Logo} alt="Logo Sariam Party" />
        </div>
      </div>
    </section>
  );
}
