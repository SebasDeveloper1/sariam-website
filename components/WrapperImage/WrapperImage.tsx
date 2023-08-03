import Image, { ImageLoaderProps } from 'next/image';
import { WrapperImageProps, fitOptions } from './WrapperImage.model';

export default function WrapperImage({
  src,
  width,
  aspectRatio,
  fit = 'scale' as fitOptions,
  alt,
}: WrapperImageProps): JSX.Element {
  const getAspectRatioHeight = (aspectRatio: string, width: number): number => {
    const ratioParts = aspectRatio.split(':');

    if (ratioParts.length !== 2) {
      throw new Error("The aspect ratio format should be 'width:height'");
    }

    const widthRatio = parseFloat(ratioParts[0]);
    const heightRatio = parseFloat(ratioParts[1]);

    if (isNaN(widthRatio) || isNaN(heightRatio)) {
      throw new Error('Width and height values must be valid numbers');
    }

    return (width * heightRatio) / widthRatio;
  };

  const height = getAspectRatioHeight(aspectRatio, width);

  const ImageLoader = ({ src, width }: ImageLoaderProps): string => {
    const loaderHeight = getAspectRatioHeight(aspectRatio, width);
    return `${src}?w=${width}&h=${loaderHeight}&fit=${fit}`;
  };

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      loader={ImageLoader}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    />
  );
}
