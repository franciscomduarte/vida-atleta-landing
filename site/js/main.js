// Vida Atleta: comportamento da landing. Sem bibliotecas. CSS faz o resto.
(() => {
  const root = document.documentElement;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Revelações "uma vez" (friso, máscara do hero, fluxo do dado, fragmentos, faixa de parciais)
  const once = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !reduce.matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -8% 0px' });
    once.forEach((el) => io.observe(el));
  } else {
    once.forEach((el) => el.classList.add('is-in'));
  }

  // M4: troca de tela do celular por passo (IntersectionObserver, sem scroll-hijacking)
  const prova = document.querySelector('.prova');
  const steps = document.querySelectorAll('.step');
  if (prova && steps.length && 'IntersectionObserver' in window) {
    const so = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) prova.dataset.step = e.target.dataset.step;
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    steps.forEach((s) => so.observe(s));
  }

  // Abas Gráfico | Tabela (parciais)
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.classList.toggle('is-on', on);
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
    });
    tab.addEventListener('keydown', (ev) => {
      if (ev.key !== 'ArrowRight' && ev.key !== 'ArrowLeft') return;
      const list = [...tabs];
      const next = list[(list.indexOf(tab) + (ev.key === 'ArrowRight' ? 1 : list.length - 1)) % list.length];
      next.focus(); next.click();
    });
  });

  // Menu em folha (mobile)
  const btn = document.querySelector('.menu-btn');
  const sheet = document.getElementById('menu-sheet');
  if (btn && sheet) {
    const close = () => { sheet.hidden = true; btn.setAttribute('aria-expanded', 'false'); btn.focus(); };
    const open = () => {
      sheet.hidden = false; btn.setAttribute('aria-expanded', 'true');
      sheet.querySelector('a').focus();
    };
    btn.addEventListener('click', () => (sheet.hidden ? open() : close()));
    sheet.addEventListener('click', (e) => { if (e.target === sheet || e.target.closest('a') || e.target.closest('.sheet__close')) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) close(); });
  }
})();

// ---- movimento: entradas direcionais, palavras do H1, parallax, tilt e pausa fora da tela
(() => {
  const ok = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  if (!ok) return;
  const wired = [
    ['.hero .eyebrow, .hero .lead, .hero__actions, .hero .tasks, .hero .trail', 'left', 90, 380],
    ['.problem__copy > *', 'left', 90, 0], ['.scene', 'right', 0, 200],
    ['.prova .section-head > *', 'left', 80, 0], ['.step > *:not(.step__num)', 'left', 70, 0],
    ['.tempo__copy > *', 'left', 80, 0], ['.tempo__pane', 'right', 0, 150],
    ['.depois .section-head > *', 'left', 80, 0], ['.lane', 'up', 150, 0],
    ['.fonte .section-head > *', 'left', 80, 0], ['.ev', 'scale', 110, 0],
    ['.nova .section-head > *', 'left', 80, 0], ['.raias li', 'left', 90, 0],
    ['.faq__head > *', 'left', 80, 0], ['.qa', 'fade', 55, 0],
    ['.launch__in > *', 'left', 100, 0],
  ];
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
  wired.forEach(([sel, type, step, base]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      if (el.hasAttribute('data-reveal') || el.hasAttribute('data-anim')) return;
      el.setAttribute('data-anim', type);
      el.style.setProperty('--d', `${base + i * step}ms`);
      io.observe(el);
    });
  });

  // H1: palavras entram pela raia (só transform; o texto já está visível, sem atrasar o LCP)
  const h1 = document.querySelector('.hero h1');
  if (h1 && !h1.querySelector('.w')) {
    const words = h1.textContent.trim().split(/\s+/);
    h1.innerHTML = words.map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`).join(' ');
  }

  // água só anima quando a seção está na tela
  const live = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('is-live', e.isIntersecting)), { rootMargin: '10% 0px' });
  document.querySelectorAll('.hero,.problem,.prova,.tempo,.depois,.fonte,.nova,.faq,.launch').forEach((s) => live.observe(s));

  // parallax vertical suave: posições em cache (sem ler layout a cada quadro); desligado no mobile
  const wide = window.matchMedia('(min-width: 768px)');
  const items = [...document.querySelectorAll('[data-parallax]')].map((el) => ({ el, k: parseFloat(el.dataset.parallax) || 0, box: el.closest('section'), mid: 0 }));
  const measure = () => items.forEach((it) => { const r = it.box.getBoundingClientRect(); it.mid = r.top + window.scrollY + r.height / 2; });
  const vis = new Set();
  const vio = new IntersectionObserver((es) => es.forEach((e) => { e.isIntersecting ? vis.add(e.target) : vis.delete(e.target); }), { rootMargin: '20% 0px' });
  new Set(items.map((i) => i.box)).forEach((bx) => vio.observe(bx));
  let ticking = false;
  const run = () => {
    ticking = false;
    if (!wide.matches) return;
    const mid = window.scrollY + window.innerHeight / 2;
    items.forEach(({ el, k, box, mid: m }) => { if (vis.has(box)) el.style.transform = `translate3d(0,${((m - mid) * k * -1).toFixed(1)}px,0)`; });
  };
  measure();
  window.addEventListener('load', () => { measure(); run(); });
  window.addEventListener('resize', () => { measure(); if (!wide.matches) items.forEach((it) => { it.el.style.transform = ''; }); run(); });
  window.addEventListener('scroll', () => { if (!ticking && wide.matches) { ticking = true; requestAnimationFrame(run); } }, { passive: true });
  run();

  // inclinação do celular do hero (só com mouse)
  const hp = document.querySelector('.hero__phone');
  if (hp && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
    hp.addEventListener('pointermove', (e) => { const r = hp.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - 0.5; const y = (e.clientY - r.top) / r.height - 0.5; hp.style.setProperty('--ry', `${(x * 9).toFixed(2)}deg`); hp.style.setProperty('--rx', `${(-y * 6).toFixed(2)}deg`); });
    hp.addEventListener('pointerleave', () => { hp.style.setProperty('--ry', '0deg'); hp.style.setProperty('--rx', '0deg'); });
  }
})();
