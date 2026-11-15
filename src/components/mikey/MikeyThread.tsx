import { useEffect, useRef } from 'react';
import './mikey-thread.css';

// Mikey Thread: fixed hairline in the left gutter whose fill and marker follow
// normalised document scroll. One rAF write per scroll; no React renders.
export default function MikeyThread() {
  const rail = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    let frame = 0;
    const paint = () => {
      frame = 0;
      const s = document.scrollingElement || document.documentElement;
      const distance = s.scrollHeight - s.clientHeight;
      const p = distance > 0 ? Math.min(1, Math.max(0, s.scrollTop / distance)) : 0;
      el.style.setProperty('--mikey-progress', String(p));
      el.style.setProperty('--mikey-dot-y', `${p * el.getBoundingClientRect().height}px`);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(paint);
    };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const ro = new ResizeObserver(schedule);
    ro.observe(document.body);
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
    <div ref={rail} className="mikey-thread" aria-hidden="true">
      <span className="mikey-thread__track" />
      <span className="mikey-thread__fill" />
      <span className="mikey-thread__dot" />
    </div>
  );
}
