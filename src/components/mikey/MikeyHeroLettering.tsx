import type { CSSProperties } from 'react';
import './mikey-hero-lettering.css';

// Decorative duplication only. Supply the readable brand/offer elsewhere in HTML.
export default function MikeyHeroLettering({ lines, style }: { lines: string[]; style?: CSSProperties }) {
  return <div className="mikey-hero-lettering" aria-hidden="true" style={style}>{lines.map((line, index) => <span key={`${index}-${line}`}>{line}</span>)}</div>;
}
