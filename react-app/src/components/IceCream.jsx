export default function IceCream({ onOpenQuote }) {
  const machines = [
    {
      title: 'Soft Serve Ice Cream Machines',
      desc: 'Continuous production for shops, cafes & kiosks. Single or dual flavor.',
      tags: ['Cafes', 'Ice Cream Shops', 'Kiosks'],
      icon: 'fa-ice-cream',
      gradient: 'from-sky-50 to-ice-light',
      popular: true,
    },
    {
      title: 'Hard Ice Cream Production',
      desc: 'Batch freezers for premium hard scoop ice cream brands and dessert shops.',
      tags: ['Ice Cream Brands', 'Dessert Shops'],
      icon: 'fa-cone-iced',
      gradient: 'from-sky-50 to-ice-light',
    },
    {
      title: 'Countertop Ice Cream Makers',
      desc: 'Compact commercial units for restaurants and cafes with limited space.',
      tags: ['Restaurants', 'Cafes', 'Hotels'],
      icon: 'fa-blender',
      gradient: 'from-sky-50 to-ice-light',
    },
    {
      title: 'Commercial Gelato Machines',
      desc: 'Authentic gelato production for specialty shops and premium hotels.',
      tags: ['Gelato Shops', 'Hotels'],
      icon: 'fa-gem',
      gradient: 'from-amber-50 to-orange-50',
      premium: true,
    },
    {
      title: 'Multi-Flavor Machines',
      desc: '2&ndash;4 flavor dispensers for busy shops and entertainment venues.',
      tags: ['Ice Cream Shops', 'Events'],
      icon: 'fa-flask',
      gradient: 'from-sky-50 to-ice-light',
    },
  ];

  return (
    <section id="ice-cream" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Ice Cream Equipment</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Professional Ice Cream Machines</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {machines.map((machine, i) => (
            <div key={i} className="card-hover bg-white rounded-xl shadow-md overflow-hidden">
              <div className={`relative h-52 ${machine.gradient} flex items-center justify-center`}>
                <i className={`fas ${machine.icon} text-ice text-6xl opacity-30`}></i>
                {machine.popular && (
                  <span className="absolute top-3 left-3 bg-ice text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Popular</span>
                )}
                {machine.premium && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Premium</span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-navy text-lg mb-2">{machine.title}</h3>
                <p className="text-gray-500 text-sm mb-4" dangerouslySetInnerHTML={{ __html: machine.desc }}></p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {machine.tags.map((tag, ti) => (
                    <span key={ti} className="text-[10px] bg-ice-light text-ice font-semibold px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>
                <button onClick={() => onOpenQuote?.(machine.title)} className="w-full bg-navy hover:bg-ice text-white text-xs font-bold py-3 rounded-lg uppercase tracking-wide transition">Request Quote</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}