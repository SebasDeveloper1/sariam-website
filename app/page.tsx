import Header from '@/containers/GlobalContainers/Header';
import HeroSection from '@/containers/HeroSection/HeroSection';
import EventsSection from '@/containers/EventsSection/EventsSection';
import ServicesSection from '@/containers/ServicesSection/ServicesSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <EventsSection />
        <ServicesSection />
      </main>
    </>
  );
}
