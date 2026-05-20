/* =================================================================
   부비서 랜딩 — 인터랙션 / 애니메이션
   ================================================================= */

(function () {
  'use strict';

  // ----- 0. /ad-inquiry 비밀번호 게이트 (광고주 전용 페이지) -----
  // 2026-05-19 강화 — 백엔드 검증 방식.
  //   · 평문 비번 입력 → POST /landing/ad-inquiry/unlock → 토큰 발급(서버 메모리 24h).
  //   · 토큰 sessionStorage 저장 → /landing/ad-stats fetch 시 Authorization: Bearer <token>.
  //   · view-source 우회 차단 — 통계 숫자는 백엔드가 토큰 없으면 안 줌.
  //   · 같은 탭 새로고침: 토큰 유지. 탭 닫으면 초기화. 백엔드 만료(24h) 시 자동 재로그인.
  //   · "비번 바꿔" 운영: 어시스턴트가 SSH + curl 한 줄로 POST /admin/rotate (어드민 키 헤더).
  const ADQ_GATE_TOKEN_KEY = 'adqGateToken.v2';
  const ADQ_GATE_RELOAD_COUNT_KEY = 'adqGateReloadCount.v2';
  const ADQ_GATE_UNLOCK_URL = 'https://api.bubiseo.com/landing/ad-inquiry/unlock';
  const adqGate = document.getElementById('adqGate');
  if (adqGate) {
    const tryUnlock = () => {
      adqGate.remove();
      document.body.classList.remove('adq-locked');
    };
    const hasToken = (() => {
      try {
        const t = sessionStorage.getItem(ADQ_GATE_TOKEN_KEY);
        return Boolean(t && /^[A-Fa-f0-9]{64}$/.test(t));
      } catch (_) { return false; }
    })();
    if (hasToken) {
      tryUnlock();
    } else {
      const form = document.getElementById('adqGateForm');
      const input = document.getElementById('adqGateInput');
      const err = document.getElementById('adqGateErr');
      const submitBtn = form ? form.querySelector('.adq-gate__submit') : null;
      const box = adqGate.querySelector('.adq-gate__box');
      if (form && input && err && box) {
        let busy = false;
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          if (busy) return;
          const v = (input.value || '').trim();
          if (!v) return;
          busy = true;
          if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = '확인 중…';
          }
          err.hidden = true;
          let ok = false;
          let token = '';
          try {
            const r = await fetch(ADQ_GATE_UNLOCK_URL, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ password: v }),
              credentials: 'omit',
            });
            if (r.ok) {
              const data = await r.json();
              if (data && typeof data.token === 'string' && /^[A-Fa-f0-9]{64}$/.test(data.token)) {
                token = data.token;
                ok = true;
              }
            }
          } catch (_) { /* network error → 실패 처리 */ }
          busy = false;
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = '입장';
          }
          if (ok) {
            try {
              sessionStorage.setItem(ADQ_GATE_TOKEN_KEY, token);
              sessionStorage.removeItem(ADQ_GATE_RELOAD_COUNT_KEY);
            } catch (_) { /* ignore */ }
            tryUnlock();
            // 게이트 통과 직후 통계/단가 fetch 트리거 (reload 없이 즉시).
            if (typeof window.adqLoadProtected === 'function') {
              try { window.adqLoadProtected(); } catch (_) { /* ignore */ }
            }
          } else {
            err.hidden = false;
            err.textContent = '비밀번호가 일치하지 않거나 네트워크 오류입니다.';
            box.classList.add('is-shake');
            setTimeout(() => box.classList.remove('is-shake'), 420);
            input.value = '';
            input.focus();
          }
        });
      }
    }
  }

  // 통계 fetch 시 사용할 게이트 토큰 헤더 생성 헬퍼.
  function adqGateAuthHeader() {
    try {
      const t = sessionStorage.getItem(ADQ_GATE_TOKEN_KEY);
      if (t && /^[A-Fa-f0-9]{64}$/.test(t)) return { Authorization: 'Bearer ' + t };
    } catch (_) { /* ignore */ }
    return {};
  }
  function adqHasGateToken() {
    try {
      const t = sessionStorage.getItem(ADQ_GATE_TOKEN_KEY);
      return Boolean(t && /^[A-Fa-f0-9]{64}$/.test(t));
    } catch (_) { return false; }
  }
  // 401 시 무한 reload 방지 — 2회 초과 시 reload 안 함, 게이트만 표시.
  function adqGateHandle401() {
    let n = 0;
    try { n = parseInt(sessionStorage.getItem(ADQ_GATE_RELOAD_COUNT_KEY) || '0', 10) || 0; } catch (_) {}
    if (n >= 2) {
      // 무한 루프 방지 — 토큰만 비우고 게이트 표시 (reload X).
      try {
        sessionStorage.removeItem(ADQ_GATE_TOKEN_KEY);
        sessionStorage.removeItem(ADQ_GATE_RELOAD_COUNT_KEY);
      } catch (_) {}
      // 게이트가 이미 사라진 상태라면 다시 보여주기 위해 DOM 재구성보다 단순 메시지 표시.
      console.warn('[adq-gate] 인증 반복 실패 — reload 중단, 비번 재입력 필요');
      return;
    }
    try {
      sessionStorage.removeItem(ADQ_GATE_TOKEN_KEY);
      sessionStorage.setItem(ADQ_GATE_RELOAD_COUNT_KEY, String(n + 1));
    } catch (_) { /* ignore */ }
    window.location.reload();
  }

  // ----- 1. 스크롤 시 nav 배경 강화 / 활성 메뉴 표시 -----
  const nav = document.getElementById('nav');
  const navLinks = nav ? nav.querySelectorAll('.nav__menu a') : [];
  const sections = ['top', 'about', 'home', 'property', 'cobrokerage', 'contract', 'customer', 'chat', 'schedule', 'settings', 'faq', 'desktop', 'download', 'cta']
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

  // 한 페이지에 [data-notify-form] 이 여러 개일 수 있음 (예: 메인 페이지 = 모달 + CTA 섹션).
  // 모달 안의 폼은 성공 시 1.2초 후 모달 자동 닫기, 섹션 안 폼은 폼 자체 success 표시만 유지.
  document.querySelectorAll('[data-notify-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const inModal = !!form.closest('.modal');
      submitSubscribeForm(form, inModal ? {
        onSuccess: () => setTimeout(() => closeModal(), 1200),
      } : undefined);
    });
  });

  // ----- 6-2. 추가 기능 요청 / 일반 문의 (POST /landing/feature-request) -----
  // 2026-05-19 — products.html 의 두 폼 (data-feature-request-form / data-contact-form)
  //   둘 다 같은 엔드포인트로 전송. 백엔드에서 Slack #문의 채널 알림.
  // 2026-05-19 — products.html 의 .prd__form 에는 성공 시 success 블록 inject.
  const FEATURE_REQUEST_ENDPOINT = 'https://api.bubiseo.com/landing/feature-request';
  document.querySelectorAll('[data-feature-request-form], [data-contact-form]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const businessName = (form.querySelector('input[name="businessName"]')?.value || '').trim();
      const contact = (form.querySelector('input[name="contact"]')?.value || '').trim();
      const title = (form.querySelector('input[name="title"]')?.value || '').trim();
      const body = (form.querySelector('textarea[name="body"]')?.value || '').trim();
      if (!businessName || !contact || !title || !body) return;

      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.innerHTML : '';
      setFormDisabled(form, true);
      if (btn) {
        btn.innerHTML = '전송 중…';
        btn.style.opacity = '0.7';
      }

      try {
        const res = await fetch(FEATURE_REQUEST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ businessName, contact, title, body }),
        });
        if (!res.ok) {
          let msg = '요청 전송 중 오류가 발생했어요';
          try {
            const data = await res.json();
            if (data && (data.message || data.error)) msg = data.message || data.error;
          } catch (_) {}
          throw new Error(msg);
        }
        // 성공
        form.classList.add('is-success');
        if (form.classList.contains('prd__form')) {
          // products.html 의 폼 — 성공 블록 inject (.prd__success)
          const isContact = form.hasAttribute('data-contact-form');
          const success = document.createElement('div');
          success.className = 'prd__success';
          success.innerHTML =
            '<div class="prd__success-icon">✓</div>' +
            '<div class="prd__success-title">' +
            (isContact ? '문의가 정상 접수되었습니다' : '요청이 정상 접수되었습니다') +
            '</div>' +
            '<div class="prd__success-text">등록하신 연락처로 영업일 1~3일 이내에 회신드릴게요.<br/>감사합니다.</div>';
          form.appendChild(success);
        } else {
          // 기타 폼 (구 index.html #products 등) — 입력값 초기화만
          form.querySelectorAll('input, textarea, button').forEach((el) => { el.value = ''; });
        }
      } catch (err) {
        setFormDisabled(form, false);
        if (btn) {
          btn.innerHTML = original || '다시 시도';
          btn.style.opacity = '';
        }
        window.alert(err && err.message ? err.message : '네트워크 오류 — 잠시 후 다시 시도해주세요.');
      }
    });
  });

  // ----- 6-2-c. 광고 효과 통계 + 단가 fetch (게이트 토큰 필수, 100% 실데이터) -----
  // 2026-05-19 — 무한 reload 버그 수정:
  //   · fetch 전 토큰 가드 — 토큰 없으면 fetch 시도 자체 안 함.
  //   · 401 시 reload 카운터 2회 제한 — 무한 루프 방지.
  //   · 새로고침 버튼: ?refresh=1 쿼리 → 백엔드 캐시 우회 → 그 시점 실데이터.
  const adStatsContainer = document.querySelector('[data-ad-stats]');
  const adPricingContainer = document.querySelector('[data-ad-pricing]');
  let isRefreshing = false;

  // === 광고 효과 통계 로더 ===
  let loadAdStats = function () { /* no-op fallback */ };
  if (adStatsContainer) {
    const grid = adStatsContainer.querySelector('[data-ad-stats-grid]');
    const updatedEl = adStatsContainer.querySelector('[data-ad-stats-updated]');

    const fmtNumber = (n) => {
      if (n >= 10000) return (n / 10000).toFixed(n >= 100000 ? 0 : 1) + '만';
      if (n >= 1000) return n.toLocaleString();
      return String(n);
    };
    const fmtUpdatedAt = (iso) => {
      try {
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '—';
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const h = String(d.getHours()).padStart(2, '0');
        const min = String(d.getMinutes()).padStart(2, '0');
        return `${y}.${m}.${day} ${h}:${min} KST`;
      } catch (_) { return '—'; }
    };
    const renderSlot = (slot) => {
      const insufficient = slot.insufficient;
      // 2026-05-20 [사용자 명시] 대시보드 배너 #N 카드 — 이미지/동영상 구분 배지.
      const typeBadge = slot.mediaType
        ? `<span class="adq__stat-type adq__stat-type--${slot.mediaType}">${slot.mediaType === 'video' ? '🎬 동영상' : '🖼️ 이미지'}</span>`
        : '';
      return `
        <div class="adq__stat ${insufficient ? 'adq__stat--insufficient' : ''}">
          <div class="adq__stat-head">
            <span class="adq__stat-name">${slot.label}</span>
            <span class="adq__stat-meta">
              <span class="adq__stat-size">${slot.size}</span>
              ${typeBadge}
            </span>
          </div>
          <div class="adq__stat-metrics">
            <div class="adq__stat-metric">
              <span class="adq__stat-metric-label">노출</span>
              <span class="adq__stat-metric-value">${fmtNumber(slot.impressions)}</span>
            </div>
            <div class="adq__stat-metric">
              <span class="adq__stat-metric-label">클릭</span>
              <span class="adq__stat-metric-value">${fmtNumber(slot.clicks)}</span>
            </div>
            <div class="adq__stat-metric">
              <span class="adq__stat-metric-label">CTR</span>
              <span class="adq__stat-metric-value adq__stat-metric-value--ctr">${slot.ctr.toFixed(2)}%</span>
            </div>
          </div>
          ${''/* 2026-05-19 사용자 명시: '데이터 수집 중 — 출시 후 본격 공개' 안내 문구 제거 */}
        </div>
      `;
    };

    loadAdStats = function (refresh) {
      if (!adqHasGateToken()) return; // 토큰 없으면 fetch 안 함 (무한 reload 방지)
      const url = 'https://api.bubiseo.com/landing/ad-stats' + (refresh ? '?refresh=1' : '');
      return fetch(url, {
        credentials: 'omit',
        headers: adqGateAuthHeader(),
        cache: refresh ? 'no-store' : 'default',
      })
        .then((r) => {
          if (r.status === 401) { adqGateHandle401(); throw new Error('GATE_EXPIRED'); }
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then((data) => {
          if (!grid) return;
          if (!data || !Array.isArray(data.slots)) throw new Error('형식 오류');
          grid.innerHTML = data.slots.map(renderSlot).join('');
          if (updatedEl) {
            const basisLabel = data.basis === 'cumulative' ? '출시 이후 누적' : (data.periodDays ? `최근 ${data.periodDays}일 누적` : '누적');
            updatedEl.textContent = `최근 갱신 ${fmtUpdatedAt(data.updatedAt)} · ${basisLabel}`;
          }
        })
        .catch((err) => {
          if (err && err.message === 'GATE_EXPIRED') return;
          if (grid) {
            grid.innerHTML = '<div class="adq__stat--loading" style="grid-column: 1 / -1;"><span>통계 불러오기 실패</span><em>잠시 후 새로고침해주세요</em></div>';
          }
        });
    };
    // 페이지 로드 시 첫 호출 (토큰 있는 경우만).
    if (adqHasGateToken()) loadAdStats(false);
  }

  // === 광고 단가 사이드바 로더 (A/B/C 모드별 렌더) ===
  let loadAdPricing = function () { /* no-op fallback */ };
  if (adPricingContainer) {
    const accountsEl = adPricingContainer.querySelector('[data-ad-pricing-accounts]');
    const reEl = adPricingContainer.querySelector('[data-ad-pricing-re]');
    const ownerEl = adPricingContainer.querySelector('[data-ad-pricing-owners]');
    const empEl = adPricingContainer.querySelector('[data-ad-pricing-employees]');
    const monthEl = adPricingContainer.querySelector('[data-ad-pricing-month]');
    const nextEl = adPricingContainer.querySelector('[data-ad-pricing-next]');
    const promoEl = adPricingContainer.querySelector('[data-ad-pricing-promo]');
    const pricesEl = adPricingContainer.querySelector('[data-ad-pricing-prices]');

    const fmtKrw = (n) => (Number(n) || 0).toLocaleString('ko-KR');
    const fmtRenewal = (iso) => {
      try {
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '—';
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${y}.${m}.${day}`;
      } catch (_) { return '—'; }
    };

    const renderPrice = (s, accountCount, mode, guaranteedFloor) => {
      // 모드별 단가 카드 렌더 — 100% 실데이터.
      //   A: 정상가 그대로
      //   B: 보장 회원수 기준 (활성 N명 < 50 → 50명 기준으로 표시 + 라벨)
      //   C: 정상가 strike + 베타 무료 배지
      const list = fmtKrw(s.listMonthlyKrw);
      const eff = fmtKrw(s.effectiveMonthlyKrw);
      let totalHtml;
      if (mode === 'C' && s.isFree) {
        totalHtml = `
          <span class="adq__sidebar-price-total">
            <span class="adq__sidebar-price-strike">${list}원/월</span>
            <span class="adq__sidebar-price-free">베타 3개월 무료</span>
          </span>`;
      } else if (mode === 'B') {
        totalHtml = `
          <span class="adq__sidebar-price-total">
            ${eff}<small>원/월</small>
          </span>
          <span class="adq__sidebar-price-note">런칭 보장가 (회원 ${fmtKrw(guaranteedFloor || 0)}명 기준)</span>`;
      } else {
        const isZero = s.effectiveMonthlyKrw === 0;
        totalHtml = isZero
          ? `<span class="adq__sidebar-price-total"><span class="adq__sidebar-price-zero">활성 회원 0명 — 단가 산정 대기</span></span>`
          : `<span class="adq__sidebar-price-total">${eff}<small>원/월</small></span>`;
      }
      const durationHtml = s.duration
        ? `<span class="adq__sidebar-price-duration">⏱ ${s.duration}</span>`
        : '';
      const isVideo = s.key === 'DASHBOARD_VIDEO';
      // 2026-05-19 사용자 명시:
      //   · 노출 정책 (rotationPolicy) 메타 줄 표시
      //   · 데스크톱: 좌측 설명 bubble + 우측 가격 영역 (꼬리로 이어짐)
      //   · 모바일: 위에서 아래로 단순 배치
      const rotationHtml = Array.isArray(s.rotationPolicy) && s.rotationPolicy.length
        ? `<ul class="adq__sidebar-price-rotation">
             ${s.rotationPolicy.map((line) => `<li>${line}</li>`).join('')}
           </ul>`
        : '';
      const hasBubbleContent = (s.description && s.description.trim()) || rotationHtml;
      return `
        <div class="adq__sidebar-price ${isVideo ? 'adq__sidebar-price--video' : ''}">
          ${hasBubbleContent ? `
            <div class="adq__sidebar-price-bubble">
              ${s.description ? `<span class="adq__sidebar-price-desc">${s.description}</span>` : ''}
              ${rotationHtml}
            </div>
          ` : ''}
          <div class="adq__sidebar-price-main">
            <span class="adq__sidebar-price-label">${s.label}</span>
            <span class="adq__sidebar-price-meta">
              <span class="adq__sidebar-price-size">${s.size}</span>
              ${durationHtml}
            </span>
            <span class="adq__sidebar-price-formula">
              <strong>${fmtKrw(s.perUserKrw)}원</strong> × ${fmtKrw(accountCount)}명
            </span>
            ${totalHtml}
          </div>
        </div>
      `;
    };

    loadAdPricing = function (refresh) {
      if (!adqHasGateToken()) return;
      const url = 'https://api.bubiseo.com/landing/ad-pricing' + (refresh ? '?refresh=1' : '');
      return fetch(url, {
        credentials: 'omit',
        headers: adqGateAuthHeader(),
        cache: refresh ? 'no-store' : 'default',
      })
        .then((r) => {
          if (r.status === 401) { adqGateHandle401(); throw new Error('GATE_EXPIRED'); }
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        })
        .then((data) => {
          if (!data || typeof data.accountCount !== 'number') throw new Error('형식 오류');
          if (accountsEl) accountsEl.textContent = fmtKrw(data.accountCount);
          if (reEl) reEl.textContent = fmtKrw(data.realEstateCount);
          if (ownerEl) ownerEl.textContent = fmtKrw(data.ownerCount);
          if (empEl) empEl.textContent = fmtKrw(data.employeeCount);
          if (monthEl) monthEl.textContent = data.pricingMonth || '—';
          if (nextEl) nextEl.textContent = fmtRenewal(data.nextRenewalAt);

          // 베타 promo 배너
          const mode = data.displayMode || 'A';
          if (promoEl) {
            if (mode === 'C' && data.betaPromo) {
              promoEl.hidden = false;
              promoEl.innerHTML = `🎁 <strong>베타 광고주 모집</strong> · ${data.betaPromo.months}개월 무료 · 정식가 전환 시 알려드립니다`;
            } else if (mode === 'B' && data.guaranteedFloor) {
              promoEl.hidden = false;
              promoEl.innerHTML = `🚀 <strong>런칭 보장가</strong> · 활성 회원 ${fmtKrw(data.guaranteedFloor)}명 기준 단가 적용`;
            } else {
              promoEl.hidden = true;
              promoEl.innerHTML = '';
            }
          }

          if (pricesEl && Array.isArray(data.slots)) {
            pricesEl.innerHTML = data.slots
              .map((s) => renderPrice(s, data.accountCount, mode, data.guaranteedFloor))
              .join('');
          }

          // 2026-05-20 [사용자 명시] 하단 "결제할 광고 선택" 섹션도 같은 데이터로 렌더.
          if (typeof window.renderAdCheckout === 'function') {
            window.renderAdCheckout(data, mode);
          }
        })
        .catch((err) => {
          if (err && err.message === 'GATE_EXPIRED') return;
          if (pricesEl) {
            pricesEl.innerHTML = '<div class="adq__sidebar-price adq__sidebar-price--loading">단가 정보 불러오기 실패</div>';
          }
          if (typeof window.renderAdCheckoutError === 'function') {
            window.renderAdCheckoutError();
          }
        });
    };
    if (adqHasGateToken()) loadAdPricing(false);
  }

  // 게이트 통과 직후 한 번에 두 로더 트리거 (reload 없이).
  window.adqLoadProtected = function () {
    if (typeof loadAdStats === 'function') loadAdStats(false);
    if (typeof loadAdPricing === 'function') loadAdPricing(false);
  };

  // === 새로고침 버튼 ===
  // 사용자 명시: 클릭 시 통계+부동산/직원 수+단가 모두 그 시점 실데이터로 갱신.
  const refreshBtn = document.querySelector('[data-ad-refresh]');
  if (refreshBtn) {
    refreshBtn.addEventListener('click', async () => {
      if (isRefreshing) return;
      if (!adqHasGateToken()) return;
      isRefreshing = true;
      refreshBtn.classList.add('is-spinning');
      refreshBtn.disabled = true;
      try {
        await Promise.all([
          typeof loadAdStats === 'function' ? loadAdStats(true) : Promise.resolve(),
          typeof loadAdPricing === 'function' ? loadAdPricing(true) : Promise.resolve(),
        ]);
      } catch (_) { /* ignore */ }
      // 회전 애니메이션 자연스럽게 끊기게 약간 지연.
      setTimeout(() => {
        refreshBtn.classList.remove('is-spinning');
        refreshBtn.disabled = false;
        isRefreshing = false;
      }, 600);
    });
  }

  // === 결제할 광고 선택 + 결제하기 (2026-05-20 [사용자 명시]) ===
  // 광고주가 단가·통계를 확인한 뒤 결제할 광고 슬롯을 다중 선택 → 합계 표시.
  // 토스페이먼츠 결제링크는 추후 도입 (현재 승인 대기) — 링크 확정 시
  // 아래 TOSS_PAYMENT_LINK 상수만 채우면 결제하기 버튼이 새 창으로 결제 진행.
  const TOSS_PAYMENT_LINK = '';
  const checkoutContainer = document.querySelector('[data-ad-checkout]');
  if (checkoutContainer) {
    const checkoutGrid = checkoutContainer.querySelector('[data-ad-checkout-grid]');
    const checkoutSummary = checkoutContainer.querySelector('[data-ad-checkout-summary]');
    const checkoutCountEl = checkoutContainer.querySelector('[data-ad-checkout-count]');
    const checkoutTotalEl = checkoutContainer.querySelector('[data-ad-checkout-total]');
    const checkoutPayBtn = checkoutContainer.querySelector('[data-ad-checkout-pay]');
    const checkoutNoticeEl = checkoutContainer.querySelector('[data-ad-checkout-notice]');
    const fmtKrwCheckout = (n) => (Number(n) || 0).toLocaleString('ko-KR');

    function escAttr(v) {
      return String(v == null ? '' : v).replace(/"/g, '&quot;').replace(/</g, '&lt;');
    }

    function syncCheckoutSummary() {
      const checked = checkoutGrid
        ? Array.prototype.slice.call(
            checkoutGrid.querySelectorAll('.adq__checkout-check:checked'),
          )
        : [];
      const count = checked.length;
      const total = checked.reduce((s, el) => s + (Number(el.dataset.price) || 0), 0);
      if (checkoutCountEl) checkoutCountEl.textContent = String(count);
      if (checkoutTotalEl) {
        checkoutTotalEl.textContent =
          count === 0 ? '—' : total > 0 ? `${fmtKrwCheckout(total)}원/월` : '베타 3개월 무료';
      }
      if (checkoutSummary) checkoutSummary.hidden = count === 0;
      if (checkoutPayBtn) checkoutPayBtn.disabled = count === 0;
      if (checkoutNoticeEl) {
        checkoutNoticeEl.hidden = true;
        checkoutNoticeEl.textContent = '';
      }
    }

    // loadAdPricing 응답(단가 사이드바와 동일 데이터)으로 선택 카드 렌더.
    window.renderAdCheckout = function (data, mode) {
      if (!checkoutGrid || !data || !Array.isArray(data.slots)) return;
      checkoutGrid.innerHTML = data.slots
        .map((s) => {
          const isFreeBeta = mode === 'C' && s.isFree;
          const price = isFreeBeta ? 0 : Number(s.effectiveMonthlyKrw) || 0;
          const priceLabel = isFreeBeta
            ? '베타 3개월 무료'
            : price > 0
              ? `${fmtKrwCheckout(price)}원/월`
              : '단가 산정 대기';
          return `
            <label class="adq__checkout-card">
              <input type="checkbox" class="adq__checkout-check"
                     data-key="${escAttr(s.key)}" data-price="${price}" data-label="${escAttr(s.label)}" />
              <span class="adq__checkout-card-body">
                <span class="adq__checkout-card-name">${escAttr(s.label)}</span>
                <span class="adq__checkout-card-meta">${escAttr(s.size || '')}</span>
              </span>
              <span class="adq__checkout-card-price ${isFreeBeta ? 'is-free' : ''}">${priceLabel}</span>
            </label>`;
        })
        .join('');
      syncCheckoutSummary();
    };

    window.renderAdCheckoutError = function () {
      if (checkoutGrid) {
        checkoutGrid.innerHTML =
          '<div class="adq__checkout-loading">광고 목록을 불러오지 못했습니다. 새로고침해주세요.</div>';
      }
      if (checkoutSummary) checkoutSummary.hidden = true;
      if (checkoutPayBtn) checkoutPayBtn.disabled = true;
    };

    if (checkoutGrid) {
      checkoutGrid.addEventListener('change', (e) => {
        const t = e.target;
        if (t && t.classList && t.classList.contains('adq__checkout-check')) {
          syncCheckoutSummary();
        }
      });
    }

    if (checkoutPayBtn) {
      checkoutPayBtn.addEventListener('click', () => {
        if (checkoutPayBtn.disabled) return;
        // 토스페이먼츠 결제링크 도입 후: TOSS_PAYMENT_LINK 채우면 새 창 결제로 전환.
        if (TOSS_PAYMENT_LINK) {
          window.open(TOSS_PAYMENT_LINK, '_blank', 'noopener');
          return;
        }
        if (checkoutNoticeEl) {
          checkoutNoticeEl.hidden = false;
          checkoutNoticeEl.textContent =
            '토스페이먼츠 결제 연동을 준비 중입니다. 선택해 주셔서 감사합니다 — 담당자가 영업일 1~2일 내 입력하신 연락처로 결제 안내를 드립니다.';
        }
      });
    }
  }

  // ----- 6-3. 광고 문의 (POST /landing/ad-inquiry) -----
  // 2026-05-20 [사용자 명시] /ad-inquiry.html STEP2 → products.html 03번 「광고 문의」 폼으로 이전.
  //   슬롯 선택(adType) 없이 광고주 정보만으로 제출. Slack #문의 채널로 알림.
  const AD_INQUIRY_ENDPOINT = 'https://api.bubiseo.com/landing/ad-inquiry';
  document.querySelectorAll('[data-ad-inquiry-form]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const companyName = (form.querySelector('input[name="companyName"]')?.value || '').trim();
      const contactPerson = (form.querySelector('input[name="contactPerson"]')?.value || '').trim();
      const contact = (form.querySelector('input[name="contact"]')?.value || '').trim();
      const body = (form.querySelector('textarea[name="body"]')?.value || '').trim();

      // 클라이언트 1차 검증 (슬롯 선택 없음 — 광고주 정보만)
      if (!companyName) { window.alert('회사명을 입력해주세요.'); return; }
      if (!contactPerson) { window.alert('담당자명을 입력해주세요.'); return; }
      if (!contact) { window.alert('전화번호 또는 이메일을 입력해주세요.'); return; }
      if (body.length < 30) { window.alert('광고 문의 내용은 30자 이상 입력해주세요.'); return; }

      const btn = form.querySelector('button[type="submit"]');
      const original = btn ? btn.innerHTML : '';
      setFormDisabled(form, true);
      if (btn) { btn.textContent = '보내는 중…'; btn.style.opacity = '0.7'; }

      try {
        const res = await fetch(AD_INQUIRY_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ companyName, contactPerson, contact, body }),
        });
        if (!res.ok) {
          let msg = '문의 전송 중 오류가 발생했어요';
          try { const data = await res.json(); if (data && data.message) msg = data.message; } catch (_) {}
          throw new Error(msg);
        }
        // 성공 — products.html 폼 스타일(.prd__success)로 success 블록 inject
        form.classList.add('is-success');
        const successEl = document.createElement('div');
        successEl.className = 'prd__success';
        successEl.innerHTML =
          '<div class="prd__success-icon">✓</div>' +
          '<div class="prd__success-title">광고 문의가 정상 접수되었습니다</div>' +
          '<div class="prd__success-text">담당자가 영업일 1~2일 내 입력하신 연락처로 회신드립니다.<br/>문의 주셔서 감사합니다.</div>';
        form.appendChild(successEl);
      } catch (err) {
        setFormDisabled(form, false);
        if (btn) { btn.innerHTML = original || '다시 시도'; btn.style.opacity = ''; }
        window.alert(err && err.message ? err.message : '네트워크 오류 — 잠시 후 다시 시도해주세요.');
      }
    });
  });

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


/* ============================================================
   MAIN PAGE (index.html) — 미니멀 메인 페이지 nav 동작
   ─────────────────────────────────────────────────────────────
   - .main-nav 스크롤 시 is-scrolled 토글 (경계선 등장)
   - 햄버거 클릭 시 .main-nav.is-open 토글
   - .main-nav__menu a 클릭 시 메뉴 닫기
   ============================================================ */
(function () {
  'use strict';
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) return; // 제품 상세 (app.html) 에서는 동작 안 함

  function onScroll() {
    mainNav.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const hamburger = mainNav.querySelector('[data-main-hamburger]');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });
    mainNav.querySelectorAll('.main-nav__menu a, .main-nav__support a').forEach((a) =>
      a.addEventListener('click', () => mainNav.classList.remove('is-open'))
    );
  }
})();
