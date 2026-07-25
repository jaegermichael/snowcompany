export default function Hero() {
  return (
    <section id="home" className="relative hero-grid min-h-[550px] lg:min-h-[650px] flex items-center overflow-hidden">
      <div className="absolute inset-0 lg:block hidden">
        <div className="absolute right-0 top-0 w-[50%] h-full rounded-l-[120px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1400&q=80"
            alt="Commercial ice cream equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/40 via-navy/60 to-navy/80"></div>
        </div>
      </div>
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80"
          alt="Ice equipment"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent lg:max-w-[50%]"></div>

      <div className="absolute top-0 left-0 w-1.5 h-full bg-ice rounded-r"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full py-16 lg:py-0">
        <div className="max-w-xl lg:max-w-lg animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
            Commercial Ice Machines<br />& Ice Cream<br />
            <span className="text-ice">Equipment Supplier</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 mb-6 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-ice rounded-full animate-pulse"></span>
            <span className="text-ice text-xs font-bold tracking-widest uppercase">Leading Supplier in Zimbabwe Since 2015</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-white/70 text-sm mb-6">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-check text-ice"></i>
              Nationwide Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-check text-ice"></i>
              24/7 Support
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-check text-ice"></i>
              Genuine Parts
            </span>
          </div>

          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-xl">
            From compact ice makers to industrial-scale systems and professional ice cream machines &mdash; reliable equipment for businesses throughout Zimbabwe. We partner with global manufacturers to bring you proven technology backed by local expertise and rapid response service.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="tel:+263776146858"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-ice hover:bg-ice-dark text-white font-bold px-7 py-3.5 rounded-xl transition shadow-lg shadow-ice/30 group"
            >
              <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fas fa-phone text-sm"></i>
              </span>
              <div className="text-left">
                <span className="block text-[10px] font-medium opacity-90 uppercase tracking-wider">Call Us Now</span>
                <span className="text-sm">+263 77 614 6858</span>
              </div>
            </a>
            <a
              href="#products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-ice hover:text-ice hover:bg-white/5 text-white font-bold px-7 py-3.5 rounded-xl transition text-sm uppercase tracking-wide"
            >
              View Products <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <i className="fas fa-shield-alt text-ice"></i>
              <span>5-Year Warranty Available</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-truck text-ice"></i>
              <span>Free Site Assessment</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fas fa-tools text-ice"></i>
              <span>Installation & Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}