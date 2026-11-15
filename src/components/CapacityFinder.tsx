import { useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { businessProfiles, iceMachines } from '../data/site';
import { useQuote } from '../lib/quote';
import { whatsappLink } from '../lib/whatsapp';

export default function CapacityFinder() {
  const [id, setId] = useState('restaurant');
  const profile = businessProfiles.find((p) => p.id === id)!;
  const machine = profile.capacity ? iceMachines.find((m) => m.capacity === profile.capacity)! : null;
  const { requestQuote } = useQuote();

  return (
    <section id="finder" className="relative bg-frost py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="eyebrow text-ice-deep" data-reveal>Capacity finder</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
            The right size for your ambition.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/65" data-reveal>
            Pick the business closest to yours. We&rsquo;ll point you at a starting capacity, then confirm it with a free assessment of your space and demand.
          </p>
          <fieldset className="mt-10" data-reveal>
            <legend className="label text-ink/50">Your business</legend>
            <div className="flex flex-wrap gap-2">
              {businessProfiles.map((p) => (
                <label key={p.id} className="cursor-pointer">
                  <input type="radio" name="profile" value={p.id} checked={p.id === id} onChange={() => setId(p.id)} className="peer sr-only" />
                  <span className="inline-block rounded-full border border-ink/15 bg-white px-4 py-2.5 text-[0.92rem] font-medium transition hover:border-ink/40 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-ice/40">
                    {p.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        <div aria-live="polite" data-reveal style={{ ['--d' as string]: '120ms' }}>
          <div key={id} className="stage-in grain relative overflow-hidden rounded-[2rem] bg-ink p-6 text-white sm:p-10">
            <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ice/30 blur-[90px]" />
            <p className="eyebrow relative text-ice">Suggested starting point · {profile.label}</p>
            {machine ? (
              <div className="relative mt-6 grid items-center gap-8 sm:grid-cols-[1fr_auto]">
                <div>
                  <p className="font-display text-[clamp(4.5rem,12vw,8rem)] font-extrabold leading-[0.8] tracking-tighter">
                    {machine.capacity}
                    <span className="ml-1 text-[0.32em] font-bold tracking-normal text-ice">kg</span>
                  </p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50">per 24 hours</p>
                </div>
                <div className="grid h-40 w-40 place-items-center rounded-3xl bg-white p-4 sm:h-44 sm:w-44">
                  <img src={machine.image} alt={`${machine.capacity}kg ice machine`} className="max-h-full w-auto object-contain mix-blend-multiply" loading="lazy" />
                </div>
              </div>
            ) : (
              <p className="relative mt-6 font-display text-[clamp(2.6rem,7vw,4.5rem)] font-extrabold leading-[0.9]">Let&rsquo;s plan it together.</p>
            )}
            <p className="relative mt-8 max-w-md text-lg leading-relaxed text-white/75">{profile.reason}</p>
            {machine && (
              <ul className="relative mt-6 flex flex-wrap gap-2">
                {machine.features.map((f) => (
                  <li key={f} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-white/70">{f}</li>
                ))}
              </ul>
            )}
            <div className="relative mt-9 flex flex-wrap gap-3">
              {machine ? (
                <button type="button" onClick={() => requestQuote(machine.quoteLabel)} className="btn-ice">
                  Quote the {machine.capacity}kg <ArrowRight size={18} aria-hidden />
                </button>
              ) : (
                <a href="#startups" className="btn-ice">
                  Get startup advice <ArrowRight size={18} aria-hidden />
                </a>
              )}
              <a
                href={whatsappLink(`Hello Frozen Solutions, I run a ${profile.label.toLowerCase()} and would like advice on the right ice machine capacity.`)}
                target="_blank"
                rel="noopener"
                className="btn-ghost"
              >
                <MessageCircle size={18} aria-hidden /> Ask on WhatsApp
              </a>
            </div>
          </div>
          <p className="mt-4 text-sm text-ink/50">Guidance based on typical demand. Your exact capacity depends on your space and trading hours.</p>
        </div>
      </div>
    </section>
  );
}
