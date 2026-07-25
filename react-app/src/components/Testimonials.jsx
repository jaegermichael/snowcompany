export default function Testimonials() {
  const testimonials = [
    { quote: '"Our 120kg ice machine has been running flawlessly for over a year. Installation was professional and the team trained our staff thoroughly."', name: 'Tendai Moyo', role: 'Hotel Manager, Victoria Falls', initials: 'TM' },
    { quote: '"I started my ice cream kiosk with a soft serve machine from Frozen Solutions. The support was excellent and my business is thriving."', name: 'Rudo Chikwanda', role: 'Entrepreneur, Harare', initials: 'RC' },
    { quote: '"We equip all our supermarket branches with ice machines from Frozen Solutions. Reliable equipment and spare parts always available."', name: 'James Ndlovu', role: 'Operations Director, Bulawayo', initials: 'JN' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Testimonials</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Here is some clients feedbacks</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-md relative">
              <div className="text-ice text-4xl absolute top-6 right-6 opacity-20"><i className="fas fa-quote-right"></i></div>
              <div className="flex gap-1 mb-4"><i className="fas fa-star text-amber-400 text-xs"></i><i className="fas fa-star text-amber-400 text-xs"></i><i className="fas fa-star text-amber-400 text-xs"></i><i className="fas fa-star text-amber-400 text-xs"></i><i className="fas fa-star text-amber-400 text-xs"></i></div>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-ice-light rounded-full flex items-center justify-center font-bold text-ice text-sm">{t.initials}</div>
                <div><p className="font-bold text-navy text-sm">{t.name}</p><p className="text-gray-400 text-xs">{t.role}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}