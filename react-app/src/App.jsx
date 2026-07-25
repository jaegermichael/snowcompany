import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import About from './components/About';
import Products from './components/Products';
import QuickQuote from './components/QuickQuote';
import CTABanner from './components/CTABanner';
import IceMachines from './components/IceMachines';
import IceCream from './components/IceCream';
import Industries from './components/Industries';
import EntrepreneurCTA from './components/EntrepreneurCTA';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Steps from './components/Steps';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-white text-navy antialiased overflow-x-hidden">
      <Header />
      <Hero />
      <FeatureCards />
      <About />
      <Products />
      <QuickQuote />
      <CTABanner />
      <IceMachines />
      <IceCream />
      <Industries />
      <EntrepreneurCTA />
      <Services />
      <Testimonials />
      <Steps />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;