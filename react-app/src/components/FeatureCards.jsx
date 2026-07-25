export default function FeatureCards() {
  const features = [
    { icon: 'fa-bolt', title: 'Energy Efficient', desc: 'Low-power commercial machines designed to cut operating costs while maximising output.' },
    { icon: 'fa-tachometer-alt', title: 'High Production', desc: 'From 60kg to 1 tonne per day &mdash; capacity options matched to every business size.' },
    { icon: 'fa-headset', title: 'Full Support', desc: 'Installation, training, spare parts and nationwide maintenance for total peace of mind.' },
  ];

  return (
    <section className="relative z-20 -mt-12 lg:-mt-16 pb-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div key={i} className="card-hover bg-white rounded-xl shadow-xl p-7 flex gap-5 items-start border-l-4 border-ice">
              <div className="w-12 h-12 bg-ice-light rounded-lg flex items-center justify-center shrink-0">
                <i className={`fas ${feature.icon} text-ice text-lg`}></i>
              </div>
              <div>
                <h3 className="font-bold text-navy text-base mb-1">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.desc }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}