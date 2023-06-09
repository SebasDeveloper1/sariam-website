export interface TypographyProps {
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p_xl'
    | 'p_lg'
    | 'p_base'
    | 'p_sm'
    | 'p_xs'
    | 'span_xl'
    | 'span_lg'
    | 'span_base'
    | 'span_sm'
    | 'span_xs';
  value: string;
  styles?: string;
}

export type TypographyVariants = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  p_xl: string;
  p_lg: string;
  p_base: string;
  p_sm: string;
  p_xs: string;
  span_xl: string;
  span_lg: string;
  span_base: string;
  span_sm: string;
  span_xs: string;
};
