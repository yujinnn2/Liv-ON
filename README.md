# Liv;ON README


![Image](https://github.com/user-attachments/assets/ae47b0d0-cc56-4604-afa1-90a8c2e2cdcf)




- 배포 URL :https://liveon1018.netlify.app

## 프로젝트 소개
Liv;ON은 모던하고 심플한 감성의 인테리어 브랜드 웹사이트로, 사용자에게 직관적인 UI/UX와 트렌디한 공간 제안을 제공하기 위해 제작된 1인 웹 퍼블리싱 프로젝트입니다.
타깃 고객층은 20~30대 1인 가구, 신혼부부, 인테리어 관심 소비자들로, 브랜드 스토리부터 가상 체험, 제품 소개까지 전반적인 브랜드 경험을 온라인에서 자연스럽게 제공할 수 있도록 설계되었습니다.

주요 목적
- 고객에게 인테리어 스타일을 감각적으로 제안
- 브랜드 아이덴티티를 세련된 UI 구조로 구현
- 다양한 기기에서 반응형으로 작동하도록 퍼블리싱 


## 1. 특징 및 구성
| 구분          | 설명                          |
| ----------- | --------------------------- |
| **Brand**   | 브랜드 철학과 방향성을 소개하는 브랜드 페이지   |
| **Gallery** | 실제 인테리어 시공사례 이미지 갤러리        |
| **Product** | 제품 소개 및 카테고리별 정보 페이지        |
| **Virtual** | 고객이 직접 인테리어를 체험해볼 수 있는 가상공간 |
| **News**    | 브랜드 공지사항 및 이벤트 안내           |
| **Media**   | 광고/홍보 제휴사 및 협력사 소개          |
| **inst**    | 브랜드 인스타그램 피드 연동 섹션          |


## 2. 개발 환경

- Skills : HTML, SCSS, JavaScript, jQuery
- 협업 툴 : Notion, Github
- 서비스 배포 환경 : Netlify
- 디자인 : [Figma](https://www.figma.com/file/fAisC2pEKzxTOzet9CfqML/README(oh-my-code)?node-id=39%3A1814)

## 3. 프로젝트 구조

```
Liv-ON/
├── index.html                     # 메인 진입 페이지
├── README.md                      # 프로젝트 개요 및 설명 문서
├── Brand.html                     # 브랜드 소개
├── Gallery.html                   # 시공사례 갤러리
├── inst.html                      # 인스타그램 연동 페이지
├── Media.html                     # 광고/협력사
├── News.html                      # 공지사항
├── Product.html                   # 제품 소개
├── Virtual.html                   # 가상 체험관
├── robots.txt                     # SEO를 위한 robots 설정
├── sitemap.xml                   # 사이트맵 (검색엔진 제출용)

├── assets/                        # 정적 리소스 모음
│   ├── css/                      # CSS 스타일시트
│   │   ├── common.css           # 공통 스타일
│   │   ├── Brand.css
│   │   ├── gallery.css
│   │   ├── media.css
│   │   ├── News.css
│   │   ├── product.css
│   │   ├── Story.css
│   │   ├── Virtual.css
│   │   └── style.css            # 전체 통합 스타일 (최종용)
│   │
│   ├── scss/                     # SCSS 소스 파일 (컴파일 전)
│   │   ├── common.scss
│   │   ├── Brand.scss
│   │   ├── gallery.scss
│   │   ├── media.scss
│   │   ├── News.scss
│   │   ├── product.scss
│   │   ├── Story.scss
│   │   ├── Virtual.scss
│   │   └── style.scss           # 전체 스타일 통합본
│   │
│   ├── js/                       # 기능성 JavaScript 파일
│   │   ├── bootstrap.bundle.min.js
│   │   ├── common.js            # 공통 인터랙션
│   │   ├── main.js              # 메인 페이지 관련
│   │   ├── gallery.js
│   │   ├── product.js
│   │   ├── story.js
│   │   ├── virtual.js
│   │   ├── main-slider.js       # 메인 슬라이드용
│   │   └── sec02_slider.js      # 섹션2 슬라이드용
│   │
│   ├── images/                   # 이미지 리소스 모음

```

## 4. 개발 기간 및 작업 관리

**개발 기간**

- 전체 개발 기간 : 2025-04-30 ~ 2022-06-27
- UI 구현 : 2025-04-30 ~ 2025-05-23
- 기능 구현 : 2022-05-26 ~ 2022-07-01

**작업 관리**

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 notion에 회의 내용을 기록했습니다.


## 5. 주요 기술 구현



### 1. 메인페이지 구성 (Main Editorial Mood Section)


메인페이지 중간, 대형 고해상도 이미지를 중심으로 에디토리얼 레이아웃 구성
브랜드의 감성, 방향성, 철학을 이미지 자체로 전달하는 전략적 콘텐츠 배치
텍스트 최소화 → 공간감, 여백, 이미지 배치의 조화로 브랜드 무드 표현
모던한 세리프 폰트와 타이포그래피를 조합하여 고급스러운 인상 전달

- 구성 포인트:
2단 구조: 좌측에 여백 중심의 타이포 / 우측에 공간 중심의 인테리어 이미지
마치 인테리어 매거진의 커버 또는 화보 페이지처럼 구성
반응형 대응: 모바일에서는 상하 레이아웃으로 전환, 이미지 가독성 최적화

> 스타일: `assets/css/style.css`
> 
> 



### 2. 반응형 웹 제작 (Responsive Web Design)

- **모바일·태블릿·PC 해상도별 완전 대응**
- `@media` 쿼리 기반 반응형 레이아웃 구현
- `%`, `vw`, `flex` 등을 활용한 **유연한 콘텐츠 배치**
- 모바일 환경에서의 **터치 인터랙션 최적화**

> 대응 해상도:
> 
> - Mobile: 480px 이하
> - Tablet: 768px
> - Desktop: 1280px 이상

> 관련 파일:
> `assets/css/style.css`, `scss/style.scss`
> 
> 각 개별 페이지별 SCSS
> `Brand.scss`, `Gallery.scss`, `Product.scss` 등)
> 

![Image](https://github.com/user-attachments/assets/726a2452-32f5-42b0-867d-65f07db8e0d3)





###  3. 가상체험관 (Virtual Interior Experience) 
사용자가 직접 인테리어 스타일을 체험해볼 수 있도록 구성된 가상 체험 공간

- 마우스 오버 / 클릭 시 전환되는 시뮬레이션 UI 제공
- 향후 실제 3D 가상 인테리어 구현도 가능하도록 기본 구조 설계
- 가상의 방에 제품 배치 등 브랜드 몰입 경험 유도
- **커스텀 마커 이미지 적용**으로 시각적 차별화

> 관련 파일:
> 
> 
> `bupyeongmarket/map.html`
> 
> `assets/js/common.js`
> 
> `assets/css/map.css`, `scss/map.scss`

3. 가상체험관 (Virtual Interior Experience)
사용자가 직접 인테리어 스타일을 체험해볼 수 있도록 구성된 가상 체험 공간







사용 파일:
Virtual.html
스타일 파일: assets/css/Virtual.css, scss/Virtual.scss
스크립트 파일: assets/js/virtual.js

![Image](https://github.com/user-attachments/assets/48776fe2-c3a1-4b9d-a288-6d600e6f82ab)

###  4. 갤러리(제품 팝업, 모달창) 


## ✨ 기타 적용 사항 요약

| 항목 | 내용 |
| --- | --- |
| **초기화면** | Splash 영상으로 시각적 인트로 구현 |
| **반응형 웹** | 전 디바이스 대응 미디어 쿼리 적용 |
| **지도 연동** | Kakao Map API 활용, 위치 기반 상호 표시 |
| **접근성 고려** | 모바일/저사양 기기에서도 자연스러운 동작 |
