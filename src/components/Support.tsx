import { Award, Leaf, Wrench, Truck, Settings2, ShieldCheck, Package, BadgeDollarSign } from 'lucide-react';
import { services, steps } from '../data/site';
import { trackPointer } from '../lib/pointer';

const icons = [Award, Leaf, Wrench, Truck, Settings2, ShieldCheck, Package, BadgeDollarSign];

export default function Support() {
  return (
    <section id="support" className="bg-frost py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow text-ice-deep" data-reveal>Why choose us</p>
            <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
              Here for the long run.
            </h2>
          </div>
          <p className="max-w-lg text-lg leading-relaxed text-ink/65 lg:justify-self-end" data-reveal>
            More than equipment supply: a complete partnership covering installation, training, maintenance and spare parts nationwide.
          </p>
        </div>

        <ul className="mt-14 grid overflow-hidden rounded-[2rem] border border-ink/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[i];
            return (
              <li
                key={s.title}
                onPointerMove={trackPointer}
                className="frost-hover border-b border-ink/10 p-7 sm:[&:nth-child(odd)]:border-r lg:border-r lg:[&:nth-child(4n)]:border-r-0 lg:[&:nth-last-child(-n+4)]:border-b-0"
                data-reveal
                style={{ ['--d' as string]: `${(i % 4) * 70}ms` }}
              >
                <Icon size={26} strokeWidth={1.6} className="text-ice-deep" aria-hidden />
                <h3 className="mt-6 font-display text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{s.text}</p>
              </li>
            );
          })}
        </ul>

        <div className="mt-24">
          <p className="eyebrow text-ice-deep" data-reveal>Simple process</p>
          <h3 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl" data-reveal>3 easy steps to equip your business</h3>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-[1.75rem] bg-ink p-8 text-white" data-reveal style={{ ['--d' as string]: `${i * 100}ms` }}>
                <span className="font-display text-6xl font-extrabold leading-none text-ice">0{i + 1}</span>
                <h4 className="mt-8 font-display text-2xl font-bold">{s.title}</h4>
                <p className="mt-3 leading-relaxed text-white/60">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
