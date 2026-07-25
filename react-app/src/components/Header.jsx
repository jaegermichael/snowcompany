import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#services', label: 'SERVICES' },
    { href: '#products', label: 'PRODUCTS' },
    { href: '#industries', label: 'INDUSTRIES' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <>
      <div className="bg-navy text-white/80 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href="mailto:info@frozensolutions.co.zw" className="hover:text-ice transition flex items-center gap-1.5">
              <i className="fas fa-envelope text-ice text-[10px]"></i> info@frozensolutions.co.zw
            </a>
            <span className="text-white/20">|</span>
            <a href="tel:+263771234567" className="hover:text-ice transition flex items-center gap-1.5">
              <i className="fas fa-phone text-ice text-[10px]"></i> +263 77 123 4567
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span>Harare, Zimbabwe &middot; Nationwide Delivery</span>
            <div className="flex gap-2.5">
              <a href="#" className="hover:text-ice transition"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-ice transition"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/263771234567" className="hover:text-ice transition"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
        </div>
      </div>

      <header id="header" className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100/50 ${isScrolled ? 'shadow-lg' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#home" className="flex items-center gap-2.5 shrink-0">
              <div className="w-10 h-10 bg-ice rounded-lg flex items-center justify-center shadow-sm">
                <i className="fas fa-snowflake text-white text-lg"></i>
              </div>
              <div>
                <span className="font-extrabold text-navy text-lg leading-none block tracking-tight">Frozen<span className="text-ice">Solutions</span></span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-[2px] uppercase">Zimbabwe</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm font-semibold text-navy hover:text-ice transition">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a href="#contact" className="bg-ice hover:bg-ice-dark text-white text-sm font-bold px-6 py-2.5 rounded-lg transition uppercase tracking-wide shadow-sm hover:shadow-md">
                Request Quote
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-navy text-xl hover:bg-gray-100 rounded-lg transition"
              aria-label="Open menu"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div id="mobNav" className="mob-nav open fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 lg:hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-bold text-navy text-lg">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-navy text-2xl hover:text-ice transition">
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <nav className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-navy/70 hover:text-ice font-semibold py-2 border-b border-gray-100"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 bg-ice text-white text-center py-3 rounded-lg font-bold text-sm hover:bg-ice-dark transition"
                >
                  REQUEST QUOTE
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}