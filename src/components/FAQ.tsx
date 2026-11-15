import { useState } from 'react';
import { Plus, MessageCircle } from 'lucide-react';
import { faqs } from '../data/site';
import { whatsappLink } from '../lib/whatsapp';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-24 sm:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow text-ice-deep" data-reveal>FAQ</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
            Questions, answered.
          </h2>
          <p className="mt-6 max-w-sm text-lg text-ink/60" data-reveal>Can&rsquo;t see yours? Ask the team directly.</p>
          <a href={whatsappLink('Hello Frozen Solutions, I have a question about your equipment.')} target="_blank" rel="noopener" className="btn-line mt-8" data-reveal>
            <MessageCircle size={18} aria-hidden /> Ask on WhatsApp
          </a>
        </div>

        <ul className="border-t border-ink/10">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <li key={f.q} className="border-b border-ink/10" data-reveal style={{ ['--d' as string]: `${i * 60}ms` }}>
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl font-semibold transition hover:text-ice-deep sm:text-2xl"
                  >
                    {f.q}
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border transition duration-300 ${isOpen ? 'rotate-45 border-ink bg-ink text-white' : 'border-ink/20'}`}>
                      <Plus size={18} aria-hidden />
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <p className="max-w-2xl pb-7 text-lg leading-relaxed text-ink/65">{f.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
