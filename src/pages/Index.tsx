import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CoordsSection from '@/components/CoordsSection';
import EventsSection from '@/components/EventsSection';
import ClubsSection from '@/components/ClubsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main>
        <HeroSection />
        <ClubsSection />
        <CoordsSection />
        <EventsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
