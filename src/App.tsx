import { QuoteProvider } from './lib/quote';
import { useReveal } from './hooks/useReveal';
import Header from './components/Header';
import Hero from './components/Hero';
import IndustryBand from './components/IndustryBand';
import CapacityFinder from './components/CapacityFinder';
import IceRange from './components/IceRange';
import IceCream from './components/IceCream';
import Startups from './components/Startups';
import Support from './components/Support';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';

export default function App() {
  useReveal();
  return (
    <QuoteProvider>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <IndustryBand />
        <CapacityFinder />
        <IceRange />
        <IceCream />
        <Startups />
        <Support />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </QuoteProvider>
  );
}
