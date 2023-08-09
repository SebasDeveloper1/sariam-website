// Import the required testing utilities from '@testing-library/react'
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// Import the Header component to be tested
import Header from '@/containers/GlobalContainers/Header';

describe('Header container', () => {
  // Describe the 'Rendering' section of the Header component tests
  describe('Rendering', () => {
    // Test whether the component renders successfully
    test('should render the component successfully', () => {
      const MockTimer = setTimeout(() => {
        const { container } = render(<Header />);
        expect(container).toBeDefined();
      }, 2000);

      clearTimeout(MockTimer);
    });

    // Test whether the title link is displayed correctly
    test('should show the title link successfully', () => {
      const MockTimer = setTimeout(() => {
        const { getByText } = render(<Header />);
        const link = getByText('SariamParty');
        expect(link).toBeInTheDocument();
      }, 2000);

      clearTimeout(MockTimer);
    });

    // Test whether the menu button is displayed correctly
    test('should show the menu button successfully', () => {
      const MockTimer = setTimeout(() => {
        render(<Header />);
        const menuButton = screen.getByTitle('Menu');
        expect(menuButton).toBeInTheDocument();
      }, 2000);

      clearTimeout(MockTimer);
    });

    // Test whether the state of the menu button changes on click
    test('should change the state of the menu button', () => {
      const MockTimer = setTimeout(() => {
        // Arrange
        render(<Header />);
        const menuButton = screen.getByRole('button');

        // Act & Assert
        fireEvent.click(menuButton);
        expect(screen.queryByTitle('Cerrar')).toBeInTheDocument();
        fireEvent.click(menuButton);
        expect(screen.queryByTitle('Menu')).toBeInTheDocument();
      }, 2000);

      clearTimeout(MockTimer);
    });

    // Test whether the menu opens and closes on clicking the menu button
    test('opens and closes menu when clicking on the menu button', () => {
      const MockTimer = setTimeout(() => {
        render(<Header />);

        // Get the menu button
        const menuButton = screen.getByTitle('Menu');

        // Initially, the menu should be closed
        expect(
          document.querySelector('.menu-mobile--close')
        ).toBeInTheDocument();
        // Click the menu button to open the menu
        fireEvent.click(menuButton);

        // After clicking, the menu should be open
        expect(
          document.querySelector('.menu-mobile--open')
        ).toBeInTheDocument();

        // Click the menu button again to close the menu
        fireEvent.click(menuButton);

        // After clicking again, the menu should be closed
        expect(
          document.querySelector('.menu-mobile--close')
        ).toBeInTheDocument();
      });
      clearTimeout(MockTimer);
    });

    // Test whether the menu items are rendered successfully
    test('should render the menu items successfully', () => {
      const MockTimer = setTimeout(() => {
        render(<Header />);
        const menuItemsXl = document.querySelectorAll('.navbar-item-xl');
        expect(menuItemsXl).toBeTruthy();
        const menuItemsSm = document.querySelectorAll('.navbar-item-sm');
        expect(menuItemsSm).toBeTruthy();
      }, 2000);
      clearTimeout(MockTimer);
    });
  });

  describe('Snapshots', () => {
    const MockTimer = setTimeout(() => {
      // Test if the rendered output matches the previous snapshot
      test('should match snapshot', () => {
        const { container } = render(<Header />);
        expect(container).toMatchSnapshot();
      });
    }, 2000);

    clearTimeout(MockTimer);
  });
});
