// Import necessary functions and components for testing
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Button } from '@/components';

// Mock the startIcon and endIcon components for testing
const MockIcon = () => <div id="mock-icon">Icon</div>;

const MockFunction = jest.fn();

describe('Render button component', () => {
  // Tests that the button renders with default props
  it('should render a button with default props', () => {
    const { getByRole } = render(<Button />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button-primary');
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent('');
    expect(document.querySelector('.text-3xl')).toBeNull();
  });

  // Tests that the button renders with a custom variant
  it('should render a button with a custom variant', () => {
    const { getByRole } = render(
      <Button variant="secondary" value="Custom value" />
    );
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button-secondary');
    expect(button).not.toBeDisabled();
    expect(button).toHaveTextContent('Custom value');
  });

  // Tests that the button renders with custom styles
  it('should render a button with custom styles', () => {
    const { getByRole } = render(<Button styles="bg-red-500" />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-red-500');
  });

  // Tests that the button renders with a startIcon
  it('should render a button with a startIcon', () => {
    const { getByRole } = render(<Button startIcon={MockIcon} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toContainElement(document.querySelector('#mock-icon'));
  });

  // Tests that the button renders with an endIcon
  it('should render a button with an endIcon', () => {
    const { getByRole } = render(<Button endIcon={MockIcon} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toContainElement(document.querySelector('#mock-icon'));
  });

  // Tests that the button renders as disabled
  it('should render a disabled button', () => {
    const { getByRole } = render(<Button disabled />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  // Tests that the custom onClick function is called only once
  it('should render a button with a custom onClick function only once', () => {
    const { getByRole } = render(<Button onClick={MockFunction} />);
    const button = getByRole('button');
    expect(button).toBeInTheDocument();
    button.click();
    expect(MockFunction).toHaveBeenCalledTimes(1);
  });

  // Tests that additional props are passed to the button
  test('Should pass additional props to the button', () => {
    const { getByTestId } = render(<Button data-testid="test-button" />);
    const button = getByTestId('test-button');
    expect(button).toBeInTheDocument();
  });

  // Tests that the Button component matches a snapshot
  test('Button component matches snapshot', () => {
    const { asFragment } = render(
      <Button variant="secondary" value="Custom value" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
