import { ArrowUpRight } from 'lucide-react';
import { iceCreamMachines } from '../data/site';
import { useQuote } from '../lib/quote';
import { trackPointer } from '../lib/pointer';

export default function IceCream() {
  const { requestQuote } = useQuote();

  return (
    <section id="ice-cream" className="grain relative isolate overflow-hidden bg-ink-2 py-24 text-white sm:py-32">
      <div aria-hidden className="absolute -left-40 top-20 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#ff9ec7]/10 blur-[130px]" />
      <div aria-hidden className="absolute -right-40 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-ice/15 blur-[130px]" />
      <div className="shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-ice" data-reveal>02 / Ice cream & gelato</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
            From your first scoop to your busiest service.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65" data-reveal>
            Soft serve, batch freezers, countertop units and gelato machines, each matched to how you sell.
          </p>
        </div>

        <ol className="border-t border-white/10">
          {iceCreamMachines.map((m, i) => (
            <li key={m.name} data-reveal style={{ ['--d' as string]: `${i * 70}ms` }}>
              <button
                type="button"
                onPointerMove={trackPointer}
                onClick={() => requestQuote(m.quoteLabel)}
                className="frost-hover group grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-3 border-b border-white/10 px-2 py-7 text-left transition hover:px-5 sm:gap-x-8"
              >
                <span className="pt-2 font-mono text-xs text-white/40">0{i + 1}</span>
                <span>
                  <span className="flex flex-wrap items-center gap-3">
                    <span className="font-display text-2xl font-bold leading-tight sm:text-3xl">{m.name}</span>
                    {m.badge && (
                      <span className={`rounded-full px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.14em] ${m.badge === 'Popular' ? 'bg-ice text-ink' : 'bg-white text-ink'}`}>
                        {m.badge}
                      </span>
                    )}
                  </span>
                  <span className="mt-2 block max-w-lg text-white/60">{m.description}</span>
                  <span className="mt-4 flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-white/55">{t}</span>
                    ))}
                  </span>
                </span>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 transition duration-300 group-hover:rotate-45 group-hover:border-ice group-hover:bg-ice group-hover:text-ink">
                  <ArrowUpRight size={20} aria-hidden />
                  <span className="sr-only">Request a quote</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
