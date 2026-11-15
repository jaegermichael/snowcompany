import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { startupInterests } from '../data/site';
import { composeEnquiry, whatsappLink } from '../lib/whatsapp';

const points = ['Business planning guidance', 'Right-sized equipment selection', 'Installation & training included', 'Ongoing technical support'];

export default function Startups() {
  const [sent, setSent] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const d = new FormData(form);
    const msg = composeEnquiry('I would like business startup advice.', {
      Name: String(d.get('name')),
      Phone: String(d.get('phone')),
      Interest: String(d.get('interest')),
    });
    window.open(whatsappLink(msg), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="startups" className="relative overflow-hidden bg-ice py-24 text-ink sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2 select-none font-display text-[clamp(10rem,28vw,24rem)] font-extrabold leading-none tracking-tighter text-white/25">
        ice.
      </div>
      <div className="shell relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow" data-reveal>For entrepreneurs</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
            Your next chapter starts with the right machine.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75" data-reveal>
            Looking to start an ice-selling or ice cream business? Frozen Solutions provides the machines, guidance, and support to launch a profitable cold-production operation.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2" data-reveal>
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 font-medium">
                <CheckCircle2 size={20} aria-hidden /> {p}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={submit} noValidate className="rounded-[2rem] bg-ink p-6 text-white shadow-[0_40px_80px_-40px_rgba(7,16,30,0.8)] sm:p-9" data-reveal>
          <h3 className="font-display text-2xl font-bold">Get business startup advice</h3>
          <p className="mt-2 text-sm text-white/55">Sends your details to our team on WhatsApp.</p>
          <div className="mt-7 grid gap-4">
            <div>
              <label htmlFor="su-name" className="label text-white/55">Your name</label>
              <input id="su-name" name="name" required autoComplete="name" className="field-dark" placeholder="Full name" />
            </div>
            <div>
              <label htmlFor="su-phone" className="label text-white/55">Phone / WhatsApp</label>
              <input id="su-phone" name="phone" type="tel" required autoComplete="tel" minLength={7} className="field-dark" placeholder="+263 ..." />
            </div>
            <div>
              <label htmlFor="su-interest" className="label text-white/55">Business interest</label>
              <select id="su-interest" name="interest" required className="field-dark" defaultValue="">
                <option value="" disabled className="text-ink">Choose one...</option>
                {startupInterests.map((s) => (
                  <option key={s} className="text-ink">{s}</option>
                ))}
              </select>
            </div>
          </div>
          <button type="submit" className="btn-ice mt-7 w-full">
            <Send size={17} aria-hidden /> Send request
          </button>
          <p role="status" className="mt-4 min-h-[1.25rem] text-center text-sm text-ice">
            {sent ? 'WhatsApp opened with your request. Press send there to reach us.' : ''}
          </p>
        </form>
      </div>
    </section>
  );
}
