import { Check, ArrowUpRight } from 'lucide-react';
import { iceMachines } from '../data/site';
import { useQuote } from '../lib/quote';
import { trackPointer } from '../lib/pointer';

export default function IceRange() {
  const { requestQuote } = useQuote();

  return (
    <section id="ice-machines" className="bg-white py-24 sm:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8 border-b border-ink/10 pb-10">
          <div>
            <p className="eyebrow text-ice-deep" data-reveal>01 / Ice production</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
              Small footprint. Serious output.
            </h2>
          </div>
          <p className="max-w-sm text-lg text-ink/60" data-reveal>
            Reliable ice production systems, from compact units to larger commercial machines.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {iceMachines.map((m, i) => (
            <li key={m.capacity} data-reveal style={{ ['--d' as string]: `${i * 90}ms` }}>
              <article
                onPointerMove={trackPointer}
                className="frost-hover group flex h-full flex-col rounded-[1.75rem] border border-ink/10 bg-frost p-3 transition duration-500 hover:-translate-y-1.5 hover:border-ice/50 hover:shadow-[0_30px_60px_-30px_rgba(0,114,163,0.45)]"
              >
                <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[1.35rem] bg-white p-6">
                  <span className="absolute left-4 top-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/40">0{i + 1}</span>
                  <img
                    src={m.image}
                    alt={`${m.capacity}kg per 24 hours ice machine`}
                    loading="lazy"
                    className="max-h-full w-auto object-contain mix-blend-multiply transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                  <h3 className="font-display text-4xl font-extrabold leading-none">
                    {m.capacity}kg <span className="text-base font-semibold tracking-normal text-ink/45">/ 24 hours</span>
                  </h3>
                  <p className="mt-3 text-[0.95rem] text-ink/65">{m.idealFor}</p>
                  <ul className="mb-7 mt-5 space-y-2.5 border-t border-ink/10 pt-5 text-[0.92rem]">
                    {m.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <Check size={17} className="mt-0.5 shrink-0 text-ice-deep" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => requestQuote(m.quoteLabel)}
                    aria-label={`Request a quote for the ${m.capacity}kg ice machine`}
                    className="btn-line mt-auto w-full justify-between group-hover:border-ink group-hover:bg-ink group-hover:text-white"
                  >
                    Request quote <ArrowUpRight size={18} aria-hidden />
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
