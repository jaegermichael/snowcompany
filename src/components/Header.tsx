import { useEffect, useRef, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { business } from '../data/site';

const nav = [
  { href: '#finder', label: 'Find a machine' },
  { href: '#ice-machines', label: 'Ice machines' },
  { href: '#ice-cream', label: 'Ice cream' },
  { href: '#startups', label: 'Start a business' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      setOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !toggleRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div
        className={`mx-auto flex max-w-site items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
          scrolled ? 'bg-ink/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <a href="#top" className="shrink-0" aria-label={`${business.fullName} home`}>
          <img src="/brand/logo-white.svg" alt={business.name} width={150} height={40} className="h-9 w-auto sm:h-10" />
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="rounded-full px-3.5 py-2 text-[0.92rem] font-medium text-white/75 transition hover:bg-white/10 hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="hidden items-center gap-2 px-2 font-mono text-xs text-white/70 transition hover:text-white xl:flex">
            <Phone size={14} aria-hidden /> {business.phoneDisplay}
          </a>
          <a href="#contact" className="btn-ice hidden min-h-[2.6rem] px-5 text-sm sm:inline-flex">
            Get a quote
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-white transition hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        hidden={!open}
        className="glass mx-auto mt-2 max-w-site rounded-3xl bg-ink/90 p-3 lg:hidden"
      >
        <ul>
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 text-lg font-medium text-white hover:bg-white/10">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-2 grid gap-2 border-t border-white/10 p-2 pt-4 sm:grid-cols-2">
          <a href="#contact" onClick={() => setOpen(false)} className="btn-ice">
            Get a quote
          </a>
          <a href={business.phoneHref} className="btn-ghost">
            <Phone size={16} aria-hidden /> {business.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
