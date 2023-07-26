import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ServiceCard } from '@/components';
import { mockServiceProps } from '@/containers/ServicesSection/servicesSection.model';

const mockService: mockServiceProps = {
  sys: { id: '2QIOIAuoSMwGRRvYqP7Tyy' },
  title: 'Logística y Servicio',
  cardDescription: 'Logística y personal de servicio.',
  generalDescription:
    'Experimenta un evento sin preocupaciones con nuestro servicio de logística y personal de atención. Desde la planificación hasta la ejecución, nuestro equipo profesional y altamente capacitado se encarga de cada detalle. Brindamos una experiencia de primera clase, atendiendo las necesidades de tus invitados con excelencia.',

  serviceDetails: [
    'Coordinador logístico.',
    'Meseros.',
    'Bartenders.',
    'Cocineros.',
  ],

  media: {
    title: 'logistic1',

    description: 'Video por Nacho Producciones.',

    url: 'https://videos.ctfassets.net/h5onrwafbbzu/1R92JNkSlUpBDdmyHMlwRF/a6d50e63aecc95d0583a52fc1c852487/food.mp4',
  },

  icon: <div id="mock-icon">Icon</div>,

  bgCard: 'bg-thumbnail-yellow',
};

let card: HTMLElement;

describe('ServiceCard component', () => {
  // Before running the tests, render the ServiceCard component with the mockService data
  beforeAll(() => {
    const { getByRole } = render(<ServiceCard data={mockService} />);
    card = getByRole('article');
  });

  describe('Rendering', () => {
    // Test that the ServiceCard component is rendered
    test('should render ServiceCard component', () => {
      expect(card).toBeInTheDocument();
    });

    // Test that ServiceCard's title is rendered correctly
    test("Should render ServiceCard's title", () => {
      expect(card.querySelector('h3')).toHaveTextContent(mockService.title);
    });

    // Test that ServiceCard's description is rendered correctly
    test("Should render ServiceCard's description", () => {
      expect(card.querySelector('p')).toHaveTextContent(
        mockService.cardDescription
      );
    });
  });

  describe('Snapshot', () => {
    // Test that the rendered ServiceCard matches the snapshot
    test('matches snapshot', () => {
      const { asFragment } = render(<ServiceCard data={mockService} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
