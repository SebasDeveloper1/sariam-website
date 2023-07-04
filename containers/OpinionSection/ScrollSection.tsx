'use client';
import { CSSProperties, useEffect, useState } from 'react';
import { OpinionCard } from '@/components';
import { Opinion } from '@/api/generated/graphql';
import { OpinionListProps } from './ScrollSection.model';

export default function ScrollSection({
  dataList,
}: {
  dataList: Opinion[];
}): JSX.Element {
  const [opinionList, setOpinionList] = useState<OpinionListProps>({
    'list-sm': [],
    'list-md': [],
    'list-lg': [],
  });
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const updateOpinionList = () => {
      const updatedOpinionList: OpinionListProps = {
        'list-sm': [],
        'list-md': [],
        'list-lg': [],
      };

      const listLength = Math.floor(dataList.length / 3);
      updatedOpinionList['list-sm'] = dataList.slice(0, listLength);
      updatedOpinionList['list-md'] = dataList.slice(
        listLength,
        listLength * 2
      );
      updatedOpinionList['list-lg'] = dataList.slice(
        listLength * 2,
        dataList.length
      );

      if (screenSize <= 768) {
        updatedOpinionList['list-sm'] = dataList;
      } else if (screenSize <= 1024) {
        const listLength = Math.floor(dataList.length / 2);
        updatedOpinionList['list-sm'] = dataList.slice(0, listLength);
        updatedOpinionList['list-md'] = dataList.slice(
          listLength,
          dataList.length
        );
      }

      setOpinionList(updatedOpinionList);
    };

    updateOpinionList();
  }, [screenSize, dataList]);

  return (
    <section className="relative -mx-4 mt-16 grid h-[49rem] max-h-[100vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
      <ul
        className="animate-marquee space-y-8 py-4"
        style={{ '--marquee-duration': '28320ms' } as CSSProperties}
      >
        {opinionList['list-sm'].map((opinion: Opinion) => (
          <li
            key={`opinion-${opinion.sys.id}`}
            className="col-span-6 md:col-span-3 xl:col-span-2 h-full animate-fade-in"
          >
            <OpinionCard opinionData={opinion} />
          </li>
        ))}
      </ul>
      <ul
        className="animate-marquee space-y-8 py-4 hidden md:block"
        style={{ '--marquee-duration': '40800ms' } as CSSProperties}
      >
        {opinionList['list-md'].map((opinion: Opinion) => (
          <li
            key={`opinion-${opinion.sys.id}`}
            className="col-span-6 md:col-span-3 xl:col-span-2 h-full animate-fade-in"
          >
            <OpinionCard opinionData={opinion} />
          </li>
        ))}
      </ul>
      <ul
        className="animate-marquee space-y-8 py-4 hidden lg:block"
        style={{ '--marquee-duration': '22880ms' } as CSSProperties}
      >
        {opinionList['list-lg'].map((opinion: Opinion) => (
          <li
            key={`opinion-${opinion.sys.id}`}
            className="col-span-6 md:col-span-3 xl:col-span-2 h-full animate-fade-in"
          >
            <OpinionCard opinionData={opinion} />
          </li>
        ))}
      </ul>
      <div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
      </div>
    </section>
  );
}
