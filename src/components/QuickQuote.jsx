export default function QuickQuote() {
  const products = [
    '60kg Ice Machine', '80kg Ice Machine', '100kg Ice Machine', '120kg Ice Machine',
    'Soft Serve Machine', 'Hard Ice Cream Machine', 'Gelato Machine', 'Business Startup Advice'
  ];

  return (
    <section className="relative z-10 -mb-10">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-end gap-3 sm:gap-4">
            <div className="flex-1">
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Your Name</label>
              <input type="text" id="quickName" placeholder="Enter your name" className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Phone / WhatsApp</label>
              <input type="tel" id="quickPhone" placeholder="+263 ..." className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm" />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-2">Product Interest</label>
              <select id="quickProduct" className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white">
                <option value="">Select product...</option>
                {products.map((p, i) => <option key={i} value={p}>{p}</option>)}
              </select>
            </div>
            <button onClick={() => alert('Quote request received! We\'ll be in touch shortly.')} className="bg-ice hover:bg-ice-dark text-white font-bold text-sm px-8 py-3.5 rounded-lg uppercase tracking-wide transition whitespace-nowrap shadow-sm hover:shadow-md">
              Get Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}