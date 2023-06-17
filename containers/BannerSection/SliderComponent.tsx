'use client';
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SliderComponent(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const eventsList: string[] = [
    'Eventos empresariales',
    '15 Años',
    'Matrimonios',
    'Bautizos',
    'Cumpleaños',
    'Fotografía',
    'Luces y Sonido',
    'Animación y Dj',
  ];

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    arrows: false,
    variableWidth: true,
    touchMove: false,
    draggable: false,
  };

  const renderSkeleton = () => <div className="h-12" />;

  return (
    <div className="py-4">
      {isLoading ? (
        renderSkeleton() // Renderizar el esqueleto de carga
      ) : (
        <Slider {...settings}>
          {eventsList.map((event) => (
            <div key={`slider-event-${event}`}>
              <span
                className="span_lg block w-fit px-6 py-2 rounded-2xl text-gray-50 whitespace-nowrap bg-lime-900/50"
                style={{ marginRight: '1rem' }}
              >
                {event}
              </span>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}
