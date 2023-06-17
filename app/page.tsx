import Header from '@/containers/GlobalContainers/Header';
import HeroSection from '@/containers/HeroSection/HeroSection';
import BannerSection from '@/containers/BannerSection/BannerSection';
import EventsSection from '@/containers/EventsSection/EventsSection';

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <BannerSection />
        <EventsSection />
      </main>
    </>
  );
}
