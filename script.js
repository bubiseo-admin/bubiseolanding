/* =================================================================
   부비서 랜딩 — 인터랙션 / 애니메이션
   ================================================================= */

(function () {
  'use strict';

  // ----- 1. 스크롤 시 nav 배경 강화 / 활성 메뉴 표시 -----
  const nav = document.getElementById('nav');
  const navLinks = nav ? nav.querySelectorAll('.nav__menu a') : [];
  const sections = ['top', 'home', 'property', 'cobrokerage', 'contract', 'customer', 'chat', 'schedule', 'settings', 'faq', 'desktop', 'cta']
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  // FAQ deep link — #faq-1 등 anchor 로 들어오면 해당 details 자동 open
  function openFaqFromHash() {
    const hash = window.location.hash;
    if (!hash || !hash.startsWith('#faq-')) return;
    const item = document.getElementById(hash.slice(1));
    if (item && item.tagName === 'DETAILS') item.open = true;
  }
  window.addEventListener('hashchange', openFaqFromHash);
  openFaqFromHash();

  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 24);

    let currentId = null;
    const probe = window.scrollY + window.innerHeight * 0.35;
    for (const s of sections) {
      if (s.offsetTop <= probe) currentId = s.id;
    }
    navLinks.forEach((a) => {
      const target = a.getAttribute('href').slice(1);
      a.classList.toggle('is-active', target === currentId);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ----- 2. 햄버거 메뉴 -----
  const hamburger = document.querySelector('[data-hamburger]');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('.nav__menu a').forEach((a) =>
      a.addEventListener('click', () => nav.classList.remove('is-open'))
    );
  }

  // ----- 3. 스크롤 reveal -----
  const reveals = document.querySelectorAll('[data-reveal]');
  reveals.forEach((el) => {
    const d = el.getAttribute('data-reveal-delay');
    if (d) el.style.setProperty('--reveal-delay', d + 'ms');
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
  );
  reveals.forEach((el) => io.observe(el));

  // 일부 환경에서 IntersectionObserver 가 첫 페이지 로드 시 fire 되지 않는 케이스가 있어
  // viewport 안 요소는 강제 트리거 (failsafe).
  requestAnimationFrame(() => {
    reveals.forEach((el) => {
      if (el.classList.contains('is-in')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-in');
        io.unobserve(el);
      }
    });
  });

  // ----- 4. 폰 목업 / 칩 패럴럭스 (마우스 이동) -----
  const heroStage = document.querySelector('.hero__stage');
  if (heroStage && window.matchMedia('(hover: hover)').matches) {
    let raf = null;
    let target = { x: 0, y: 0 };
    let current = { x: 0, y: 0 };

    document.addEventListener('mousemove', (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      target.x = (e.clientX - cx) / cx;
      target.y = (e.clientY - cy) / cy;
      if (!raf) raf = requestAnimationFrame(tick);
    });

    function tick() {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      const phone = heroStage.querySelector('.phone--hero');
      if (phone) {
        phone.style.transform = `rotateY(${current.x * 5}deg) rotateX(${-current.y * 5}deg)`;
      }
      heroStage.querySelectorAll('.hero__chip').forEach((chip) => {
        const depth = parseFloat(chip.getAttribute('data-float') || '4');
        chip.style.transform = `translate(${current.x * depth}px, ${current.y * depth}px)`;
      });
      if (Math.abs(target.x - current.x) > 0.001 || Math.abs(target.y - current.y) > 0.001) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = null;
      }
    }
  }

  // ----- 5. 폰 mini 패럴럭스 (스크롤) -----
  const minis = document.querySelectorAll('.phone--mini');
  if (minis.length) {
    window.addEventListener(
      'scroll',
      () => {
        const sy = window.scrollY;
        minis.forEach((m) => {
          const rect = m.getBoundingClientRect();
          const offset = (rect.top - window.innerHeight / 2) * 0.06;
          const float = parseFloat(m.getAttribute('data-float') || '6');
          m.style.transform = `rotate(8deg) translateY(${offset + float}px)`;
        });
      },
      { passive: true }
    );
  }

  // ----- 6. 모달 (앱 받기) -----
  const modal = document.getElementById('modal');
  const ctaButtons = document.querySelectorAll('[data-cta]');
  const modalCloseEls = modal ? modal.querySelectorAll('[data-modal-close]') : [];

  function openModal() {
    if (!modal) return;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  ctaButtons.forEach((b) => b.addEventListener('click', openModal));
  modalCloseEls.forEach((b) => b.addEventListener('click', closeModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // ----- 6-1. 출시 안내메일 신청 (CTA + 모달 공통) -----
  const SUBSCRIBE_ENDPOINT = 'https://api.bubiseo.com/landing/subscribe';

  function setFormDisabled(form, disabled) {
    form.querySelectorAll('input, button').forEach((el) => {
      el.disabled = disabled;
    });
  }

  async function submitSubscribeForm(form, opts) {
    const businessName = (form.querySelector('input[name="businessName"]')?.value || '').trim();
    const ownerName = (form.querySelector('input[name="ownerName"]')?.value || '').trim();
    const email = (form.querySelector('input[name="email"]')?.value || '').trim();
    if (!businessName || !ownerName || !email) return;

    const btn = form.querySelector('button[type="submit"]');
    const originalLabel = btn ? btn.textContent : '';
    setFormDisabled(form, true);
    if (btn) {
      btn.textContent = '신청 중…';
      btn.style.opacity = '0.7';
    }

    try {
      const res = await fetch(SUBSCRIBE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          businessName,
          ownerName,
          email,
          source: form.getAttribute('data-source') || undefined,
        }),
      });
      if (!res.ok) {
        let msg = '신청 중 오류가 발생했어요';
        try {
          const data = await res.json();
          if (data && data.error) msg = data.error;
        } catch (_) {}
        throw new Error(msg);
      }
      if (btn) btn.textContent = '신청 완료 ✓';
      if (opts && typeof opts.onSuccess === 'function') opts.onSuccess();
    } catch (err) {
      setFormDisabled(form, false);
      if (btn) {
        btn.textContent = originalLabel || '다시 시도';
        btn.style.opacity = '';
      }
      const message =
        err && err.message
          ? err.message
          : '네트워크가 원활하지 않아요. 잠시 후 다시 시도해주세요.';
      window.alert(message);
    }
  }

  const modalForm = document.querySelector('[data-modal-form]');
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitSubscribeForm(modalForm, {
        onSuccess: () => setTimeout(() => closeModal(), 1200),
      });
    });
  }

  const notifyForm = document.querySelector('[data-notify-form]');
  if (notifyForm) {
    notifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitSubscribeForm(notifyForm);
    });
  }

  // ----- 7. 영상 — 작은 영상은 자동재생, 큰 영상(data-lazy-video)은 viewport 진입 시 -----
  document.querySelectorAll('video').forEach((v) => {
    v.muted = true;
    v.setAttribute('playsinline', '');
  });

  // 작은 hero 영상은 즉시 재생
  document.querySelectorAll('video:not([data-lazy-video])').forEach((v) => {
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  });

  // 큰 영상 (계약 쇼케이스) — viewport 진입 시에만 재생
  const lazyVideos = document.querySelectorAll('video[data-lazy-video]');
  if (lazyVideos.length) {
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    lazyVideos.forEach((v) => vio.observe(v));
  }

  // ----- 8. 부드러운 스크롤 (오프셋 보정) -----
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#' || href.length < 2) return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  // ----- 9. 숫자 카운트업 (numgrid strong) -----
  const counters = document.querySelectorAll('.numgrid strong');
  if (counters.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = parseInt(el.textContent, 10);
          if (Number.isNaN(target)) return;
          let n = 0;
          const dur = 1200;
          const start = performance.now();
          function tick(ts) {
            const t = Math.min(1, (ts - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            n = Math.round(target * eased);
            el.textContent = String(n);
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((c) => cio.observe(c));
  }
})();

/* ============================================================
   BETA TESTIMONIALS — 76명 슬라이더 자동 렌더 + 무한 스크롤
   ============================================================ */
(function () {
  const list = (window.BUBISEO_TESTIMONIALS || []);
  const track = document.querySelector('[data-beta-track]');
  if (!track || list.length === 0) return;

  // HTML escape (XSS 방지 — 데이터는 우리가 관리하지만 안전 습관)
  const esc = (s) =>
    String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const cardHtml = (t) => `
    <article class="beta-card">
      <div class="beta-card__top">
        <span class="beta-card__region">${esc(t.region)}</span>
        <span class="beta-card__verified">실사용</span>
      </div>
      <div class="beta-card__office">${esc(t.office)}</div>
      <div class="beta-card__email">${esc(t.email)}</div>
      <p class="beta-card__text">${esc(t.text)}</p>
    </article>
  `;

  // 무한 스크롤을 위해 트랙에 카드를 2배 복제 (CSS keyframe 이 -50% 까지만 이동).
  const html = list.map(cardHtml).join('');
  track.innerHTML = html + html;

  // 카운터 표시 (혹시 데이터 수가 바뀌면 자동 동기화)
  const counter = document.querySelector('[data-beta-count]');
  if (counter) counter.textContent = String(list.length);
})();
