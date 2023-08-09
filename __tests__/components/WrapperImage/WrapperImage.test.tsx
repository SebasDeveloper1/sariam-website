import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { WrapperImage } from '@/components';
import {
  AspectRatio,
  fitOptions,
} from '@/components/WrapperImage/WrapperImage.model';
import defaultImage from '@/public/sariam.png';

const dummyImageProps = {
  src: defaultImage,
  alt: 'test image',
  width: 1500,
  aspectRatio: AspectRatio['16:9'],
  fit: fitOptions.fill,
};

describe('WrapperImage component', () => {
  describe('Rendering', () => {
    test('should render the component', () => {
      // Test to check if the component is rendered with the provided props.
      render(<WrapperImage {...dummyImageProps} />);

      const img = screen.getByAltText('test image');
      expect(img).toBeInTheDocument();
    });

    test('should throw an error for an invalid aspect ratio', () => {
      // Test to check if an error is thrown for an invalid aspect ratio.
      const invalidProps = {
        ...dummyImageProps,
        aspectRatio: 'invalid' as AspectRatio,
      };
      expect(() => render(<WrapperImage {...invalidProps} />)).toThrowError(
        "The aspect ratio format should be 'width:height'"
      );
    });

    test('should throw an error for non-numeric width and height in aspect ratio', () => {
      // Test to check if an error is thrown for non-numeric width and height in aspect ratio.
      const invalidProps = {
        ...dummyImageProps,
        aspectRatio: 'invalid:9' as AspectRatio,
      };
      expect(() => render(<WrapperImage {...invalidProps} />)).toThrowError(
        'Width and height values must be valid numbers'
      );
    });

    test('should use the provided fit option in ImageLoader', () => {
      // Test to check if the ImageLoader is using the provided fit option.
      const { getByAltText } = render(<WrapperImage {...dummyImageProps} />);

      const imageElement = getByAltText('test image');
      const expectedImageSrc = '/img.jpg?w=3840&h=2160&fit=fill';
      expect(imageElement.getAttribute('src')).toBe(expectedImageSrc);
    });
  });
});
