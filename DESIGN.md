# 부비서 랜딩 — 디자인 시스템 / 리디자인 가이드

> 이 문서는 **Claude Design (또는 다른 에이전트) 이 랜딩 페이지를 리디자인할 때 가장 먼저 읽는 단일 진입점** 입니다.
> 토큰·섹션·컴포넌트·"건드리면 안 되는 곳" 까지 한 번에 파악할 수 있게 정리했습니다.
>
> 빌드 도구 없음 (순수 HTML/CSS/JS). 수정 → 커밋 → main 푸시 → GitHub Pages 자동 배포 (https://bubiseo.com).

---

## 1. 파일 맵

| 파일 | 역할 | 리디자인 자유도 |
|---|---|---|
| `index.html` (829줄) | 랜딩 본체. 14개 섹션 (NAV / HERO / HOME / PROPERTY / COBROKERAGE / CONTRACT / CUSTOMER / CHAT / SCHEDULE / SETTINGS / COMMUNITY / TRUST / FAQ / DESKTOP / BETA / CTA / FOOTER / MODAL) | 🟢 자유 (DESKTOP 섹션 제외) |
| `style.css` (1545줄) | 본체 스타일. 섹션별 배너 주석 (`/* === ... === */`) 으로 구분 | 🟢 자유 (DESKTOP 섹션 제외) |
| `script.js` (346줄) | nav 스크롤스파이·reveal·모달·폼 submit·해시 라우팅 | 🟡 동작 보존 (UI만 바꾸기) |
| `testimonials.js` (110줄) | 베타 76개 사무소 데이터 + 슬라이더 카드 렌더 | 🟢 자유 (구조 단순) |
| `products.html` (315줄) | 데스크톱 PRO 요금제 페이지. `<style>` 인라인 200줄 | 🟢 자유 |
| `pay.html`, `pay-success.html`, `pay-fail.html` | 결제 흐름 (PG = 토스페이먼츠 예정). 현재 `pay.html` 본문은 과거 PortOne+KG이니시스 가정으로 짜여 있어 백엔드 토스 전환과 함께 통째 재작성 필요 | 🔴 동작 우선 — 결제 파라미터·SDK 건드리지 말 것 |
| `delete-account.html` | 계정 삭제 신청 폼 | 🟢 자유 |
| `legal.css` | 약관·개인정보처리방침 공통 스타일 (위 페이지들이 공유) | 🟡 변경 시 약관 페이지 동시 점검 |
| `terms.html`, `privacy.html`, `refund.html`, `location.html` | 약관·개인정보·환불·위치기반 동의 — `.md` 원본을 그대로 보여주는 페이지 | 🔴 텍스트는 법무 검토본 — 손대지 말 것 |
| `assets/` | 로고·스크린샷(`screen-*.png`)·데모 영상(`demo-short.mov`) | 🟢 자유 (교체 시 파일명 유지) |
| `marketing/insta-cards.html` | 인스타 카드뉴스 7장 (별도 페이지) | 🟢 자유 |

---

## 2. 디자인 토큰 (`style.css` `:root`)

### 2.1 색

| 토큰 | 값 | 용도 |
|---|---|---|
| `--black` | `#000000` | DESKTOP / NAV / FOOTER 본문 배경 |
| `--near-black` | `#1d1d1f` | 본문 텍스트 |
| `--white` | `#ffffff` | 카드·NAV CTA 배경 |
| `--off-white` | `#fbfbfd` | 라이트 섹션 기본 배경 |
| `--gray-50` | `#f5f5f7` | 호버 배경 |
| `--gray-100` | `#e8e8ed` | 경계선 (옅음) |
| `--gray-300` | `#d2d2d7` | 보조 텍스트 (다크 배경) |
| `--gray-500` | `#86868b` | 보조 텍스트 (라이트 배경) |
| `--gray-700` | `#424245` | 본문 보조 |
| `--brand` | `#5b7fff` | 액센트 1 (블루) |
| `--brand-2` | `#a580ff` | 액센트 2 (바이올렛) |
| `--grad-violet` | `linear-gradient(135deg, #5b7fff 0%, #a580ff 100%)` | 그라데이션 텍스트·CTA·배지 |

**비공식 (하드코딩) 색** — 베타 슬라이더 카드 (`.beta-*`) 와 일부 인라인 스타일에 아래 톤이 별도로 박혀 있습니다. 리디자인 시 토큰화 추천:
- `#FAFBFE → #F1F4FB` (베타·CTA 섹션 배경 그라데이션)
- `#E5E8EB` (라이트 섹션 경계선)
- `#6B7480 / #4E5968 / #8B95A1` (회색 톤 위계 — 가독성 색)
- `#6155F5 / #39AFFD` (베타 카드 액센트 그라디언트)
- `#00A878` (인증 체크 그린)

### 2.2 타이포

폰트: **Pretendard** (CDN + Google Fonts 폴백)
가중치: 400 / 500 / 600 / 700 / 800 / 900

| 역할 | 클래스 | 폰트 사이즈 (clamp) |
|---|---|---|
| 히어로 H1 | `.hero__title` | `clamp(20px, 5.2vw, 56px)` |
| 섹션 H2 | `.section__title` | `clamp(32px, 5.5vw, 72px)` |
| SCHEDULE 섹션 H2 (한 줄 강제) | `.section--schedule .section__title` | `clamp(36px, 4.6vw, 60px)` |
| CTA H2 | `.cta__title` | `clamp(24px, 5.4vw, 56px)` |
| 약관·작은 카드 H2 | `.contract-show__title` | `clamp(36px, 6vw, 72px)` |
| DESKTOP H2 (보존) | `.desktop-section__title` | `clamp(36px, 8vw, 96px)` |
| 본문 큰 디스크립션 | `.section__desc` | `clamp(16px, 1.6vw, 21px)` |
| 본문 보조 | 기본 body | 15–17px |

**한국어 줄바꿈 규칙 (모든 타이틀 공통)**:
```css
word-break: keep-all;
line-break: strict;
```
+ "줄당 한 줄 강제" 가 필요한 타이틀은 `<span class="line">` 로 줄을 나누고 `.line { display: block; white-space: nowrap; }` 적용 (현재 hero / cta 두 곳).

### 2.3 모양 / 모션

| 토큰 | 값 |
|---|---|
| `--container` | `1200px` (본체 max-width) |
| `--container-narrow` | `980px` |
| `--radius` | `24px` (카드) |
| `--radius-sm` | `14px` (작은 칩·입력) |
| `--ease-out` | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `--ease-spring` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Reveal 애니메이션 | `opacity 0→1 + translateY(28px→0)` / 1초 / `data-reveal` 속성 진입 시 |

### 2.4 브레이크포인트

CSS 안에서 사용하는 미디어쿼리는 다음 폭들입니다 (전부 max-width 기반):
- `980px` — 데스크톱 → 태블릿 (split 그리드 해제, 폰 mockup 축소)
- `720px` — 요금제 그리드 2열 → 1열
- `640px` — 베타 카드 폭 축소·슬라이더 속도 ↑
- `560px` — NAV 햄버거 등장 (검토 필요 — 현재 위치 grep 으로 확인)

---

## 3. 섹션 인덱스 (`index.html`)

스크롤 순서대로:

| # | 섹션 | id | CSS 키 | 역할 | 리디자인 메모 |
|---|---|---|---|---|---|
| 0 | NAV | `nav` | `.nav` | 글래스 블러 헤더 + 햄버거 (모바일) | 햄버거 상태 토글은 `script.js` 위존. 클래스 이름 유지 |
| 1 | HERO | `top` | `.hero`, `.hero__title` | 두 줄 헤드라인 + 비디오 폰 mockup + 6개 부유 칩 | 두 줄 강제 (`white-space: nowrap`) — 카피 짧게 |
| 1.5 | ABOUT (회사 소개) | `about` | `.section--about` | 회사 미션·비전 + 3가지 핵심 가치 (`.featgrid` 재사용) | 본문 폭 980px 로 좁혀 회사 메시지 가독성 강화. 흰 배경 |
| 2 | HOME | `home` | `.section--home` | "한 손에 사무소 전체" | 스플릿 레이아웃 (텍스트 ↔ 폰) |
| 3 | PROPERTY | `property` | `.section--property` | 매물 자동 분석 | 흰 배경 (시각 휴식) |
| 4 | COBROKERAGE | `cobrokerage` | `.section--cobrokerage` | 공동중개 (신규) | |
| 5 | CONTRACT | `contract` | `.contract-show` | **시그니처 쇼케이스** — 다크 배경 + 4장 갤러리 | 톤 강조 영역. 다른 섹션과 다른 룰 가짐 |
| 6 | CUSTOMER | `customer` | `.section--customer` | 고객 관리 | |
| 7 | CHAT | `chat` | `.section--chat` | 사내대화 (신규) | |
| 8 | SCHEDULE | `schedule` | `.section--schedule` | 일정·잔금일 | 타이틀 폰트 별도 (한 줄 강제) |
| 9 | SETTINGS | `settings` | `.section--settings` | 사무소 설정·권한 | |
| 10 | COMMUNITY | `community` | `.section--community` | 커뮤니티 (신규) | |
| 11 | TRUST | (없음) | `.trust` | 보안·데이터 보관 | |
| 12 | FAQ | `faq` | `.faq` | `<details>` 6개. 해시 딥링크 `#faq-1` 지원 (script.js) | 텍스트 구조 보존 — JS 의존 |
| 13 | DESKTOP | `desktop` | `.desktop-section` | **🔴 DO NOT EDIT — 요청 보존 섹션** | 데스크톱 PRO 소개. 별도 디자인 톤 유지 |
| 14 | BETA | `beta` | `.beta`, `.beta-card` | 76개 사무소 무한 슬라이더 (`testimonials.js`) | 슬라이더 keyframe + 트랙 2배 복제 구조. 카드 폭 변경 시 `betaScroll` translateX -50% 가정 깨질 수 있음 |
| 15 | CTA | `cta` | `.cta`, `.cta__form` | 출시 알림 신청 폼 (`data-notify-form`) | 폼 submit 핸들러는 `script.js`. 배경은 `.beta` 와 동일 톤으로 통일됨 |
| 16 | FOOTER | (없음) | `.footer` | 사이트맵 + 사업자 정보 | |
| — | MODAL | `modal` | `.modal` | "곧 만나요" 알림 신청 모달 (앱 받기 클릭 시) | `data-cta` 트리거 |

---

## 4. 컴포넌트 패턴

### 4.1 버튼

```html
<button class="btn btn--primary">기본</button>
<button class="btn btn--ghost">고스트</button>
<button class="btn btn--primary btn--lg">큰 사이즈</button>
```
- 라이트 섹션용 ghost: `.cta .btn--ghost`, `.section--light .btn--ghost`
- 다크 섹션용 ghost: `.section--dark .btn--ghost`

### 4.2 배지 / 아이브로우 / 그라데이션 텍스트

```html
<span class="eyebrow">현재 베타 테스트 중</span>
<div class="badge badge--gradient">부동산 비서, 부비서</div>
<span class="gradient-text">강조 단어</span>
```

### 4.3 폰 mockup

```html
<div class="phone phone--hero">
  <video class="phone__video" autoplay muted loop playsinline>
    <source src="assets/demo-short.mov" type="video/mp4" />
  </video>
</div>
```
변형: `.phone--tilt-l`, `.phone--tilt-r` (좌우 3도 기울기)

### 4.4 스크린샷 갤러리

```html
<div class="shots shots--three">
  <img src="assets/screen-*.png" alt="" />
  ...
</div>
```
변형: `.shots--single` (1열), `.shots--three` (3열), `.shots--row` (4열)

### 4.5 베타 카드 (`testimonials.js` 가 렌더)

```html
<article class="beta-card">
  <div class="beta-card__top">
    <span class="beta-card__region">서울 강남</span>
    <span class="beta-card__verified">실사용</span>
  </div>
  <div class="beta-card__office">○○공인중개사사무소</div>
  <div class="beta-card__email">o***@gmail.com</div>
  <p class="beta-card__text">후기 본문…</p>
</article>
```

### 4.6 FAQ

```html
<details class="faq__item" id="faq-1">
  <summary>질문</summary>
  <p>답변</p>
</details>
```
`#faq-1` 등 해시로 진입 시 `script.js` 가 자동 open.

### 4.7 출시 알림 신청 폼

```html
<form data-notify-form data-source="cta">
  <input name="businessName" required />
  <input name="ownerName" required />
  <input name="email" type="email" required />
  <button type="submit">신청</button>
</form>
```
- `data-notify-form` 속성이 있으면 `script.js` 가 자동 hookup
- `data-source="cta" | "modal"` 로 어느 위치에서 제출됐는지 백엔드에 전달
- 백엔드 엔드포인트는 `script.js` 안의 fetch URL 참고

---

## 5. 인터랙션 (`script.js`)

| 동작 | 트리거 | 비고 |
|---|---|---|
| 스크롤 시 NAV 배경 강화 | `scroll` | `.nav.is-scrolled` |
| 활성 메뉴 하이라이트 | scrollspy | `sections` 배열에 id 추가/제거로 관리 |
| `data-reveal` 진입 애니메이션 | IntersectionObserver | `.is-in` 부여 |
| `data-cta` 클릭 → 알림 모달 열기 | click | `.modal` 토글 |
| `data-notify-form` 제출 | submit | 백엔드 POST + 성공/실패 UI |
| FAQ 딥링크 | hashchange | `#faq-1` 자동 open |
| 햄버거 토글 | click | `[data-hamburger]` |

리디자인 시 위 셀렉터(`data-reveal`, `data-cta`, `data-notify-form`, `data-hamburger`, `.is-scrolled`, `.is-in`) 는 **유지** 해야 동작 보존.

---

## 6. "건드리면 안 되는 곳" 🔴

1. **DESKTOP 섹션 (`#desktop`, `.desktop-section__*`)** — `style.css` 라인 960~ "DO NOT EDIT" 주석. 별도 디자인 톤으로 보존.
2. **결제 페이지 (`pay.html`, `pay-success.html`, `pay-fail.html`)** — PG 는 토스페이먼츠로 전환 예정 (백엔드 통합 완료 시점에 `pay.html` SDK 재작성 필요). PG 파라미터·콜백 URL 손대지 말 것. 스타일은 자유.
3. **약관 페이지 텍스트 (`terms.md`, `privacy.md`, `refund.md`, `location.md`)** — 법무 검토본. 표시 레이아웃만 바꾸기.
4. **`data-*` 속성 & `is-*` 상태 클래스** — JS 동작 키. 이름 유지.
5. **`testimonials.js` 의 76개 데이터** — 실제 사전 베타 참가자 정보. 추가는 가능, 임의 변경 금지.
6. **`assets/demo-short.mov`** — 히어로 데모 영상. 새 영상으로 교체 시 파일명 유지.

---

## 7. 리디자인 권장 순서

1. **DESIGN.md (이 문서) 읽기** — 5분.
2. `index.html` 의 섹션 배너 주석으로 전체 구조 훑기.
3. `style.css` `:root` 의 토큰만 먼저 손대서 톤·반경·이징을 한 번에 바꿔보기 (전역 영향).
4. 섹션별 배너 (`/* === HERO === */` 등) 단위로 한 섹션씩 바꿔가며 시각 회귀 확인.
5. 변경 후 **GitHub Pages 캐시** 때문에 브라우저 강력 새로고침 (Cmd+Shift+R) 필요.

---

## 8. 알려진 정리 후보 (선택)

리디자인과 함께 처리하면 좋은 기술 부채:

- `products.html` / `pay*.html` / `delete-account.html` 의 인라인 `<style>` 블록을 별도 CSS 파일로 분리 (현재는 페이지마다 같은 폰트·색·버튼 스타일이 반복됨).
- 베타 카드·CTA 섹션의 **하드코딩 색** (`#6B7480`, `#4E5968`, `#E5E8EB`, `#6155F5`, `#39AFFD`, `#00A878`) 을 `:root` 토큰으로 승격.
- `.cta__form` 의 다크 톤 잔재 (현재 라이트 배경에 맞춰 부분 보정만 됨) 전수 점검.
- `.section--schedule .section__title` 같은 "한 줄 강제" 오버라이드를 공용 `.title--nowrap` 유틸로 일반화.

위 항목은 리디자인이 끝난 뒤 다음 정리 작업으로 진행하는 편이 안전합니다.
