import { TypographyProps, TypographyVariants } from './Typography.model';

export default function Typography({
  variant = 'span_base',
  value = '',
  styles = '',
}: TypographyProps) {
  const typographyVariants: TypographyVariants = {
    h1: 'heading_1',
    h2: 'heading_2',
    h3: 'heading_3',
    h4: 'heading_4',
    h5: 'heading_5',
    h6: 'heading_6',
    p_xl: 'paragraph_xl',
    p_lg: 'paragraph_lg',
    p_base: 'paragraph_xl',
    p_sm: 'paragraph_xl',
    p_xs: 'paragraph_xl',
    span_xl: 'span_xl',
    span_lg: 'span_lg',
    span_base: 'span_base',
    span_sm: 'span_sm',
    span_xs: 'span_xs',
  };

  if (variant === 'h1') {
    return (
      <h1 className={`${typographyVariants[variant]} ${styles}`}>{value}</h1>
    );
  }
  if (variant === 'h2') {
    return (
      <h2 className={`${typographyVariants[variant]} ${styles}`}>{value}</h2>
    );
  }
  if (variant === 'h3') {
    return (
      <h3 className={`${typographyVariants[variant]} ${styles}`}>{value}</h3>
    );
  }
  if (variant === 'h4') {
    return (
      <h4 className={`${typographyVariants[variant]} ${styles}`}>{value}</h4>
    );
  }
  if (variant === 'h5') {
    return (
      <h5 className={`${typographyVariants[variant]} ${styles}`}>{value}</h5>
    );
  }
  if (variant === 'h6') {
    return (
      <h6 className={`${typographyVariants[variant]} ${styles}`}>{value}</h6>
    );
  }
  if (
    variant === 'p_xl' ||
    variant === 'p_lg' ||
    variant === 'p_base' ||
    variant === 'p_sm' ||
    variant === 'p_xs'
  ) {
    return (
      <p className={`${typographyVariants[variant]} ${styles}`}>{value}</p>
    );
  }
  if (
    variant === 'span_xl' ||
    variant === 'span_lg' ||
    variant === 'span_base' ||
    variant === 'span_sm' ||
    variant === 'span_xs'
  ) {
    return (
      <span className={`${typographyVariants[variant]} ${styles}`}>
        {value}
      </span>
    );
  }

  // Si no se cumple ninguna de las condiciones anteriores, devolver un elemento span vacío
  return <span></span>;
}
