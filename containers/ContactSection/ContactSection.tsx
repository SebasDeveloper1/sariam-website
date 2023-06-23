import { createElement } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { socialMediaList } from './socialMediaList';
export default function ContactSection(): JSX.Element {
  return (
    <section id="contacto" className="w-full bg-gray-950">
      <section className="relative overflow-hidden w-full h-full py-24">
        <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
          <svg
            viewBox="0 0 558 558"
            width={558}
            height={558}
            fill="none"
            aria-hidden="true"
            className="animate-spin-slower"
          >
            <defs>
              <linearGradient
                id=":R1hm:"
                x1={79}
                y1={16}
                x2={105}
                y2={237}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#bef264" />
                <stop offset={1} stopColor="#bef264" stopOpacity={0} />
              </linearGradient>
            </defs>
            <path
              opacity=".2"
              d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
              stroke="#d9f99d"
            />
            <path
              d="M1 279C1 125.465 125.465 1 279 1"
              stroke="url(#:R1hm:)"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="relative grid grid-cols-2 justify-center items-center gap-16 w-11/12 mx-auto">
          <div className="col-span-2 lg:col-span-1 flex flex-col justify-center items-center gap-8">
            <h2 className="heading_2 md:text-6xl text-center text-white">
              Descubre como podemos ayudarte
            </h2>
            <p className="paragraph_xl max-w-prose mb-4 text-center text-gray-300">
              Contáctanos para saber más sobre nuestros servicios y cómo podemos
              hacer de tu evento un momento inolvidable.
            </p>
            <a
              href="wa.link/kuu26s"
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary text-xl px-8 py-3"
            >
              <FaWhatsapp className="mr-2 text-3xl" />
              Contactar ahora
            </a>
            <div className="flex flex-col justify-center items-center gap-5 w-11/12 mx-auto">
              <span className="span_lg font-medium text-center text-gray-500">
                Siguenos en
              </span>
              <ul className="flex justify-center items-center gap-8 list-none">
                {socialMediaList.map((item) => (
                  <li key={`social-media-${item.title}`}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.title}
                      className="text-4xl text-gray-700 hover:text-gray-50"
                    >
                      {createElement(item.icon)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d993.1687700321761!2d-73.80937913051297!3d5.313285499666578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e403906db01a7c9%3A0x918d7da385be1927!2sSariam%20Party!5e0!3m2!1ses!2sco!4v1687474702984!5m2!1ses!2sco"
            className="col-span-2 lg:col-span-1 w-full aspect-video rounded-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </section>
  );
}
