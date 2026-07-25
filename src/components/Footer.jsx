export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-ice rounded-lg flex items-center justify-center"><i className="fas fa-snowflake text-white"></i></div>
              <div><span className="font-extrabold text-white leading-none block">Frozen<span className="text-ice">Solutions</span></span><span className="text-[10px] text-white/40 font-semibold tracking-[2px] uppercase">Zimbabwe</span></div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed mb-5">Zimbabwe's leading supplier of commercial ice-making and ice cream production equipment.</p>
            <div className="flex gap-2">
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-ice rounded-lg flex items-center justify-center transition"><i className="fab fa-facebook-f text-sm"></i></a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-ice rounded-lg flex items-center justify-center transition"><i className="fab fa-instagram text-sm"></i></a>
              <a href="https://wa.me/263776146858" className="w-9 h-9 bg-white/5 hover:bg-green-500 rounded-lg flex items-center justify-center transition"><i className="fab fa-whatsapp text-sm"></i></a>
              <a href="#" className="w-9 h-9 bg-white/5 hover:bg-ice rounded-lg flex items-center justify-center transition"><i className="fab fa-linkedin-in text-sm"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5">
              <li><a href="#ice-machines" className="text-white/40 hover:text-ice text-sm transition">Ice Machines (60kg&ndash;120kg)</a></li>
              <li><a href="#ice-cream" className="text-white/40 hover:text-ice text-sm transition">Soft Serve Machines</a></li>
              <li><a href="#ice-cream" className="text-white/40 hover:text-ice text-sm transition">Hard Ice Cream Machines</a></li>
              <li><a href="#ice-cream" className="text-white/40 hover:text-ice text-sm transition">Gelato Machines</a></li>
              <li><a href="#ice-cream" className="text-white/40 hover:text-ice text-sm transition">Countertop Makers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-white/40 hover:text-ice text-sm transition">Installation</a></li>
              <li><a href="#services" className="text-white/40 hover:text-ice text-sm transition">Maintenance</a></li>
              <li><a href="#services" className="text-white/40 hover:text-ice text-sm transition">Spare Parts</a></li>
              <li><a href="#services" className="text-white/40 hover:text-ice text-sm transition">Operator Training</a></li>
              <li><a href="#contact" className="text-white/40 hover:text-ice text-sm transition">Business Startup Advice</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#about" className="text-white/40 hover:text-ice text-sm transition">About Us</a></li>
              <li><a href="#industries" className="text-white/40 hover:text-ice text-sm transition">Industries</a></li>
              <li><a href="#faq" className="text-white/40 hover:text-ice text-sm transition">FAQ</a></li>
              <li><a href="#contact" className="text-white/40 hover:text-ice text-sm transition">Contact</a></li>
              <li><a href="#contact" className="text-white/40 hover:text-ice text-sm transition">Request a Quote</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">&copy; 2026 Frozen Solutions Zimbabwe. All rights reserved. Made by Jaeger Media.</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-ice text-sm transition">Privacy Policy</a>
            <a href="#" className="text-white/30 hover:text-ice text-sm transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}