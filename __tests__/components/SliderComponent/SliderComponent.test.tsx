import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SliderComponent } from '@/components';

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

describe('SliderComponent component', () => {
  describe('Rendering', () => {
    // Test that the component renders without errors
    test('Should render component', () => {
      const { getByRole } = render(<SliderComponent />);
      const slider = getByRole('slider');
      expect(slider).toBeInTheDocument();
    });

    // Test that the component displays three carousels with events, each event in a rounded rectangle with a lime green and gray color scheme
    test('Should show carousel container', () => {
      const { container } = render(<SliderComponent />);
      const carousel = container.querySelector('.animate-carousel');
      expect(carousel).toBeInTheDocument();
    });

    test('Should show carousel items', () => {
      const { container } = render(<SliderComponent />);
      const carouselItems = container.querySelectorAll('.span_lg');
      expect(carouselItems.length).toBe(eventsList.length * 3);
      carouselItems.forEach((carouselItem) => {
        expect(carouselItem).toHaveClass('bg-lime-900/50');
        expect(carouselItem).toHaveClass('text-gray-50');
        expect(carouselItem).toHaveClass('rounded-2xl');
      });
    });
  });

  describe('Snapshots', () => {
    // Test that the rendered SliderComponent matches the snapshot
    test('should match the SliderComponent component snapshot', () => {
      const { getByRole } = render(<SliderComponent />);
      const slider = getByRole('slider');
      expect(slider).toMatchSnapshot();
    });
  });
});
