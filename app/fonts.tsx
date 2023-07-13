import { Poppins, Courgette, Montserrat } from 'next/font/google';

export const fontPrimary = Montserrat({
  style: 'normal',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const fontSecondary = Courgette({ subsets: ['latin'], weight: '400' });
