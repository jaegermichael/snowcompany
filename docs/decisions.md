# Decisions

- **Content source:** every claim/value is carried over from the previous live site (commit eb6a911), centralised in `src/data/site.ts`. No new specs, prices or claims.
- **Testimonials removed.** The three named testimonials on the old site have no recorded source; they should only return with client-confirmed quotes.
- **"24/7" and "100% Zimbabwe coverage" stat badges dropped** (unverified). "24/7 operation ready" stays as a 120kg feature because it was the client's product copy.
- **Forms → WhatsApp/email hand-off** instead of a fake submit, because there is no backend. Nothing is stored on the site.
- **Capacity finder mapping** follows the FAQ answer (cafes 60kg, hotels/bars 80–100kg, larger 120kg+) and the product "ideal for" lines; ice-selling startups get "talk to us" rather than a number.
- **Hero uses load animation, not scroll reveal**, so above-the-fold content never depends on IntersectionObserver.
