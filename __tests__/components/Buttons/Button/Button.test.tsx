import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '@/components';
import { MockIcon } from '@/__mocks__/MockIcon';
import { MockFunction } from '@/__mocks__/MockFunctions';

describe('Button Component', () => {
  // Rendering Tests
  describe('Rendering', () => {
    it('should render a button with default props', () => {
      const { getByRole } = render(<Button />);
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button-primary');
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent('');
      expect(document.querySelector('.text-3xl')).toBeNull();
    });

    it('should render a button with a custom variant and value', () => {
      const { getByRole } = render(
        <Button variant="secondary" value="Custom value" />
      );
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('button-secondary');
      expect(button).not.toBeDisabled();
      expect(button).toHaveTextContent('Custom value');
    });

    it('should render a button with custom styles', () => {
      const { getByRole } = render(<Button styles="bg-red-500" />);
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-red-500');
    });

    it('should render a button with a startIcon', () => {
      const { getByRole } = render(<Button startIcon={MockIcon} />);
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toContainElement(document.querySelector('#mock-icon'));
    });

    it('should render a button with an endIcon', () => {
      const { getByRole } = render(<Button endIcon={MockIcon} />);
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toContainElement(document.querySelector('#mock-icon'));
    });

    it('should render a disabled button', () => {
      const { getByRole } = render(<Button disabled />);
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      expect(button).toBeDisabled();
    });
  });

  // Interaction Tests
  describe('Interaction', () => {
    test('should call the custom onClick function only once', () => {
      const { getByRole } = render(<Button onClick={MockFunction} />);
      const button = getByRole('button');
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(MockFunction).toHaveBeenCalledTimes(1);
    });
  });

  // Snapshot Test
  describe('Snapshot', () => {
    test('should match the Button component snapshot', () => {
      const { asFragment } = render(
        <Button variant="secondary" value="Custom value" />
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });

  // Additional Props Test
  describe('Additional Props', () => {
    test('should pass additional props to the button', () => {
      const { getByTestId } = render(<Button data-testid="test-button" />);
      const button = getByTestId('test-button');
      expect(button).toBeInTheDocument();
    });
  });
});
