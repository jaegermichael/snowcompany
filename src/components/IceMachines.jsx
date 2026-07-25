export default function IceMachines({ onOpenQuote }) {
  const machines = [
    {
      capacity: '60kg',
      title: '60kg / 24 Hours',
      desc: 'Ideal for cafes, small restaurants & kiosks',
      features: [
        'Compact & space-saving design',
        'Energy efficient operation',
        'Easy to clean and maintain',
      ],
      image: '/images/60 kgs per 24 hours.jpeg',
    },
    {
      capacity: '80kg',
      title: '80kg / 24 Hours',
      desc: 'Perfect for restaurants & small hotels',
      features: [
        'Reliable consistent output',
        'Quiet operation',
        'Stainless steel body',
      ],
      image: '/images/80 kgs per 24 hours.jpeg',
    },
    {
      capacity: '100kg',
      title: '100kg / 24 Hours',
      desc: 'Great for hotels, bars & supermarkets',
      features: [
        'High efficiency cooling',
        'Auto-clean function',
        'Large storage bin capacity',
      ],
      image: '/images/100 kgs per 24 hours.jpeg',
    },
    {
      capacity: '120kg',
      title: '120kg / 24 Hours',
      desc: 'Built for medium to large businesses',
      features: [
        'Higher volume output',
        'Commercial grade compressor',
        '24/7 operation ready',
      ],
      image: '/images/120 kgs per 24 hours.jpeg',
    },
  ];

  return (
    <section id="ice-machines" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Ice Production</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Commercial Ice-Making Machines</h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Reliable ice production systems from compact units to larger commercial machines.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {machines.map((machine, i) => (
            <div key={i} className="card-hover bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="h-44 bg-gradient-to-br from-sky-50 to-ice-light relative flex items-center justify-center overflow-hidden">
                <img src={machine.image} alt={`${machine.capacity} Ice Machine`} className="w-full h-full object-cover absolute inset-0" />
                <span className="absolute top-3 right-3 bg-ice text-white text-xs font-bold px-3 py-1 rounded-full z-10">{machine.capacity}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-navy">{machine.title}</h3>
                <p className="text-gray-500 text-xs mt-1 mb-3">{machine.desc}</p>
                <ul className="space-y-1 mb-4">
                  {machine.features.map((feature, fi) => (
                    <li key={fi} className="text-xs text-gray-500"><i className="fas fa-check text-ice mr-1.5"></i>{feature}</li>
                  ))}
                </ul>
                <button onClick={() => onOpenQuote?.(machine.title)} className="w-full bg-navy hover:bg-ice text-white text-xs font-bold py-2.5 rounded-lg uppercase tracking-wide transition">Request Quote</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}