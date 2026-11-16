import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
gsap.registerPlugin(ScrollTrigger);

// Dev-only escape hatch for testing animations on machines set to "reduce motion": add ?motion=on.
// import.meta.env.DEV is false in production builds, so visitors' preference is always respected there.
const forceMotion = import.meta.env.DEV && location.search.includes('motion=on');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches && !forceMotion;
if (forceMotion) document.documentElement.dataset.forceMotion = '1';
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

// nav state
const nav = $('#nav');
const bar = $('#progress');
const onScroll = () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
  if (bar) { const m = document.documentElement.scrollHeight - innerHeight; bar.style.transform = 'scaleX(' + (m > 0 ? Math.min(1, scrollY / m) : 0) + ')'; }
};
addEventListener('scroll', onScroll, { passive: true }); onScroll();

// form (demo only: never claims anything was sent)
$('#audit-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.target, msg = $('#form-msg');
  if (!f.name.value.trim() || !/^\S+@\S+\.\S+$/.test(f.email.value)) { msg.style.color = '#ff8a8a'; msg.textContent = 'Please enter your name and a valid email.'; return; }
  // No backend yet: open the visitor's email app with the request pre-filled. We never claim it was sent.
  const v = (n) => (f.elements[n]?.value || '').trim();
  const body = ['Name: ' + v('name'), 'Email: ' + v('email'), 'Channel: ' + (v('channel') || 'not provided'), '', v('message')].join('\n');
  msg.style.color = '';
  msg.textContent = 'Opening your email app. Please press send there to complete your request.';
  location.href = 'mailto:Connect@improxmedia.com?subject=' + encodeURIComponent('Free YouTube growth audit request') + '&body=' + encodeURIComponent(body);
});

// card spotlight follows the pointer (fine pointers only)
if (matchMedia('(pointer:fine)').matches) $$('.svc,.step,.num,.plan,.case,.quote').forEach((c) => c.addEventListener('pointermove', (e) => {
  const r = c.getBoundingClientRect(); c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
}));

// before/after slider
const range = $('#cmp-range'), cmp = $('#compare');
if (range && cmp) { const set = () => cmp.style.setProperty('--pos', range.value + '%'); range.addEventListener('input', set); set(); }

const finalCounts = () => $$('[data-count]').forEach((el) => { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });

if (reduce) {
  finalCounts();
  // reduced motion: the spine is simply shown full
} else {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
  $$('a[href^="#"]').forEach((a) => a.addEventListener('click', (e) => {
    const id = a.getAttribute('href'); if (id.length > 1 && $(id)) { e.preventDefault(); lenis.scrollTo($(id), { offset: -60 }); }
  }));

  // headline word reveals: hero on load, section headings as they scroll in
  const splitWords = (h) => {
    h.setAttribute('aria-label', h.textContent.replace(/\s+/g, ' ').trim());
    const walk = (node) => [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((t) => {
          if (!t.trim()) { frag.append(t); return; }
          const w = document.createElement('span'); w.className = 'w'; w.setAttribute('aria-hidden', 'true');
          const i = document.createElement('span'); i.textContent = t; w.append(i); frag.append(w);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) walk(n);
    });
    walk(h);
    return $$('.w > span', h);
  };
  const h1 = $('[data-split]');
  if (h1) gsap.from(splitWords(h1), { yPercent: 115, rotate: 4, duration: 1.1, ease: 'expo.out', stagger: 0.07, delay: 0.15 });
  $$('main h2').forEach((h) => {
    h.classList.remove('reveal'); gsap.set(h, { opacity: 1, y: 0 });
    const words = splitWords(h);
    gsap.set(words, { yPercent: 115 });
    ScrollTrigger.create({ trigger: h, start: 'top 88%', once: true, onEnter: () => gsap.to(words, { yPercent: 0, duration: 1, ease: 'expo.out', stagger: 0.05 }) });
  });

  // generic reveals
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%', once: true,
    onEnter: (els) => gsap.to(els, { opacity: 1, y: 0, duration: 1, ease: 'expo.out', stagger: 0.1 }),
  });

  // counters
  $$('[data-count]').forEach((el) => {
    const end = +el.dataset.count, suf = el.dataset.suffix || '', dec = +(el.dataset.decimals || 0), o = { v: 0 };
    ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => gsap.to(o, { v: end, duration: 2, ease: 'power3.out', onUpdate: () => (el.textContent = o.v.toFixed(dec) + suf) }) });
  });

  // player: grows into view and settles
  gsap.fromTo('#player', { scale: 0.9, y: 60, opacity: 0.4 }, { scale: 1, y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: '#player', start: 'top 95%', end: 'top 45%', scrub: true } });

  // sparkline draw
  const sp = $('#spark');
  if (sp) { const L = sp.getTotalLength(); gsap.set(sp, { strokeDasharray: L, strokeDashoffset: L }); gsap.to(sp, { strokeDashoffset: 0, duration: 2.2, ease: 'power2.out', delay: 0.9 }); }

  // process spine draws with scroll
  const draw = $('#spine-draw');
  if (draw) gsap.fromTo(draw, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#steps', start: 'top 70%', end: 'bottom 70%', scrub: true } });

  // hero glow parallax
  const heroEl = $('.hero, .page-hero');
  if (heroEl) gsap.to('.hero-bg', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: heroEl, start: 'top top', end: 'bottom top', scrub: true } });

  // magnetic buttons (fine pointers only)
  if (matchMedia('(pointer:fine)').matches) $$('[data-magnetic]').forEach((b) => {
    const mx = gsap.quickTo(b, 'x', { duration: 0.5, ease: 'power3' }), my = gsap.quickTo(b, 'y', { duration: 0.5, ease: 'power3' });
    b.addEventListener('mousemove', (e) => { const r = b.getBoundingClientRect(); mx((e.clientX - r.left - r.width / 2) * 0.25); my((e.clientY - r.top - r.height / 2) * 0.35); });
    b.addEventListener('mouseleave', () => { mx(0); my(0); });
  });
}
