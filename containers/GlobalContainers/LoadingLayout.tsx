'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { fontSecondary } from '@/app/fonts';
import { ThreeDots } from 'react-loader-spinner';
import Confetti from 'react-confetti';

import Logo from '@/public/sariam.svg';

export default function LoadingLayout(): JSX.Element {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'unset';
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = loading ? 'hidden' : 'unset';
  }, [loading]);

  return (
    <div
      className={`${
        loading ? 'block' : 'hidden'
      } z-50 fixed inset-0 w-screen h-screen bg-body-image bg-cover bg-center`}
    >
      <Confetti
        width={1280}
        height={1000}
        recycle={false}
        run
        className="mx-auto"
      />
      <div className="w-full h-full bg-gray-950/80">
        <div className="w-full h-full bg-dark-2 bg-cover  bg-center">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <figure className="w-40 aspect-square flex justify-center items-center">
              <Image
                src={Logo}
                alt="Logo Sariam Party"
                priority
                className="w-full h-full"
              />
            </figure>
            <span
              className={`${fontSecondary.className} text-white text-4xl lg:text-5xl font-bold`}
            >
              Sariam Party
            </span>
            <ThreeDots
              height={80}
              width={80}
              radius={9}
              color="#84cc16"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
