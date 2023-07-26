import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroSection from '@/containers/HeroSection/HeroSection';

describe('HeroSection container', () => {
  describe('Rendering', () => {
    // Test if the component renders without crashing
    test('should render without crashing', () => {
      const { container } = render(<HeroSection />);
      expect(container).toBeDefined();
    });

    // Test if the correct title is rendered
    test('should render the correct title', () => {
      const { getByText } = render(<HeroSection />);
      const titleElement = getByText('Sariam Party');
      expect(titleElement).toBeInTheDocument();
    });

    // Test if the correct subtitle is rendered
    test('should render the correct subtitle', () => {
      const { getByText } = render(<HeroSection />);
      const subtitleElement = getByText('Eventos y Recepciones');
      expect(subtitleElement).toBeInTheDocument();
    });

    // Test if the Image component is rendered with the correct attributes
    test('should render the Image component with the correct attributes', () => {
      const { getByAltText } = render(<HeroSection />);
      const imageElement = getByAltText('Logo Sariam Party');
      expect(imageElement).toBeInTheDocument();
    });

    // Test if the "sizes" prop is passed to the Image component correctly
    test('should pass sizes prop to the Image component', () => {
      const { getByAltText } = render(<HeroSection />);
      const imageElement = getByAltText('Logo Sariam Party');
      expect(imageElement).toHaveAttribute(
        'sizes',
        '(max-width: 768px) 16rem, (max-width: 1280px) 18rem'
      );
    });

    // Test if the SliderComponent is rendered within the HeroSection
    test('should render the SliderComponent into the HeroSection', () => {
      const { getByRole } = render(<HeroSection />);
      const slider = getByRole('slider');
      expect(slider).toBeInTheDocument();
    });
  });

  describe('Snapshots', () => {
    // Test if the rendered output matches the previous snapshot
    test('should match snapshot', () => {
      const { container } = render(<HeroSection />);
      expect(container).toMatchSnapshot();
    });
  });
});
