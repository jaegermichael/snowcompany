export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="img-zoom rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=500&q=80" alt="Ice production" className="w-full h-56 object-cover" />
                </div>
                <div className="img-zoom rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=500&q=80" alt="Ice cream" className="w-full h-40 object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="img-zoom rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=80" alt="Gelato" className="w-full h-40 object-cover" />
                </div>
                <div className="img-zoom rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=500&q=80" alt="Ice business" className="w-full h-56 object-cover" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-ice text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-xl flex items-center gap-3">
              <span className="text-2xl sm:text-3xl font-black">24/7</span>
              <span className="text-[10px] sm:text-xs font-semibold leading-tight uppercase tracking-wide">Ice Production<br />Local Support</span>
            </div>
          </div>

          <div>
            <span className="text-ice font-bold text-xs tracking-[3px] uppercase">About Frozen Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3 mb-5 leading-tight">
              Your next chapter. Our local know-how.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Frozen Solutions supplies high-performance ice-making and ice cream production equipment designed for reliability, efficiency, and profitability. Whether you operate a restaurant, hotel, supermarket, cafe, or are starting a new venture &mdash; we keep your business running smoothly.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-ice-light rounded flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fas fa-check text-ice text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">Commercial Ice Machines</h4>
                  <p className="text-gray-500 text-sm">60kg to 120kg per 24 hours &mdash; every capacity covered.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-ice-light rounded flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fas fa-check text-ice text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">Ice Cream Production Equipment</h4>
                  <p className="text-gray-500 text-sm">Soft serve, hard scoop, gelato & multi-flavor machines.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-ice-light rounded flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fas fa-check text-ice text-xs"></i>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-sm">Install, Train & Maintain</h4>
                  <p className="text-gray-500 text-sm">Nationwide delivery, setup, operator training and spare parts.</p>
                </div>
              </div>
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-ice hover:bg-ice-dark text-white font-bold text-sm px-7 py-3.5 rounded-lg transition uppercase tracking-wide shadow-sm hover:shadow-md"
            >
              Explore More <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
