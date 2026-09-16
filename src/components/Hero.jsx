export default function Hero() {
  return (
    <section id="home" className="showroom-hero">
      <div className="hero-copy">
        <p className="eyebrow"><span /> Cold production. Local expertise.</p>
        <h1>Big ideas.<br />Perfectly <em>chilled.</em></h1>
        <p className="hero-description">Commercial ice machines and ice cream equipment for your next chapter. Supplied, installed, and supported across Zimbabwe.</p>
        <div className="hero-actions">
          <a href="#ice-machines" className="primary-link">Find your machine <span aria-hidden="true">↗</span></a>
          <a href="#contact" className="text-link">Talk to a specialist <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-assurance"><span>Nationwide delivery</span><span>Installation & training</span><span>Genuine spare parts</span></div>
      </div>
      <div className="hero-showcase">
        <div className="showcase-label"><span>Built for business</span><span>01 / ICE PRODUCTION</span></div>
        <span className="showcase-word" aria-hidden="true">ICE.</span>
        <img src="/images/60 kgs per 24 hours.jpeg" alt="60kg commercial stainless steel ice-making machine" className="showcase-machine" fetchPriority="high" />
        <div className="showcase-caption"><div><span className="eyebrow">Commercial series</span><h2>Small footprint.<br />Serious output.</h2></div><a href="#ice-machines" aria-label="Explore commercial ice machines">↗</a></div>
        <div className="capacity-tag"><strong>60<span>kg</span></strong><span>Production / 24 hours</span></div>
      </div>
    </section>
  );
}
