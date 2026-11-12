import ContactSection from './components/ContactSection';
import FaqSection from './components/FaqSection';
import FinalCta from './components/FinalCta';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PortfolioSection from './components/PortfolioSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import TrustStats from './components/TrustStats';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
        <ProcessSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCta />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
