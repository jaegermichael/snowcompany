import { useEffect } from 'react';

export default function MotionEffects() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let observer;
    let targets = [];
    const clear = () => {
      observer?.disconnect();
      targets.forEach(el => {
        el.classList.remove('reveal-ready', 'revealed');
        el.style.removeProperty('--reveal-delay');
      });
    };
    const setup = () => {
      clear();
      if (preference.matches || !('IntersectionObserver' in window)) return;
      targets = [...document.querySelectorAll('.service-strip article, .collection-heading, .collection-item, .card-hover, #about .grid > div, #industries .grid > div, #services .grid > div, #contact .grid > div, #main-content > section > div > .text-center')];
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        });
      }, { threshold: 0.08 });
      targets.forEach((el, i) => {
        el.classList.add('reveal-ready');
        el.style.setProperty('--reveal-delay', `${(i % 3) * 70}ms`);
        observer.observe(el);
      });
    };
    setup();
    preference.addEventListener('change', setup);
    return () => { clear(); preference.removeEventListener('change', setup); };
  }, []);
  return null;
}
