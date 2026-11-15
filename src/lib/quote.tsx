import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

interface QuoteState {
  product: string;
  setProduct: (p: string) => void;
  /** Preselects a product in the contact form and scrolls to it. */
  requestQuote: (product: string) => void;
}

const QuoteContext = createContext<QuoteState | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState('');
  const requestQuote = useCallback((p: string) => {
    setProduct(p);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('contact')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
    window.setTimeout(() => document.getElementById('contact-product')?.focus({ preventScroll: true }), reduce ? 0 : 600);
  }, []);
  return <QuoteContext.Provider value={{ product, setProduct, requestQuote }}>{children}</QuoteContext.Provider>;
}

export function useQuote(): QuoteState {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used inside QuoteProvider');
  return ctx;
}
