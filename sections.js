/* Full-site sections: sticky nav, active links, filters, reveal, count-up */
(() => {
  'use strict';
  document.documentElement.classList.add('js');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Sticky nav shadow
  const nav = document.querySelector('.nav');
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section link
  const links = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const targets = links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    targets.forEach((t) => spy.observe(t));
  }

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const sibs = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
        el.style.transitionDelay = Math.min(sibs.indexOf(el), 5) * 70 + 'ms';
        el.classList.add('in');
        io.unobserve(el);
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  }

  // Count-up stats
  const counters = document.querySelectorAll('[data-count]');
  const run = (el) => {
    const end = +el.dataset.count;
    const start = end > 1900 ? end - 30 : 0;
    const t0 = performance.now();
    const dur = 1100;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = Math.round(start + (end - start) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!reduced && 'IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { run(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  }

  // Project filters
  const filters = document.querySelectorAll('.filter');
  const projects = document.querySelectorAll('.proj');
  filters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const f = btn.dataset.f;
      filters.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', String(on));
      });
      projects.forEach((p) => {
        const show = f === 'all' || p.dataset.cat.split(' ').includes(f);
        p.hidden = !show;
        if (show) p.classList.add('in');
      });
    });
  });
})();

/* Copy protection: images can't be dragged or right-click saved; copied text carries attribution */
(() => {
  'use strict';
  document.addEventListener('contextmenu', (e) => { if (e.target.closest('img, .gun-wrap, .slip')) e.preventDefault(); });
  document.addEventListener('dragstart', (e) => { if (e.target.tagName === 'IMG') e.preventDefault(); });
  document.addEventListener('copy', (e) => {
    const sel = String(window.getSelection() || '');
    if (sel.length < 60 || !e.clipboardData) return;
    e.preventDefault();
    e.clipboardData.setData('text/plain', sel + '\n\n— © Sarwar Ali · https://sarwar.theskilltek.com');
  });
})();
