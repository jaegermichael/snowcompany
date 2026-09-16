import { useState } from 'react';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  if (showSuccess) {
    return (
      <section id="contact" className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Contact Us</span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Request a Quote or Consultation</h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><i className="fas fa-check text-green-600 text-2xl"></i></div>
              <h3 className="font-extrabold text-navy text-xl mb-2">Inquiry Received!</h3>
              <p className="text-gray-500 text-sm">Thank you. Our team will get back to you shortly.</p>
              <button onClick={() => setShowSuccess(false)} className="mt-6 text-ice font-bold text-sm hover:underline">Submit another inquiry</button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-ice font-bold text-xs tracking-[3px] uppercase">Contact Us</span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mt-3">Request a Quote or Consultation</h2>
        </div>
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-0">
            <div className="bg-navy p-8 rounded-t-xl text-white">
              <h3 className="font-extrabold text-lg mb-6">Contact Details</h3>
              <div className="space-y-5">
                <a href="tel:+263776146858" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-ice rounded-lg flex items-center justify-center shrink-0"><i className="fas fa-phone text-white text-sm"></i></div>
                  <div><p className="text-white/40 text-[10px] uppercase tracking-wider">Phone</p><p className="font-semibold text-sm">+263 77 614 6858</p></div>
                </a>
                <a href="https://wa.me/263776146858" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-11 h-11 bg-green-500 rounded-lg flex items-center justify-center shrink-0"><i className="fab fa-whatsapp text-white text-lg"></i></div>
                  <div><p className="text-white/40 text-[10px] uppercase tracking-wider">WhatsApp</p><p className="font-semibold text-sm">+263 77 614 6858</p></div>
                </a>
                <a href="mailto:info@frozensolutions.co.zw" className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-ice rounded-lg flex items-center justify-center shrink-0"><i className="fas fa-envelope text-white text-sm"></i></div>
                  <div><p className="text-white/40 text-[10px] uppercase tracking-wider">Email</p><p className="font-semibold text-sm">info@frozensolutions.co.zw</p></div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-ice rounded-lg flex items-center justify-center shrink-0"><i className="fas fa-map-marker-alt text-white text-sm"></i></div>
                  <div><p className="text-white/40 text-[10px] uppercase tracking-wider">Address</p><p className="font-semibold text-sm">Harare, Zimbabwe</p><p className="text-white/40 text-xs">Nationwide delivery available</p></div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Business Hours</p>
                <p className="text-sm">Mon &ndash; Fri: 8:00 AM &ndash; 5:00 PM</p>
                <p className="text-sm">Sat: 8:00 AM &ndash; 1:00 PM</p>
              </div>
            </div>
            <div className="h-56 sm:h-48 bg-gray-200 rounded-b-xl overflow-hidden relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059!2d31.05!3d-17.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e711101999%3A0x696e9f897f0b61d!2sHarare!5e0!3m2!1sen!2szw!4v1700000000000" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Map"></iframe>
            </div>
          </div>
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">Full Name *</label><input type="text" name="name" aria-label="Full name" required placeholder="Your name" className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white" /></div>
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">Phone / WhatsApp *</label><input type="tel" name="phone" aria-label="Phone or WhatsApp" required placeholder="+263 ..." className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">Email</label><input type="email" name="email" aria-label="Email" placeholder="you@example.com" className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white" /></div>
                <div><label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">Business Type</label>
                  <select name="business" aria-label="Business type" className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white">
                    <option value="">Select type...</option>
                    <option>Restaurant</option><option>Hotel / Lodge</option><option>Cafe</option>
                    <option>Ice Cream Shop</option><option>Supermarket</option><option>Bar / Nightclub</option>
                    <option>Event Company</option><option>Food Processing</option><option>Entrepreneur / Startup</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">Product Interest *</label>
                <select name="product" id="contactProduct" aria-label="Product interest" required className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white">
                  <option value="">Select product...</option>
                  <optgroup label="Ice Machines">
                    <option>60kg Ice Machine</option><option>80kg Ice Machine</option><option>100kg Ice Machine</option><option>120kg Ice Machine</option>
                  </optgroup>
                  <optgroup label="Ice Cream Machines">
                    <option>Soft Serve Ice Cream Machine</option><option>Hard Ice Cream Production Machine</option>
                    <option>Countertop Ice Cream Maker</option><option>Commercial Gelato Machine</option><option>Multi-Flavor Ice Cream Machine</option>
                  </optgroup>
                  <option>Business Startup Advice</option><option>Maintenance / Support</option><option>Not sure &ndash; need advice</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold text-navy uppercase tracking-wider mb-1.5">Message</label>
                <textarea name="message" aria-label="Message" rows="4" placeholder="Tell us about your needs..." className="w-full border border-gray-200 px-4 py-3 rounded-lg text-sm bg-white resize-none"></textarea>
              </div>
              <label className="flex items-center gap-2 mb-6 cursor-pointer">
                <input type="checkbox" name="financing" className="w-4 h-4 accent-ice" />
                <span className="text-sm text-gray-500">I'm interested in business financing options</span>
              </label>
              <button type="submit" className="w-full bg-ice hover:bg-ice-dark text-white font-bold text-sm py-4 rounded-lg uppercase tracking-wide transition shadow-sm hover:shadow-md">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
