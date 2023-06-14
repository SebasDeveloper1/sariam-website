'use client';
import { useState, useEffect, MouseEvent } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { IconButton } from '@/components/index';
import { Satisfy } from 'next/font/google';

const satisfy = Satisfy({ subsets: ['latin'], weight: '400' });

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`z-20 fixed top-0 flex items-center w-full h-16 ${
        isScrolled ? 'bg-zinc-900/90' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between w-11/12 mx-auto">
        <div className="flex items-center justify-between w-full md:gap-x-12">
          <a
            href="#"
            className={`${satisfy.className} font-bold text-3xl text-white`}
          >
            SariamParty
          </a>

          <ul className="hidden xl:flex items-center justify-center gap-x-6">
            <li className="navbar-item-xl">
              <a href="#">Inicio</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#">Últimos eventos</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#">Servicios</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#">Opiniones</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#">Contacto</a>
            </li>
          </ul>

          <IconButton
            type="button"
            variant="text"
            title="Menu"
            aria-label="Menu"
            iconSize="text-4xl"
            icon={isOpen ? MdClose : MdMenu}
            styles={`xl:hidden transition-all duration-300 transform text-lime-500 hover:text-lime-400 ${
              isOpen ? 'rotate-90' : ''
            }`}
            onClick={handleMenu}
          />

          {isOpen ? (
            <div className="fixed top-0 xl:hidden inset-0 h-screen flex justify-center px-10 py-20 mt-16 bg-zinc-900/70 backdrop-filter backdrop-blur-md">
              <ul className="flex flex-col items-center gap-y-6 w-full">
                <li className="navbar-item-sm w-full">
                  <a href="#">Inicio</a>
                </li>
                <li className="navbar-item-sm w-full">
                  <a href="#">Últimos eventos</a>
                </li>
                <li className="navbar-item-sm w-full">
                  <a href="#">Servicios</a>
                </li>
                <li className="navbar-item-sm w-full">
                  <a href="#">Opiniones</a>
                </li>
                <li className="navbar-item-sm w-full">
                  <a href="#">Contacto</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
  );
}
