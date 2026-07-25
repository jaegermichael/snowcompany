export default function Services() {
  const services = [
    { icon: 'fa-award', title: 'Premium Quality' },
    { icon: 'fa-bolt', title: 'Energy Efficient' },
    { icon: 'fa-cogs', title: 'Installation' },
    { icon: 'fa-truck', title: 'Nationwide Delivery' },
    { icon: 'fa-wrench', title: 'Maintenance' },
    { icon: 'fa-shield-alt', title: 'Warranty Protection' },
    { icon: 'fa-puzzle-piece', title: 'Spare Parts' },
    { icon: 'fa-tags', title: 'Competitive Pricing' },
  ];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Why Choose Us</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3 mb-5">Best services for businesses</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              More than equipment supply &mdash; a complete partnership covering installation, training, maintenance and spare parts nationwide.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="w-10 h-10 bg-ice-light rounded-lg flex items-center justify-center shrink-0"><i className={`fas ${service.icon} text-ice`}></i></div>
                  <span className="font-semibold text-navy text-sm">{service.title}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="img-zoom rounded-xl overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=700&q=80" alt="" className="w-full h-96 object-cover" />
            </div>
            <div className="absolute -bottom-6 left-4 sm:left-6 lg:-left-6 bg-ice text-white p-5 sm:p-6 rounded-xl shadow-xl">
              <span className="text-3xl sm:text-4xl font-black block">100%</span>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide">Zimbabwe Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}