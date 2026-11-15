import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import './mikey-island.css';

export type IslandLink = { label: string; href: string; detail?: string };
export type MikeyIslandProps = {
  brand: ReactNode;
  homeLabel: string;
  homeHref?: string;
  context: string;
  links: IslandLink[];
  contact?: IslandLink;
  heroSelector?: string;
  currentHref?: string;
};

// Retarget without resetting velocity. No animation dependency is required.
export default function MikeyIsland({ brand, homeLabel, homeHref = '#', context, links, contact, heroSelector = '[data-mikey-hero]', currentHref }: MikeyIslandProps) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [active, setActive] = useState('');
  const [width, setWidth] = useState(570);
  const [panelHeight, setPanelHeight] = useState(0);
  const [reduced, setReduced] = useState(false);
  const container = useRef<HTMLElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const frame = useRef(0);
  const state = useRef({ width: 570, height: 66, vx: 0, vy: 0 });
  const panelId = useId();
  const linkKey = JSON.stringify(links.map(({ label, href }) => [label, href]));

  useEffect(() => {
    const resize = () => setWidth(window.innerWidth);
    resize(); window.addEventListener('resize', resize);
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    const preference = () => setReduced(media.matches);
    preference(); media.addEventListener('change', preference);
    const measure = new ResizeObserver(() => setPanelHeight(panel.current?.scrollHeight || 0));
    if (panel.current) measure.observe(panel.current);
    return () => { window.removeEventListener('resize', resize); media.removeEventListener('change', preference); measure.disconnect(); };
  }, []);

  useEffect(() => {
    const hero = document.querySelector(heroSelector);
    const observer = new IntersectionObserver(([entry]) => setCompact(!entry.isIntersecting));
    if (hero) observer.observe(hero);
    return () => observer.disconnect();
  }, [heroSelector]);

  useEffect(() => {
    const items: IslandLink[] = JSON.parse(linkKey).map(([label, href]: [string, string]) => ({ label, href }));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) setActive(`#${entry.target.id}`);
    }), { rootMargin: '-15% 0px -65% 0px' });
    items.forEach(({ href }) => {
      if (href.startsWith('#') && href.length > 1) {
        const element = document.getElementById(href.slice(1));
        if (element) observer.observe(element);
      }
    });
    return () => observer.disconnect();
  }, [linkKey]);

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (open && event.key === 'Escape') { setOpen(false); trigger.current?.focus(); }
    };
    const outside = (event: PointerEvent) => {
      if (open && !container.current?.contains(event.target as Node)) setOpen(false);
    };
    const leave = (event: FocusEvent) => {
      if (open && event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener('keydown', escape);
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', leave);
    return () => { document.removeEventListener('keydown', escape); document.removeEventListener('pointerdown', outside); document.removeEventListener('focusin', leave); };
  }, [open]);

  useEffect(() => {
    cancelAnimationFrame(frame.current);
    const targetWidth = Math.max(0, Math.min(width - 32, open ? 570 : compact ? 390 : 570));
    const targetHeight = open ? 66 + panelHeight : 66;
    const value = state.current;
    const paint = () => {
      container.current?.style.setProperty('--mi-width', `${value.width}px`);
      container.current?.style.setProperty('--mi-height', `${value.height}px`);
    };
    if (reduced) { Object.assign(value, { width: targetWidth, height: targetHeight, vx: 0, vy: 0 }); paint(); return; }
    let previous = performance.now();
    const tick = (time: number) => {
      const dt = Math.min((time - previous) / 1000, .025); previous = time;
      value.vx += ((targetWidth - value.width) * 280 - value.vx * 34) * dt;
      value.vy += ((targetHeight - value.height) * 280 - value.vy * 34) * dt;
      value.width += value.vx * dt; value.height += value.vy * dt; paint();
      if (Math.abs(targetWidth - value.width) + Math.abs(targetHeight - value.height) + Math.abs(value.vx) + Math.abs(value.vy) > .2) frame.current = requestAnimationFrame(tick);
      else { Object.assign(value, { width: targetWidth, height: targetHeight, vx: 0, vy: 0 }); paint(); }
    };
    frame.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame.current);
  }, [open, compact, width, panelHeight, reduced]);

  const activeHref = currentHref || active;
  const chapter = links.find(link => link.href === activeHref)?.label;
  return <header ref={container} className="mikey-island" data-open={open} data-compact={compact} aria-label="Floating navigation">
    <div className="mi-top">
      <a className="mi-brand" href={homeHref} aria-label={homeLabel} onClick={() => setOpen(false)}>{brand}</a>
      <span className="mi-context"><i/>{compact && chapter ? chapter : context}</span>
      <button ref={trigger} className="mi-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)}><span>{open ? 'Close' : 'Explore'}</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">{open ? <path d="m6 6 12 12M6 18 18 6"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}</svg></button>
    </div>
    <div className="mi-scroll" inert={!open} aria-hidden={!open} id={panelId}>
      <div ref={panel} className="mi-panel">
        <nav aria-label="Main navigation">{links.map((link, index) => <a key={link.href} href={link.href} aria-current={activeHref === link.href ? link.href.startsWith('#') ? 'location' : 'page' : undefined} onClick={() => setOpen(false)}><span className="mi-index">{String(index + 1).padStart(2, '0')}</span><span className="mi-link-copy"><strong>{link.label}</strong>{link.detail && <small>{link.detail}</small>}</span><span aria-hidden="true">↗</span></a>)}</nav>
        {contact && <a className="mi-contact" href={contact.href} onClick={() => setOpen(false)}>{contact.label}<span aria-hidden="true">↗</span></a>}
      </div>
    </div>
  </header>;
}
