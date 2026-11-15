import { Snowflake } from 'lucide-react';
import { industries } from '../data/site';

export default function IndustryBand() {
  const row = (dup: boolean) =>
    industries.map((name) => (
      <li key={`${dup ? 'b' : 'a'}-${name}`} className={`flex shrink-0 items-center gap-6 pr-6 ${dup ? 'dup' : ''}`} aria-hidden={dup || undefined}>
        <span className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">{name}</span>
        <Snowflake size={18} className="text-ice-deep" aria-hidden />
      </li>
    ));
  return (
    <section aria-label="Industries we equip across Zimbabwe" className="marquee-wrap overflow-hidden border-b border-ink/10 bg-ice-mist py-6 text-ink">
      <ul className="marquee">
        {row(false)}
        {row(true)}
      </ul>
    </section>
  );
}
