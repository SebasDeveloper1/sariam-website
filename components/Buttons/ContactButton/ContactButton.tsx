'use client';
import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const LoadingSkeleton = () => {
  return (
    <div className="button-primary w-1/2 h-14 bg-gray-800 hover:bg-gray-800 animate-pulse" />
  );
};

export default function ContactButton(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <a
      href="https://wa.link/kuu26s"
      target="_blank"
      rel="noopener noreferrer"
      className="button-primary bg-lime-500 hover:bg-lime-600 transition-colors duration-300 text-xl text-white w-fit px-8 py-3"
    >
      <FaWhatsapp id="whatsapp-icon" className="mr-2 text-3xl" />
      Contactar ahora
    </a>
  );
}
