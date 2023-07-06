'use client';
import { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { ModalProps } from './Modal.model';
import ReactPortal from '@/utils/ReactPortal/ReactPortal';
import { IconButton } from '@/components';

/**
 * Component that renders a  modal.
 * @param {ModalProps} props - Component properties.
 * @returns {JSX.Element | null} - Modal component or null if isOpen is false.
 */
export default function Modal({ children, isOpen, handleClose }: ModalProps) {
  const [isVisible, setIsVisible] = useState<boolean>(isOpen);

  const handleCloseAnimation = () => {
    setIsVisible(!isVisible);
    setTimeout(handleClose, 600);
  };
  useEffect(() => {
    const closeOnEscapeKeyDown = (e: KeyboardEvent) =>
      e.key === 'Escape' ? handleCloseAnimation() : null;
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () =>
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
  }, [handleCloseAnimation]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ReactPortal wrapperId="react-portal-modal-container">
      <div
        className={`fixed top-0 left-0 w-full h-full z-50 flex flex-col justify-center items-center bg-gray-900/60 backdrop-filter backdrop-blur-sm ${
          isVisible ? 'opacity-100 modal-blow-down' : 'opacity-0 modal-blow-up'
        }`}
      >
        <div className="overflow-hidden flex flex-col w-[92vw] lg:w-[90vw] h-[80vh] rounded-2xl shadow-lg bg-beams-cover bg-cover">
          <div className="flex justify-end items-center px-2 py-0.5 w-full h-fit">
            <IconButton
              type="button"
              variant="text"
              title="Cerrar"
              aria-label="Cerrar"
              iconSize="text-3xl"
              icon={MdClose}
              styles="text-gray-400 hover:text-gray-700"
              onClick={handleCloseAnimation}
            />
          </div>
          {children}
        </div>
      </div>
    </ReactPortal>
  );
}
