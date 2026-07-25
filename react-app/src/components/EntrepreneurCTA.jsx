export default function EntrepreneurCTA() {
  return (
    <section className="py-20 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #00AEEF 0%, transparent 50%)' }}></div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-ice font-bold text-xs tracking-[3px] uppercase">For Entrepreneurs</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mt-3 mb-5 leading-tight">
              We create opportunity to reach your profit potential
            </h2>
            <p className="text-white/50 leading-relaxed mb-6">
              Looking to start an ice-selling or ice cream business? Frozen Solutions provides the machines, guidance, and support to launch a profitable cold-production operation.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-white/70 text-sm"><i className="fas fa-check-circle text-ice"></i> Business planning guidance</li>
              <li className="flex items-center gap-3 text-white/70 text-sm"><i className="fas fa-check-circle text-ice"></i> Right-sized equipment selection</li>
              <li className="flex items-center gap-3 text-white/70 text-sm"><i className="fas fa-check-circle text-ice"></i> Installation & training included</li>
              <li className="flex items-center gap-3 text-white/70 text-sm"><i className="fas fa-check-circle text-ice"></i> Ongoing technical support</li>
            </ul>
          </div>
          <div className="bg-ice p-8 md:p-10 rounded-xl">
            <h3 className="text-white font-extrabold text-xl mb-6">Get Business Startup Advice</h3>
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! Our specialist will contact you with business startup advice.'); }} className="space-y-4">
              <input type="text" required placeholder="Your Name *" className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/30 text-white placeholder-white/50" />
              <input type="tel" required placeholder="Phone / WhatsApp *" className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/30 text-white placeholder-white/50" />
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/30 text-white placeholder-white/50" />
              <select className="w-full px-4 py-3 rounded-lg text-sm bg-white/10 border border-white/30 text-white">
                <option value="" className="text-navy">Business Interest...</option>
                <option className="text-navy">Start Ice Selling Business</option>
                <option className="text-navy">Start Ice Cream Shop</option>
                <option className="text-navy">Expand Existing Business</option>
                <option className="text-navy">Need Equipment Advice</option>
              </select>
              <button type="submit" className="w-full bg-navy hover:bg-navy-light text-white font-bold text-sm py-3.5 rounded-lg uppercase tracking-wide transition">Submit Request</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}