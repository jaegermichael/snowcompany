import { business, iceMachines } from '../data/site';
import { whatsappLink } from '../lib/whatsapp';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white">
      <div className="shell border-t border-white/10 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label={`${business.fullName} home`} className="inline-block">
              <img src="/brand/logo-white.svg" alt={business.name} width={180} height={48} className="h-12 w-auto" loading="lazy" />
            </a>
            <p className="mt-5 max-w-xs text-white/50">
              Commercial ice-making and ice cream production equipment, supplied, installed and supported across Zimbabwe.
            </p>
          </div>
          <nav aria-label="Products">
            <h2 className="label text-white/40">Products</h2>
            <ul className="mt-4 space-y-2.5 text-white/70">
              <li><a className="hover:text-ice" href="#ice-machines">Ice machines ({iceMachines[0].capacity}kg–{iceMachines[iceMachines.length - 1].capacity}kg)</a></li>
              <li><a className="hover:text-ice" href="#ice-cream">Ice cream & gelato</a></li>
              <li><a className="hover:text-ice" href="#finder">Capacity finder</a></li>
            </ul>
          </nav>
          <nav aria-label="Company">
            <h2 className="label text-white/40">Company</h2>
            <ul className="mt-4 space-y-2.5 text-white/70">
              <li><a className="hover:text-ice" href="#startups">Start a business</a></li>
              <li><a className="hover:text-ice" href="#support">Services & support</a></li>
              <li><a className="hover:text-ice" href="#faq">FAQ</a></li>
            </ul>
          </nav>
          <div>
            <h2 className="label text-white/40">Contact</h2>
            <ul className="mt-4 space-y-2.5 text-white/70">
              <li><a className="hover:text-ice" href={business.phoneHref}>{business.phoneDisplay}</a></li>
              <li><a className="hover:text-ice" href={whatsappLink()} target="_blank" rel="noopener">WhatsApp</a></li>
              <li><a className="break-all hover:text-ice" href={`mailto:${business.email}`}>{business.email}</a></li>
              <li>{business.location}</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-white/10 pb-16 pt-8 sm:pb-0 sm:pr-20 font-mono text-xs uppercase tracking-[0.14em] text-white/35">
          <p>© {year} {business.fullName}</p>
          <p>Nationwide delivery · Installation · Spare parts</p>
        </div>
      </div>
    </footer>
  );
}
