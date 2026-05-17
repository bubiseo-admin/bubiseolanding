# 부비서 랜딩 페이지

부동산 비서 앱 **부비서** 의 공식 랜딩 페이지 — https://bubiseo.com

- 정식 출시: 2026년 6월
- 문의: [admin@bubiseo.com](mailto:admin@bubiseo.com)

## 🎨 리디자인 / 디자인 작업

> **반드시 먼저 읽기 → [DESIGN.md](DESIGN.md)**
>
> 디자인 토큰, 섹션 인덱스, 컴포넌트 패턴, "건드리면 안 되는 곳" 까지 한 번에 정리되어 있습니다.

## 구성

순수 정적 HTML/CSS/JS — 빌드 도구 없음. main 브랜치 푸시 시 GitHub Pages 자동 배포.

### 본체 (이중 페이지 구조 — 2026-05-12 개편)

| 파일 | 용도 |
|---|---|
| `index.html` (메인) | 회사 대표 페이지 — miso 스타일 풀스크린 미니멀 (5섹션 + 모달). `body.body--main` + `.main-*` 네임스페이스 |
| `app.html` (제품 상세) | 구 랜딩 본체 — 17개 섹션 + 모달. 매물·계약·고객·일정 등 기능 상세 모두 보존 |
| `style.css` | 두 페이지 공통 스타일. 1~1707줄 = app.html, 1710줄~ = `.main-*` 메인 페이지 전용 |
| `script.js` | 3개 IIFE — app.html 인터랙션 / 베타 슬라이더 / 메인 페이지 nav. `getElementById` null 체크로 두 페이지 한 파일 공존 |
| `testimonials.js` | 베타 76개 사무소 데이터 + 슬라이더 (app.html 전용) |
| `DESIGN.md` | 디자인 시스템 / 리디자인 가이드 (단일 진입점) |

### 서브 페이지

| 파일 | 용도 |
|---|---|
| `pay.html`, `pay-success.html`, `pay-fail.html` | 결제 흐름 (PG: 토스페이먼츠 예정 — pay.html SDK 는 백엔드 전환과 함께 재작성 대기) |
| `delete-account.html` | 계정 삭제 신청 폼 |
| `terms.html` / `terms.md` | 이용약관 |
| `privacy.html` / `privacy.md` | 개인정보처리방침 |
| `refund.html` / `refund.md` | 환불 정책 |
| `location.html` / `location.md` | 위치기반 서비스 동의 |
| `legal.css` | 약관·서브 페이지 공통 스타일 |
| `marketing/insta-cards.html` | 인스타 카드뉴스 7장 |

### 에셋

| 경로 | 내용 |
|---|---|
| `assets/` | 로고·스크린샷 (`screen-*.png`)·데모 영상 (`demo-short.mov`) |
| `CNAME` | `bubiseo.com` 커스텀 도메인 |

## 배포

```bash
git add . && git commit -m "..." && git push origin main
# → GitHub Pages 자동 빌드 (~30초~2분)
# → 브라우저 Cmd+Shift+R 로 캐시 우회 확인
```
