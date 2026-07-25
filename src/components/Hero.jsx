export default function Hero() {
  return (
    <section id="home" className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Desktop image */}
      <div className="absolute inset-0 lg:block hidden">
        <div className="absolute right-0 top-0 w-[52%] h-full rounded-l-[140px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1400&q=80"
            alt="Commercial ice cream equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-navy/30 via-navy/50 to-navy/80"></div>
        </div>
      </div>

      {/* Mobile image */}
      <div className="absolute inset-0 lg:hidden">
        <img
          src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80"
          alt="Ice equipment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/40"></div>
      </div>

      {/* Smooth gradient overlay — covers left side only on desktop */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent lg:max-w-[55%]"></div>

      {/* Ice accent bar */}
      <div className="absolute top-0 left-0 w-1.5 h-full bg-ice rounded-r"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 w-full py-20 lg:py-0">
        <div className="lg:w-[48%]">
          {/* Tagline badge */}
          <div className="opacity-0 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2 mb-8 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 bg-ice rounded-full animate-pulse"></span>
              <span className="text-ice text-xs font-bold tracking-widest uppercase">Leading Supplier in Zimbabwe Since 2015</span>
            </div>
          </div>

          {/* Headline */}
          <div className="opacity-0 animate-slide-up-delay-1">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.08] mb-6">
              Commercial Ice Machines<br />& Ice Cream<br />
              <span className="text-ice">Equipment Supplier</span>
            </h1>
          </div>

          {/* Trust bullets */}
          <div className="opacity-0 animate-slide-up-delay-2">
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
          </div>

          {/* Description */}
          <div className="opacity-0 animate-slide-up-delay-3">
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              From compact ice makers to industrial-scale systems and professional ice cream machines &mdash; reliable equipment for businesses throughout Zimbabwe. We partner with global manufacturers to bring you proven technology backed by local expertise and rapid response service.
            </p>
          </div>

          {/* CTA buttons */}
          <div className="opacity-0 animate-slide-up-delay-4">
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
                View Products <i className="fas fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>

          {/* Bottom service badges */}
          <div className="opacity-0 animate-slide-up-delay-5">
            <div className="mt-10 flex flex-wrap items-center gap-5 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-ice"></i>
                <span>5-Year Warranty</span>
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

        {/* Mobile stat cards — horizontal row */}
        <div className="lg:hidden mt-10 grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <p className="text-white font-extrabold text-xl leading-none mb-1">500+</p>
            <p className="text-white/50 text-[10px]">Clients Served</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <p className="text-white font-extrabold text-xl leading-none mb-1">10+</p>
            <p className="text-white/50 text-[10px]">Years Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 text-center">
            <p className="text-white font-extrabold text-xl leading-none mb-1">24/7</p>
            <p className="text-white/50 text-[10px]">Support Available</p>
          </div>
        </div>

        {/* Floating stat cards — desktop only */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
          <div className="opacity-0 animate-slide-up-delay-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-44 hover:bg-white/15 transition group">
            <div className="w-10 h-10 bg-ice/20 rounded-xl flex items-center justify-center mb-3">
              <i className="fas fa-users text-ice text-lg"></i>
            </div>
            <p className="text-white font-extrabold text-2xl leading-none mb-1">500+</p>
            <p className="text-white/50 text-xs">Clients Served</p>
          </div>
          <div className="opacity-0 animate-slide-up-delay-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-44 hover:bg-white/15 transition group">
            <div className="w-10 h-10 bg-ice/20 rounded-xl flex items-center justify-center mb-3">
              <i className="fas fa-calendar-alt text-ice text-lg"></i>
            </div>
            <p className="text-white font-extrabold text-2xl leading-none mb-1">10+</p>
            <p className="text-white/50 text-xs">Years Experience</p>
          </div>
          <div className="opacity-0 animate-slide-up-delay-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 w-44 hover:bg-white/15 transition group">
            <div className="w-10 h-10 bg-ice/20 rounded-xl flex items-center justify-center mb-3">
              <i className="fas fa-headset text-ice text-lg"></i>
            </div>
            <p className="text-white font-extrabold text-2xl leading-none mb-1">24/7</p>
            <p className="text-white/50 text-xs">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}