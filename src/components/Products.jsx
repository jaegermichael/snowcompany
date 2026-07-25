export default function Products() {
  const products = [
    { title: 'Ice Making Machines', desc: '60kg &ndash; 120kg / 24hrs commercial ice production systems.', href: '#ice-machines', icon: 'fa-icicles', gradient: 'from-sky-50 to-ice-light' },
    { title: 'Soft Serve Machines', desc: 'High-volume soft serve for shops, cafes, kiosks & events.', href: '#ice-cream', icon: 'fa-ice-cream', gradient: 'from-sky-50 to-ice-light' },
    { title: 'Hard Ice Cream & Gelato', desc: 'Batch freezers and gelato machines for premium brands.', href: '#ice-cream', icon: 'fa-cone-iced', gradient: 'from-sky-50 to-ice-light' },
    { title: 'Industrial Systems', desc: 'Heavy-duty systems for wholesale & food processing.', href: '#ice-machines', icon: 'fa-industry', gradient: 'from-sky-50 to-ice-light' },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">What We Supply</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Specialist cold production equipment</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Premium machines built to withstand the demands of the Zimbabwean market.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
              <div className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                <i className={`fas ${product.icon} text-ice text-5xl opacity-30`}></i>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy text-base mb-1">{product.title}</h3>
                <p className="text-gray-500 text-sm mb-4" dangerouslySetInnerHTML={{ __html: product.desc }}></p>
                <a
                  href={product.href}
                  className="text-ice font-bold text-xs uppercase tracking-wide hover:underline inline-flex items-center gap-1"
                >
                  View Details <i className="fas fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}