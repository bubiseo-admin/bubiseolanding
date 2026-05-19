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
            try { sessionStorage.setItem(ADQ_GATE_TOKEN_KEY, token); } catch (_) { /* ignore */ }
            tryUnlock();
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
  // 토큰 만료 등으로 401 받으면 sessionStorage 비우고 페이지 reload (게이트 다시 표시).
  function adqGateHandle401() {
    try { sessionStorage.removeItem(ADQ_GATE_TOKEN_KEY); } catch (_) { /* ignore */ }
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

  // ----- 6-2-c. 광고 효과 통계 fetch (24h 캐시 — /ad-inquiry 페이지 공지사항) -----
  // 2026-05-19 — 백엔드 GET /landing/ad-stats 호출 → [data-ad-stats-grid] 채움.
  //   응답 자체에 24h Cache-Control 헤더가 붙어 브라우저·CDN 캐시. 페이지 로드 시 한 번 호출.
  const adStatsContainer = document.querySelector('[data-ad-stats]');
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
      return `
        <div class="adq__stat ${insufficient ? 'adq__stat--insufficient' : ''}">
          <div class="adq__stat-head">
            <span class="adq__stat-name">${slot.label}</span>
            <span class="adq__stat-size">${slot.size}</span>
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
          ${insufficient ? '<div class="adq__stat-insufficient">데이터 수집 중 — 출시 후 본격 공개</div>' : ''}
        </div>
      `;
    };

    fetch('https://api.bubiseo.com/landing/ad-stats', {
      credentials: 'omit',
      headers: adqGateAuthHeader(),
    })
      .then(async (r) => {
        if (r.status === 401) {
          // 게이트 토큰 만료 — 비우고 페이지 reload (게이트 다시 표시).
          adqGateHandle401();
          throw new Error('GATE_EXPIRED');
        }
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .then((data) => {
        if (!grid) return;
        if (!data || !Array.isArray(data.slots)) throw new Error('형식 오류');
        grid.innerHTML = data.slots.map(renderSlot).join('');
        if (updatedEl) {
          // 2026-05-19 — basis: 'cumulative' (출시 이후 누적). 어드민 AdminAdStatsScreen 과 동일 산출.
          const basisLabel = data.basis === 'cumulative' ? '출시 이후 누적' : (data.periodDays ? `최근 ${data.periodDays}일 누적` : '누적');
          updatedEl.textContent = `최근 갱신 ${fmtUpdatedAt(data.updatedAt)} · ${basisLabel}`;
        }
      })
      .catch((err) => {
        if (err && err.message === 'GATE_EXPIRED') return; // reload 중
        if (grid) {
          grid.innerHTML = '<div class="adq__stat--loading" style="grid-column: 1 / -1;"><span>통계 불러오기 실패</span><em>잠시 후 새로고침해주세요</em></div>';
        }
      });
  }

  // ----- 6-3-a. 광고 슬롯 radio toggle 동작 -----
  // 2026-05-19 — 사용자 명시: 선택된 슬롯 재클릭 시 선택 취소.
  //   기본 radio 는 한 번 선택되면 같은 그룹 내 다른 항목 선택 전까지 해제 불가.
  //   여기서는 같은 슬롯 재클릭 = 토글 해제 동작.
  document.querySelectorAll('input[name="adType"]').forEach((radio) => {
    // mousedown 시 click 직전 상태 캡처 (브라우저는 click 핸들러 호출 시점에는 이미 checked=true 로 세팅됨)
    radio.addEventListener('mousedown', () => {
      radio.dataset.wasChecked = radio.checked ? '1' : '0';
    });
    radio.addEventListener('touchstart', () => {
      radio.dataset.wasChecked = radio.checked ? '1' : '0';
    }, { passive: true });
    radio.addEventListener('click', () => {
      if (radio.dataset.wasChecked === '1') {
        radio.checked = false;
        radio.dispatchEvent(new Event('change', { bubbles: true }));
      }
      radio.dataset.wasChecked = '';
    });
  });

  // ----- 6-3. 광고 문의 (POST /landing/ad-inquiry) -----
  // 2026-05-19 — /ad-inquiry.html 의 [data-ad-inquiry-form]. Slack #문의 채널로 알림.
  const AD_INQUIRY_ENDPOINT = 'https://api.bubiseo.com/landing/ad-inquiry';
  document.querySelectorAll('[data-ad-inquiry-form]').forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const companyName = (form.querySelector('input[name="companyName"]')?.value || '').trim();
      const contactPerson = (form.querySelector('input[name="contactPerson"]')?.value || '').trim();
      const contact = (form.querySelector('input[name="contact"]')?.value || '').trim();
      const adType = form.querySelector('input[name="adType"]:checked')?.value || '';
      const body = (form.querySelector('textarea[name="body"]')?.value || '').trim();

      // 클라이언트 1차 검증
      if (!adType) { window.alert('광고 슬롯을 선택해주세요.'); return; }
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
          body: JSON.stringify({ companyName, contactPerson, contact, adType, body }),
        });
        if (!res.ok) {
          let msg = '문의 전송 중 오류가 발생했어요';
          try { const data = await res.json(); if (data && data.message) msg = data.message; } catch (_) {}
          throw new Error(msg);
        }
        // 성공 — 폼을 success 상태로 전환
        form.classList.add('is-success');
        const successEl = document.createElement('div');
        successEl.className = 'adq__success';
        successEl.innerHTML = `
          <div class="adq__success-icon">✓</div>
          <div class="adq__success-title">광고 문의가 접수되었습니다</div>
          <div class="adq__success-text">담당자가 영업일 1~2일 내 입력하신 연락처로 회신드립니다.<br/>문의 주셔서 감사합니다.</div>
        `;
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
