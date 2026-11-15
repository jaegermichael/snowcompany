import { business } from '../data/site';

/** Builds a wa.me link with a prefilled message. Enquiries go to the business WhatsApp line. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${business.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Turns labelled form fields into a readable WhatsApp message, skipping empty values. */
export function composeEnquiry(title: string, fields: Record<string, string | undefined>): string {
  const lines = Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v!.trim()}`);
  return [`Hello ${business.name}, ${title}`, '', ...lines].join('\n');
}
