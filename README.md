# IMPROX MEDIA website

Static website for IMPROX MEDIA LLC, built with Astro, GSAP and Lenis.

## Develop

    npm install
    npm run dev        # http://localhost:4321

## Build

    npm run build      # writes the static site to dist/

## Before launch

- Replace the domain in `astro.config.mjs` if it changes; canonical URLs and the sitemap use it.
- Add approved client testimonials to `src/data/site.js` (the section stays hidden until then).
- Have a lawyer review the Privacy Policy, Terms of Service and Cookie Policy.

Fonts are self-hosted from `public/fonts` under the SIL Open Font License (see the licence files there).
