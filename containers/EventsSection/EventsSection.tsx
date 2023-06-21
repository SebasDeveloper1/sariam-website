import Image, { StaticImageData } from 'next/image';
import { CSSProperties } from 'react';
import sariam1 from '@/public/sariam1.jpg';
import sariam2 from '@/public/sariam2.jpg';
import sariam3 from '@/public/sariam3.jpg';
import sariam4 from '@/public/sariam4.jpg';
import sariam5 from '@/public/sariam5.jpg';
import sariam6 from '@/public/sariam6.jpg';

export default function EventsSection() {
  const imagesList: StaticImageData[] = [
    sariam1,
    sariam2,
    sariam3,
    sariam4,
    sariam5,
    sariam6,
  ];
  const imageStyle: CSSProperties = {
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  return (
    <section id="eventos" className="w-full py-20 bg-gray-50">
      <div className="flex flex-col justify-center items-center w-11/12 mx-auto">
        <div className="z-10 relative w-fit mb-16">
          <h2 className="heading_2 w-fit font-semibold text-gray-900">
            Últimos eventos
          </h2>
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="-z-10 absolute -bottom-4 left-0 h-[2em] w-full fill-lime-600"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
        </div>

        <section className="grid grid-cols-7 justify-center items-center gap-4 w-full [&>*:nth-child(1)]:col-span-7 md:[&>*:nth-child(1)]:col-span-3 [&>*:nth-child(2)]:col-span-7 md:[&>*:nth-child(2)]:col-span-2 [&>*:nth-child(3)]:col-span-7 md:[&>*:nth-child(3)]:col-span-2 [&>*:nth-child(4)]:col-span-7 md:[&>*:nth-child(4)]:col-span-2 [&>*:nth-child(5)]:col-span-7 md:[&>*:nth-child(5)]:col-span-2 [&>*:nth-child(6)]:col-span-7 md:[&>*:nth-child(6)]:col-span-3">
          {imagesList.map((image, index) => (
            <figure
              key={`post-${index}`}
              className="overflow-hidden col-span-1 md:col-span-3 relative w-full h-64 rounded-2xl bg-slate-600"
            >
              <Image
                src={image}
                alt="evento"
                fill={true}
                style={imageStyle}
                loading="lazy"
                quality={100}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="hover:scale-105 cursor-pointer"
              />
            </figure>
          ))}
        </section>
      </div>
    </section>
  );
}
