// Import the required testing utilities from '@testing-library/react'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import the Footer component and socialMediaList from '@/containers/GlobalContainers/Footer' and '@/utils/socialMediaList' respectively
import Footer from '@/containers/GlobalContainers/Footer';
import { socialMediaList } from '@/utils/socialMediaList';

describe('Footer component', () => {
  // Describe the 'Rendering' section of the Footer component tests
  describe('Rendering', () => {
    // Test whether the Footer component renders correctly
    test('should render Footer component correctly', () => {
      render(<Footer />);
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });

    // Test whether the logo is rendered correctly with the expected alt text
    test('should render logo correctly', () => {
      const { getByRole } = render(<Footer />);
      const logo = getByRole('img');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('alt', 'Logo Sariam Party');
    });

    // Test whether the title is rendered correctly
    test('should render title correctly', () => {
      const { getByText } = render(<Footer />);
      const title = getByText('SariamParty');
      expect(title).toBeInTheDocument();
    });

    // Test whether the subtitle is rendered correctly
    test('should render subtitle correctly', () => {
      const { getByText } = render(<Footer />);
      const subtitle = getByText(
        '© 2023 Sariam Party, Todos los derechos reservados.'
      );
      expect(subtitle).toBeInTheDocument();
    });

    // Test whether the correct number of social media links is rendered
    test('should render social media links correctly', () => {
      const { container } = render(<Footer />);
      const socialMediaLinks = container.querySelectorAll('a');
      expect(socialMediaLinks.length).toBe(socialMediaList.length);
    });
  });

  // Describe the 'Snapshots' section of the Footer component tests
  describe('Snapshots', () => {
    // Test if the rendered output matches the previous snapshot
    test('should match snapshot', () => {
      const { container } = render(<Footer />);
      expect(container).toMatchSnapshot();
    });
  });
});
