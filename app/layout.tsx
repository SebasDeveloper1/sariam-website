import '@/styles/globals.css';
import { fontPrimary } from '@/app/fonts';

export const metadata = {
  title: 'Sariam Party | Eventos y Recepciones',
  description:
    'Organización y logística de eventos sociales y empresariales, con decoración, comida, bebidas, luces y animación profesional.',
  keywords: [
    'Organización de eventos en Ubaté',
    'Luces y animación profesional',
    'Decoración, comida y bebidas',
  ],
  url: 'https://sariamparty.com',
  themeColor: '#65a30d',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontPrimary.className} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
