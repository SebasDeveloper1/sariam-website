'use client';
import { useState, MouseEvent } from 'react';
import Image from 'next/image';
import { MdMenu, MdClose } from 'react-icons/md';
import { IconButton } from '@/components/index';
import Logo from '@/public/next.svg';

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-20 fixed top-0 flex items-center w-full h-16 px-4 border-b border-zinc-600/[0.05] backdrop-blur-md">
      <nav className="relative flex justify-between w-full">
        <div className="flex items-center justify-between w-full md:gap-x-12">
          <a href="#">
            <Image src={Logo} alt="Logo Sarian Party" className="w-36" />
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
            styles={`xl:hidden transition-all duration-300 transform text-lime-500 hover:text-lime-600 ${
              isOpen ? 'rotate-90' : ''
            }`}
            handleOnClick={handleMenu}
          />

          {isOpen ? (
            <div className="fixed xl:hidden inset-0 px-10 py-20 mt-16 backdrop-filter backdrop-blur-sm">
              <ul className="flex flex-col items-center gap-y-6 w-full">
                <li className="navbar-item-sm">
                  <a href="#">Inicio</a>
                </li>
                <li className="navbar-item-sm">
                  <a href="#">Últimos eventos</a>
                </li>
                <li className="navbar-item-sm">
                  <a href="#">Servicios</a>
                </li>
                <li className="navbar-item-sm">
                  <a href="#">Opiniones</a>
                </li>
                <li className="navbar-item-sm">
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
