import { StaticImageData } from 'next/image';

export enum AspectRatio {
  '1:1' = '1:1',
  '4:3' = '4:3',
  '16:9' = '16:9',
  '2:1' = '2:1',
  '3:2' = '3:2',
}

export enum fitOptions {
  'pad' = 'pad',
  'fill' = 'fill',
  'crop' = 'crop',
  'scale' = 'scale',
  'thumb' = 'thumb',
}

export interface WrapperImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height?: never;
  aspectRatio: AspectRatio;
  fit?: fitOptions;
  priority?: boolean;
  loading?: 'eager' | 'lazy' | undefined;
  sizes?: string;
}
