export default function Hero() {
  return (
    <section id="home" className="relative hero-grid min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 lg:block hidden">
        <div className="absolute right-0 top-0 w-[55%] h-full">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1400&q=80"
            alt="Commercial ice cream equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/40 via-navy/60 to-navy"></div>
        </div>
      </div>
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80"
          alt="Ice equipment"
          className="w-full h-full object-cover opacity-25"
        />
      </div>

      <div className="absolute top-0 left-0 w-1.5 h-full bg-ice rounded-r"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full py-20 lg:py-0">
        <div className="max-w-xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 mb-6 rounded-full">
            <span className="w-1.5 h-1.5 bg-ice rounded-full"></span>
            <span className="text-ice text-xs font-bold tracking-widest uppercase">100% Trusted & Reliable</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            Commercial Ice<br />& Ice Cream<br />
            <span className="text-ice">Equipment</span>
          </h1>

          <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
            From compact ice makers to industrial-scale systems and professional ice cream machines &mdash; reliable equipment for businesses throughout Zimbabwe.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+263771234567"
              className="inline-flex items-center gap-3 bg-ice hover:bg-ice-dark text-white font-bold px-6 py-3.5 rounded-lg transition shadow-lg shadow-ice/20"
            >
              <span className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center">
                <i className="fas fa-phone text-sm"></i>
              </span>
              <span>
                <span className="block text-[10px] font-medium opacity-80 uppercase tracking-wider">Call Us Now</span>
                <span className="text-sm">+263 77 123 4567</span>
              </span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-ice hover:text-ice text-white font-bold px-6 py-3.5 rounded-lg transition text-sm uppercase tracking-wide"
            >
              View Products <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}