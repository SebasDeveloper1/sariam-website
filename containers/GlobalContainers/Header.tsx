'use client';
import { useState, MouseEvent } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { IconButton } from '@/components/index';
import { fontSecondary } from '@/app/fonts';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-20 fixed top-0 flex items-center w-full h-16 bg-gray-900 shadow-sm shadow-gray-950">
      <nav className="flex justify-between w-11/12 mx-auto">
        <div className="flex items-center justify-between w-full md:gap-x-12">
          <a
            href="#inicio"
            className={`${fontSecondary.className} font-bold text-3xl text-white`}
          >
            SariamParty
          </a>

          <ul className="hidden xl:flex items-center justify-center gap-x-6">
            <li className="navbar-item-xl">
              <a href="#inicio">Inicio</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#eventos">Últimos eventos</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#servicios">Servicios</a>
            </li>
            <li className="navbar-item-xl">
              <a href="#opiniones">Opiniones</a>
            </li>
            <li className="button-primary rounded-2xl">
              <a href="#contacto">Contacto</a>
            </li>
          </ul>

          <IconButton
            type="button"
            variant="text"
            title={!isOpen ? 'Menu' : 'Cerrar'}
            aria-label="Menu"
            iconSize="text-4xl"
            icon={isOpen ? MdClose : MdMenu}
            styles={`xl:hidden transition-all duration-300 transform text-lime-500 hover:text-lime-400 ${
              isOpen ? 'rotate-90' : ''
            }`}
            onClick={handleMenu}
          />

          <div
            className={`fixed top-0 xl:hidden inset-0 h-screen flex justify-center px-10 py-20 mt-16 bg-gray-900/70 backdrop-filter backdrop-blur-md transition-all duration-500 ease-in-out ${
              isOpen ? 'menu-mobile--open' : 'menu-mobile--close'
            }`}
          >
            <ul className="flex flex-col items-center gap-y-6 w-full">
              <li className="navbar-item-sm w-full">
                <a href="#inicio" onClick={handleMobileMenu}>
                  Inicio
                </a>
              </li>
              <li className="navbar-item-sm w-full">
                <a href="#eventos" onClick={handleMobileMenu}>
                  Últimos eventos
                </a>
              </li>
              <li className="navbar-item-sm w-full">
                <a href="#servicios" onClick={handleMobileMenu}>
                  Servicios
                </a>
              </li>
              <li className="navbar-item-sm w-full">
                <a href="#opiniones" onClick={handleMobileMenu}>
                  Opiniones
                </a>
              </li>
              <li className="navbar-item-sm w-full">
                <a href="#contacto" onClick={handleMobileMenu}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
