import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { IconButton } from '@/components';
import { MockIcon } from '@/__mocks__/MockIcon';
import { MockFunction } from '@/__mocks__/MockFunctions';

describe('IconButton component', () => {
  describe('Rendering', () => {
    it('should render a button with default props', () => {
      const { getByRole } = render(<IconButton />);
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button-primary');
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent('');
      expect(document.querySelector('.text-3xl')).toBeNull();
    });

    it('should render a button with a custom variant', () => {
      const { getByRole } = render(<IconButton variant="secondary" />);
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button-secondary');
      expect(button).not.toBeDisabled();
    });

    it('should render a button with custom styles', () => {
      const { getByRole } = render(<IconButton styles="bg-red-500" />);
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-red-500');
    });

    it('should render a button with an icon', () => {
      const { getByRole } = render(<IconButton icon={MockIcon} />);
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toContainElement(document.querySelector('#mock-icon'));
    });

    it('should render a disabled button', () => {
      const { getByRole } = render(<IconButton disabled />);
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });

    it('should pass additional props to the button', () => {
      const { getByTestId } = render(<IconButton data-testid="test-button" />);
      const button = getByTestId('test-button');

      expect(button).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('should call the custom onClick function once', () => {
      const { getByRole } = render(<IconButton onClick={MockFunction} />);
      const button = getByRole('button');

      expect(button).toBeInTheDocument();
      fireEvent.click(button);

      expect(MockFunction).toHaveBeenCalledTimes(1);
    });
  });

  describe('Snapshot', () => {
    it('should match the IconButton component snapshot', () => {
      const { asFragment } = render(<IconButton variant="secondary" />);

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
