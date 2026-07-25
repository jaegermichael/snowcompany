export default function Industries() {
  const industries = [
    { name: 'Restaurants', icon: 'fa-utensils' },
    { name: 'Hotels & Lodges', icon: 'fa-hotel' },
    { name: 'Cafes', icon: 'fa-coffee' },
    { name: 'Ice Cream Shops', icon: 'fa-ice-cream' },
    { name: 'Supermarkets', icon: 'fa-shopping-cart' },
    { name: 'Bars & Nightclubs', icon: 'fa-glass-martini-alt' },
    { name: 'Event Companies', icon: 'fa-calendar-check' },
    { name: 'Entrepreneurs', icon: 'fa-chart-line' },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Who We Serve</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Industries we equip across Zimbabwe</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, i) => (
            <div key={i} className="img-zoom relative h-44 rounded-xl overflow-hidden shadow-sm bg-gradient-to-br from-navy to-navy-light flex items-center justify-center">
              <i className={`fas ${industry.icon} text-ice text-5xl opacity-20`}></i>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent flex items-end p-4">
                <span className="text-white font-bold text-sm">{industry.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}