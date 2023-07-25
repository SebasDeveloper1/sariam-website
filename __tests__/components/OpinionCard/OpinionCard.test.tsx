import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { OpinionCard } from '@/components';
import { MockOpinion } from '@/__mocks__/MockOpinionObject';

// Test Suite for the OpinionCard component
describe('OpinionCard component', () => {
  // Test Suite for rendering behavior
  describe('Rendering', () => {
    // Test: OpinionCard component should render successfully
    it('should render OpinionCard component', () => {
      const { getByRole } = render(<OpinionCard opinionData={MockOpinion} />);
      const card = getByRole('article');
      expect(card).toBeInTheDocument();
    });

    // Test: OpinionCard component should render with the correct author name
    it('should render OpinionCard component with author name', () => {
      const { getByRole } = render(<OpinionCard opinionData={MockOpinion} />);
      const author = getByRole('heading', { name: 'John Doe' });
      expect(author).toBeInTheDocument();
      expect(author).toHaveTextContent('John Doe');
    });

    // Test: OpinionCard component should render with the correct author role
    it('should render OpinionCard component with author role', () => {
      const { getByText } = render(<OpinionCard opinionData={MockOpinion} />);
      const role = getByText('CEO');
      expect(role).toBeInTheDocument();
    });

    // Test: OpinionCard component should render with the correct opinion content
    it('should render OpinionCard component with opinion content', () => {
      const { getByText } = render(<OpinionCard opinionData={MockOpinion} />);
      const content = getByText('This is a great product!');
      expect(content).toBeInTheDocument();
    });

    // Test: OpinionCard component should render with the correct author photo
    it('should render OpinionCard component with author photo', () => {
      const { getByAltText } = render(
        <OpinionCard opinionData={MockOpinion} />
      );
      const photo = getByAltText('John Doe photo');
      expect(photo).toBeInTheDocument();
      expect(photo).toHaveAttribute('src');
    });
  });

  // Test Suite for Snapshot testing
  describe('Snapshot', () => {
    // Test: OpinionCard component snapshot should match the saved snapshot
    test('should match the OpinionCard component snapshot', () => {
      const { asFragment } = render(<OpinionCard opinionData={MockOpinion} />);
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
