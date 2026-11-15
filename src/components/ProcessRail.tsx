import { useEffect, useRef } from 'react';
import { steps } from '../data/site';

// Scroll-linked process rail (Mikey recipe 21). A reading line at 55% of the
// viewport drives the fill and marker between the first and last node centres;
// nodes the line has passed become active. Reversing scroll reverses it.
export default function ProcessRail() {
  const root = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = root.current;
    if (!list) return;
    const nodes = Array.from(list.querySelectorAll<HTMLElement>('[data-node]'));
    let frame = 0;
    const paint = () => {
      frame = 0;
      const listTop = list.getBoundingClientRect().top;
      const centres = nodes.map((n) => {
        const r = n.getBoundingClientRect();
        return r.top + r.height / 2;
      });
      const start = centres[0];
      const end = centres[centres.length - 1];
      const reading = window.innerHeight * 0.55;
      const p = Math.min(1, Math.max(0, (reading - start) / Math.max(1, end - start)));
      list.style.setProperty('--rail-start', `${start - listTop}px`);
      list.style.setProperty('--rail-length', `${end - start}px`);
      list.style.setProperty('--rail-p', String(p));
      nodes.forEach((n, i) => n.closest('li')?.toggleAttribute('data-active', centres[i] <= reading + 1));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(list);
    document.fonts?.ready.then(schedule);
    paint();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      ro.disconnect();
    };
  }, []);

  return (
    <ol ref={root} className="process-rail relative mt-12 max-w-3xl">
      <span aria-hidden className="process-rail__track" />
      <span aria-hidden className="process-rail__fill" />
      <span aria-hidden className="process-rail__dot" />
      {steps.map((s, i) => (
        <li key={s.title} className="process-rail__step relative grid grid-cols-[3.5rem_1fr] gap-5 pb-14 last:pb-0 sm:grid-cols-[5rem_1fr] sm:gap-8">
          <span data-node className="process-rail__node grid h-14 w-14 place-items-center rounded-full border border-ink/15 bg-white font-display text-xl font-extrabold sm:h-[4.5rem] sm:w-[4.5rem] sm:text-2xl">
            0{i + 1}
          </span>
          <div className="pt-2 sm:pt-4">
            <h4 className="font-display text-2xl font-bold sm:text-3xl">{s.title}</h4>
            <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink/65">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
