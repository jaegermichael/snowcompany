export default function Steps() {
  const steps = [
    { num: '01', title: 'Tell Us Your Needs', desc: 'Share your business type, capacity requirements and location with our team.' },
    { num: '02', title: 'Get Your Quote & Equipment', desc: 'We recommend the right machine, deliver nationwide and handle professional installation.' },
    { num: '03', title: 'Start Producing', desc: 'Your team is trained, equipment is running &mdash; and we stay on call for support.' },
  ];

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Simple Process</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">3 easy steps to equip your business</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-0.5 bg-gray-200"></div>
          {steps.map((step, i) => (
            <div key={i} className="text-center relative">
              <div className="w-20 h-20 bg-white border-4 border-ice rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg relative z-10">
                <span className="text-ice font-black text-2xl">{step.num}</span>
              </div>
              <h3 className="font-bold text-navy text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm max-w-xs mx-auto" dangerouslySetInnerHTML={{ __html: step.desc }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}