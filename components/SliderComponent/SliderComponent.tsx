const eventsList: string[] = [
  'Eventos empresariales',
  '15 Años',
  'Matrimonios',
  'Bautizos',
  'Cumpleaños',
  'Fotografía',
  'Luces y Sonido',
  'Animación y Dj',
  'Eventos empresariales',
  '15 Años',
  'Matrimonios',
  'Bautizos',
  'Cumpleaños',
  'Fotografía',
  'Luces y Sonido',
  'Animación y Dj',
];
export default function SliderComponent(): JSX.Element {
  return (
    <div className="flex items-center justify-center w-full py-2 bg-lime-600">
      <div className="w-[300%] h-12 overflow-hidden relative">
        <div className="w-[300%] flex items-center h-12 justify-around absolute left-0 animate gap-4 animate-carousel">
          {eventsList.map((event, index) => (
            <div key={`slider-event-${index}-1`}>
              <span
                className="span_lg block w-fit px-6 py-2 rounded-2xl text-gray-50 whitespace-nowrap bg-lime-900/50"
                style={{ marginRight: '1rem' }}
              >
                {event}
              </span>
            </div>
          ))}
          {eventsList.map((event, index) => (
            <div key={`slider-event-${index}-2`}>
              <span
                className="span_lg block w-fit px-6 py-2 rounded-2xl text-gray-50 whitespace-nowrap bg-lime-900/50"
                style={{ marginRight: '1rem' }}
              >
                {event}
              </span>
            </div>
          ))}
          {eventsList.map((event, index) => (
            <div key={`slider-event-${index}-3`}>
              <span
                className="span_lg block w-fit px-6 py-2 rounded-2xl text-gray-50 whitespace-nowrap bg-lime-900/50"
                style={{ marginRight: '1rem' }}
              >
                {event}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
