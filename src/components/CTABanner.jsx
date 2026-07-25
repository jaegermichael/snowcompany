export default function CTABanner() {
  return (
    <section className="relative pt-28 pb-20 bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-navy/60"></div>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <button onClick={() => alert('Video coming soon!')} className="w-20 h-20 bg-ice hover:bg-ice-dark rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-ice/30 transition group">
          <i className="fas fa-play text-white text-2xl ml-1 group-hover:scale-110 transition"></i>
        </button>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
          Looking for the best<br />cold production equipment?
        </h2>
        <p className="text-white/50 mb-8 max-w-lg mx-auto">Trusted by restaurants, hotels, supermarkets and entrepreneurs across Zimbabwe.</p>
        <a href="#contact" className="inline-block bg-ice hover:bg-ice-dark text-white font-bold text-sm px-10 py-4 rounded-lg uppercase tracking-wide transition shadow-lg shadow-ice/20">
          Get A Quote
        </a>
      </div>
    </section>
  );
}