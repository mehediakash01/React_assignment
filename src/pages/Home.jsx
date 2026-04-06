import Hero from '../components/sections/Hero';
import ServiceOverview from '../components/sections/ServiceOverview';
import Benefits from '../components/sections/Benefits';
import ClientLogos from '../components/sections/ClientLogos';
import Testimonials from '../components/sections/Testimonials';
import ContactCTA from '../components/sections/ContactCTA';

export default function Home() {
  return (
    <div>
      <Hero />
      <ServiceOverview />
      <Benefits />
      <ClientLogos />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
