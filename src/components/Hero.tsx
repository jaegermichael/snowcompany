import { useState } from 'react';
import { ArrowDownRight, MessageCircle, Truck, Wrench, PackageCheck } from 'lucide-react';
import { iceMachines } from '../data/site';
import { whatsappLink } from '../lib/whatsapp';
import { useQuote } from '../lib/quote';
import MikeyHeroLettering from './mikey/MikeyHeroLettering';

// Deterministic "snow" so server/client and reloads match
const specks = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  size: 2 + ((i * 7) % 4),
  dur: 14 + ((i * 11) % 16),
  delay: -((i * 13) % 24),
  dx: `${((i % 5) - 2) * 18}px`,
}));

export default function Hero() {
  const [active, setActive] = useState(0);
  const m = iceMachines[active];
  const { requestQuote } = useQuote();

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (active + (e.key === 'ArrowRight' ? 1 : -1) + iceMachines.length) % iceMachines.length;
    setActive(next);
    document.getElementById(`cap-tab-${next}`)?.focus();
  };

  return (
    <section id="top" data-mikey-hero className="grain relative isolate overflow-hidden bg-ink pb-[24vw] pt-32 text-white sm:pt-36 md:pb-[19vw]">
      {/* cold glow */}
      <div aria-hidden className="absolute -right-40 -top-40 -z-10 h-[46rem] w-[46rem] rounded-full bg-ice/25 blur-[140px]" />
      <div aria-hidden className="absolute -bottom-60 -left-40 -z-10 h-[36rem] w-[36rem] rounded-full bg-[#2b5cff]/15 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {specks.map((s, i) => (
          <span
            key={i}
            className="speck"
            style={{ left: s.left, width: s.size, height: s.size, animationDuration: `${s.dur}s`, animationDelay: `${s.delay}s`, ['--dx' as string]: s.dx }}
          />
        ))}
      </div>

      {/* Mikey glass lettering: decorative duplicate of the brand, behind the copy and stage */}
      <MikeyHeroLettering
        lines={['FROZEN']}
        style={{ ['--mhl-size-first' as string]: '25vw', ['--mhl-mobile-first' as string]: '34vw' }}
      />

      <div className="shell relative z-[1] grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="eyebrow text-ice" data-reveal>
            Cold production · Local expertise
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,7.4rem)] font-extrabold leading-[0.88]" data-reveal style={{ ['--d' as string]: '80ms' }}>
            Big ideas.
            <br />
            Perfectly <span className="chilled">chilled.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70" data-reveal style={{ ['--d' as string]: '160ms' }}>
            Commercial ice machines and ice cream equipment for your next chapter. Supplied, installed, and supported across Zimbabwe.
          </p>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal style={{ ['--d' as string]: '240ms' }}>
            <a href="#finder" className="btn-ice">
              Find your machine <ArrowDownRight size={18} aria-hidden />
            </a>
            <a href={whatsappLink('Hello Frozen Solutions, I would like to talk to a specialist about equipment.')} target="_blank" rel="noopener" className="btn-ghost">
              <MessageCircle size={18} aria-hidden /> Talk to a specialist
            </a>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/60" data-reveal style={{ ['--d' as string]: '320ms' }}>
            <li className="flex items-center gap-2"><Truck size={16} className="text-ice" aria-hidden /> Nationwide delivery</li>
            <li className="flex items-center gap-2"><Wrench size={16} className="text-ice" aria-hidden /> Installation & training</li>
            <li className="flex items-center gap-2"><PackageCheck size={16} className="text-ice" aria-hidden /> Genuine spare parts</li>
          </ul>
        </div>

        {/* Capacity stage: the hero's focal interaction */}
        <div className="relative" data-reveal style={{ ['--d' as string]: '200ms' }}>
          <div className="glass rounded-[2rem] p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
              <div key={m.capacity} id={`cap-panel`} role="tabpanel" aria-labelledby={`cap-tab-${active}`} className="stage-in relative grid aspect-[5/4] place-items-center p-6">
                <img src={m.image} alt={`${m.capacity}kg per 24 hours commercial ice machine`} className="max-h-full w-auto max-w-[78%] object-contain mix-blend-multiply" />
              </div>
              <div className="flex items-end justify-between gap-4 border-t border-ink/10 px-5 py-4 text-ink">
                <div>
                  <p className="font-display text-3xl font-extrabold leading-none">
                    {m.capacity}kg <span className="text-base font-semibold text-ink/50">/ 24 hours</span>
                  </p>
                  <p className="mt-1.5 text-sm text-ink/60">{m.idealFor}</p>
                </div>
                <button type="button" onClick={() => requestQuote(m.quoteLabel)} className="btn-ink min-h-[2.5rem] shrink-0 px-4 text-sm">
                  Quote
                </button>
              </div>
            </div>
            <div role="tablist" aria-label="Ice machine capacity" className="mt-3 grid grid-cols-4 gap-2" onKeyDown={onKey}>
              {iceMachines.map((im, i) => (
                <button
                  key={im.capacity}
                  id={`cap-tab-${i}`}
                  role="tab"
                  type="button"
                  aria-selected={i === active}
                  aria-controls="cap-panel"
                  tabIndex={i === active ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`rounded-2xl px-2 py-3 text-center transition duration-300 ${
                    i === active ? 'bg-ice text-ink' : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="block font-display text-xl font-bold leading-none sm:text-2xl">{im.capacity}</span>
                  <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-widest opacity-70">kg / day</span>
                </button>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-white/40">Commercial series · 60 to 120kg per 24 hours</p>
        </div>
      </div>
    </section>
  );
}
