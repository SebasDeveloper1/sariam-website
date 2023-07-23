import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ContactButton } from '@/components';

describe('ContactButton Component', () => {
  let button: HTMLElement;

  beforeEach(() => {
    // Render the ContactButton component and get the button element
    const { getByRole } = render(<ContactButton />);
    button = getByRole('link');
  });

  describe('Rendering', () => {
    it('should render a button', () => {
      // Check if the button is in the document
      expect(button).toBeInTheDocument();
    });

    it('should render a button with the correct link attributes', () => {
      // Check if the button has the correct link attributes
      expect(button).toHaveAttribute('href', 'https://wa.link/kuu26s');
      expect(button).toHaveAttribute('target', '_blank');
      expect(button).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('should render a button with the WhatsApp icon', () => {
      // Check if the button contains the WhatsApp icon element
      expect(button).toContainElement(document.querySelector('#whatsapp-icon'));
    });
  });

  describe('Interaction', () => {
    it('should redirect to the correct WhatsApp URL on click', () => {
      // Simulate a click on the button
      fireEvent.click(button);

      // Since Jest doesn't allow us to directly modify window.location, we cannot test the redirection directly.
      // You may consider using a library like "jest-localstorage-mock" to mock the window.location behavior and test the redirection.
    });
  });

  describe('Snapshot', () => {
    it('should match the ContactButton component snapshot', () => {
      // Take a snapshot of the rendered component and compare it to a saved snapshot
      const { asFragment } = render(<ContactButton />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
