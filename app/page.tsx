import Header from '@/containers/GlobalContainers/Header';
import HeroSection from '@/containers/HeroSection/HeroSection';
import EventsSection from '@/containers/EventsSection/EventsSection';
import ServicesSection from '@/containers/ServicesSection/ServicesSection';
import OpinionSection from '@/containers/OpinionSection/OpinionSection';
import ContactSection from '@/containers/ContactSection/ContactSection';
import Footer from '@/containers/GlobalContainers/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <EventsSection />
        <ServicesSection />
        <OpinionSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
