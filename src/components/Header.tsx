import MikeyIsland from './mikey/MikeyIsland';
import { business } from '../data/site';

// Mikey Island: one continuous surface that expands into the site index,
// contracts after the hero and shows the active chapter.
const links = [
  { label: 'Find a machine', href: '#finder', detail: 'Capacity by business type' },
  { label: 'Ice machines', href: '#ice-machines', detail: '60 to 120kg per 24 hours' },
  { label: 'Ice cream', href: '#ice-cream', detail: 'Soft serve, gelato, batch' },
  { label: 'Start a business', href: '#startups', detail: 'Startup guidance' },
  { label: 'Support', href: '#support', detail: 'Install, train, maintain' },
  { label: 'FAQ', href: '#faq', detail: 'Common questions' },
];

export default function Header() {
  return (
    <MikeyIsland
      brand={<img src="/brand/logo-white.svg" alt={business.name} width={128} height={34} />}
      homeLabel={`${business.fullName} home`}
      homeHref="#top"
      context="Ice & ice cream equipment · Harare"
      links={links}
      contact={{ label: 'Get a quote', href: '#contact' }}
    />
  );
}
