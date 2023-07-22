import { FaWhatsapp } from 'react-icons/fa';

export default function ContactButton(): JSX.Element {
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
