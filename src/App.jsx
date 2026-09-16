import MotionEffects from './components/MotionEffects';
import IceCream from './components/IceCream';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import About from './components/About';
import Products from './components/Products';
import QuickQuote from './components/QuickQuote';
import CTABanner from './components/CTABanner';
import IceMachines from './components/IceMachines';
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
  const openQuote = (title) => {
    const product = document.getElementById('contactProduct');
    const capacity = title.match(/^(60|80|100|120)kg/);
    const creamProducts = { 'Soft Serve Ice Cream Machines': 'Soft Serve Ice Cream Machine', 'Hard Ice Cream Production': 'Hard Ice Cream Production Machine', 'Countertop Ice Cream Makers': 'Countertop Ice Cream Maker', 'Commercial Gelato Machines': 'Commercial Gelato Machine', 'Multi-Flavor Machines': 'Multi-Flavor Ice Cream Machine' };
    if (product) product.value = capacity ? capacity[1] + 'kg Ice Machine' : (creamProducts[title] || '');
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    product?.focus({ preventScroll: true });
  };
  return (
    <div className="bg-white text-navy antialiased overflow-x-hidden">
      <MotionEffects /><Header />
      <a className="skip-link" href="#main-content">Skip to content</a><main id="main-content"><Hero />
      <FeatureCards />
      <About />
      <Products />
      <QuickQuote />
      <CTABanner />
      <IceMachines onOpenQuote={openQuote} /><IceCream onOpenQuote={openQuote} />
      <Industries />
      <EntrepreneurCTA />
      <Services />
      <Testimonials />
      <Steps />
      <FAQ />
      <Contact />
      </main><Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
