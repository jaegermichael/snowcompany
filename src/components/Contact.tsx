import { useState, type FormEvent } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from 'lucide-react';
import { business, businessTypes, productOptions } from '../data/site';
import { useQuote } from '../lib/quote';
import { composeEnquiry, whatsappLink } from '../lib/whatsapp';

export default function Contact() {
  const { product, setProduct } = useQuote();
  const [status, setStatus] = useState('');

  const collect = (form: HTMLFormElement) => {
    const d = new FormData(form);
    return composeEnquiry('I would like a quote or consultation.', {
      Name: String(d.get('name') ?? ''),
      Phone: String(d.get('phone') ?? ''),
      Email: String(d.get('email') ?? ''),
      'Business type': String(d.get('business') ?? ''),
      Product: String(d.get('product') ?? ''),
      Message: String(d.get('message') ?? ''),
      'Interested in financing': d.get('financing') ? 'Yes' : undefined,
    });
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const via = (e.nativeEvent as SubmitEvent).submitter?.getAttribute('value');
    const msg = collect(form);
    if (via === 'email') {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Quote request')}&body=${encodeURIComponent(msg)}`;
      setStatus('Your email app opened with the enquiry. Press send there to reach us.');
    } else {
      window.open(whatsappLink(msg), '_blank', 'noopener');
      setStatus('WhatsApp opened with your enquiry. Press send there to reach us.');
    }
  };

  const details = [
    { icon: Phone, label: 'Phone', value: business.phoneDisplay, href: business.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: business.phoneDisplay, href: whatsappLink() },
    { icon: Mail, label: 'Email', value: business.email, href: `mailto:${business.email}` },
    { icon: MapPin, label: 'Address', value: `${business.location}. ${business.coverage}.` },
  ];

  return (
    <section id="contact" className="grain relative isolate overflow-hidden bg-ink py-24 text-white sm:py-32">
      <div aria-hidden className="absolute -right-40 top-0 -z-10 h-[40rem] w-[40rem] rounded-full bg-ice/20 blur-[150px]" />
      <div className="shell grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="eyebrow text-ice" data-reveal>Contact us</p>
          <h2 className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-extrabold leading-[0.95]" data-reveal>
            Request a quote or consultation.
          </h2>
          <ul className="mt-12 space-y-6" data-reveal>
            {details.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-ice">
                  <Icon size={19} aria-hidden />
                </span>
                <span>
                  <span className="label mb-0.5 text-white/45">{label}</span>
                  {href ? (
                    <a href={href} className="text-lg font-medium underline-offset-4 hover:text-ice hover:underline" {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
                      {value}
                    </a>
                  ) : (
                    <span className="text-lg font-medium">{value}</span>
                  )}
                </span>
              </li>
            ))}
            <li className="flex gap-4">
              <span className="glass grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-ice">
                <Clock size={19} aria-hidden />
              </span>
              <span>
                <span className="label mb-0.5 text-white/45">Business hours</span>
                {business.hours.map((h) => (
                  <span key={h.days} className="block text-lg font-medium">
                    {h.days}: <span className="text-white/70">{h.time}</span>
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <form onSubmit={submit} noValidate className="glass rounded-[2rem] p-6 sm:p-9" data-reveal aria-describedby="contact-note">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="c-name" className="label text-white/55">Full name *</label>
              <input id="c-name" name="name" required autoComplete="name" className="field-dark" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="c-phone" className="label text-white/55">Phone / WhatsApp *</label>
              <input id="c-phone" name="phone" type="tel" required autoComplete="tel" minLength={7} className="field-dark" placeholder="+263 ..." />
            </div>
            <div>
              <label htmlFor="c-email" className="label text-white/55">Email</label>
              <input id="c-email" name="email" type="email" autoComplete="email" className="field-dark" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="c-business" className="label text-white/55">Business type</label>
              <select id="c-business" name="business" className="field-dark" defaultValue="">
                <option value="" className="text-ink">Select type...</option>
                {businessTypes.map((b) => (
                  <option key={b} className="text-ink">{b}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-product" className="label text-white/55">Product interest *</label>
              <select id="contact-product" name="product" required className="field-dark" value={product} onChange={(e) => setProduct(e.target.value)}>
                <option value="" className="text-ink">Select product...</option>
                {Object.entries(productOptions).map(([group, items]) => (
                  <optgroup key={group} label={group} className="text-ink">
                    {items.map((p) => (
                      <option key={p} className="text-ink">{p}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="c-message" className="label text-white/55">Message</label>
              <textarea id="c-message" name="message" rows={4} className="field-dark resize-none" placeholder="Tell us about your needs..." />
            </div>
          </div>
          <label className="mt-5 flex cursor-pointer items-center gap-3 text-white/70">
            <input type="checkbox" name="financing" className="h-5 w-5 accent-ice" />
            I&rsquo;m interested in business financing options
          </label>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 [&_.btn]:whitespace-nowrap">
            <button type="submit" value="whatsapp" className="btn-ice">
              <Send size={17} aria-hidden /> Send via WhatsApp
            </button>
            <button type="submit" value="email" className="btn-ghost">
              <Mail size={17} aria-hidden /> Send by email
            </button>
          </div>
          <p id="contact-note" className="mt-4 text-sm text-white/45">Your details go straight to our team. Nothing is stored on this website.</p>
          <p role="status" className="mt-2 min-h-[1.25rem] text-sm text-ice">{status}</p>
        </form>
      </div>
    </section>
  );
}
