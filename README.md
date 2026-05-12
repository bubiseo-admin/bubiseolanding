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

### 본체 (랜딩)

| 파일 | 용도 |
|---|---|
| `index.html` | 랜딩 본체 (14개 섹션 + 모달) |
| `style.css` | Apple Keynote 톤 디자인 시스템 |
| `script.js` | 스크롤스파이·reveal·모달·폼·해시 라우팅 |
| `testimonials.js` | 베타 76개 사무소 데이터 + 슬라이더 |
| `DESIGN.md` | 디자인 시스템 / 리디자인 가이드 (단일 진입점) |

### 서브 페이지

| 파일 | 용도 |
|---|---|
| `products.html` | 데스크톱 PRO 요금제 |
| `pay.html`, `pay-success.html`, `pay-fail.html` | KG이니시스 결제 흐름 |
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
