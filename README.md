# Liv-ON
**목차**

---

1. 서비스 소개
2. 기술스택
3. 프로젝트 산출물

**🏡서비스 소개**

---

**개요 💌**

---

- 웹페이지 명 : Liv;ON (리브온)
    
    Liv;ON 사이트는 **사용자 맞춤형 인테리어 솔루션을 제공하는 데 초점**을 맞추고 있습니다. 
    
    단순히 휴식을 위한 공간이 아닌 사용자들이 자신만의 공간을 아름답고 효율적으로 꾸밀 수 있도록 영감과 실질적인 도움을 주는 것을 목표로 합니다. 최신 인테리어 트렌드, 다양한 스타일 가이드, 그리고 실제 시공 사례들을 통해 사용자들이 인테리어 아이디어를 구체화하고, 필요한 정보를 쉽게 찾아볼 수 있도록 설계되었습니다.
    

**타겟 🎯**

---

- 주요 타겟층
    - **새로운 보금자리를 꾸미는 신혼부부 및 이사 예정자:** 새로운 공간에 대한 기대와 함께 어떻게 꾸밀지 고민하는 분들에게 실용적인 가이드라인과 영감을 제공합니다.
    - **부분 또는 전체 인테리어 리모델링을 계획하는 기존 주택 소유자:** 노후된 공간에 변화를 주고 싶거나, 특정 공간의 분위기를 바꾸고 싶어 하는 분들에게 다양한 디자인 옵션과 전문가 팁을 제공합니다.
    - **DIY 인테리어에 관심 있는 개인:** 직접 자신의 공간을 꾸미는 것을 즐기는 분들을 위해 쉽게 따라 할 수 있는 튜토리얼, 가성비 좋은 아이템 추천, 그리고 창의적인 아이디어를 제안합니다.
    - **인테리어 디자인에 대한 영감을 얻고 싶은 일반 사용자:** 최신 인테리어 트렌드를 파악하거나, 다양한 스타일의 공간을 탐색하며 미적 감각을 향상시키고자 하는 모든 분들을 환영합니다.

**❤️ 페이지 소개**

---

## **🌟 Frontend Technologies**

---

### **1. Core Technologies**

- **HTML5**: 시맨틱 마크업 구조 구현
- **CSS3/Sass**: 모던한 스타일링 및 변수 관리
- **JavaScript (ES6+)**: 인터랙티브 요소 구현

### **2. 주요 라이브러리 & 프레임워크**

- **Bootstrap 5**: 반응형 그리드 시스템 및 UI 컴포넌트
- **Swiper.js**: 인터랙티브 이미지 슬라이더 구현 (v8.4.5)
- **AOS (Animate On Scroll)**: 스크롤 애니메이션 효과
- **jQuery**: DOM 조작 및 이벤트 처리 (v3.5.1)

### **3. 성능 최적화**

- **Lazy Loading**: 이미지 지연 로딩 구현
- **CSS 최소화**: PurgeCSS 사용
- **웹폰트 최적화**: preload 적용
- 

## **🚀 Deployment & Infrastructure**

---

### **1. 호스팅**

- **Netlify**: 정적 사이트 호스팅
    - CI/CD 자동 배포 시스템
    - Instant Cache Invalidation

### **2. 도메인 관리**

- **Netlify DNS**: 도메인 네임 서버 관리
- **SSL 인증서**: Let's Encrypt 자동 갱신

## **🛠 Development Tools**

---

### **1. 빌드 시스템**

- **npm**: 패키지 관리
- **Gulp**: 자동화 태스크 실행 (v4.0.2)

### **2. 디자인 도구**

- **Figma**: 프로토타이핑 및 디자인 시스템
- **Adobe Photoshop**: 이미지 최적화

## **📊 성능 메트릭스 (Lighthouse 기준)**

| **Category** | **Score** |
| --- | --- |
| Performance | 92 |
| Accessibility | 95 |
| Best Practices | 93 |
| SEO | 90 |

## **🌟 반응형 구현 핵심**

---

### **1. 반응형 기반 기술**

- **Bootstrap 5 Grid System**
    - 12컬럼 그리드 레이아웃
    - 반응형 브레이크포인트 (576px, 768px, 992px, 1200px, 1400px)
    - **`.row-cols-*`** 클래스를 활용한 동적 컬럼 조정
- **CSS3 Media Queries**
    
    기기별 반응형 대응  
    
    (Desktop) 1920px  1280px  1024px
    
    (Tablet) 768px
    
    (Mobile) 540px  430px  390px 
    

## **📊 반응형 지원 현황**

| **디바이스 유형** | **지원 내용** |
| --- | --- |
| 데스크탑 (1200px+) | Full UI with animations |
| 태블릿 (768px~1199px) | Simplified hover effects |
| 모바일 (375px~767px) | Touch-optimized UI |
| 폴더블/소형 (~374px) | Vertical layout adaptation |

> 모든 반응형 구현은 WCAG 2.1 접근성 기준을 준수합니다.
> 

**👩‍👧 프로젝트 산출물**

---

**1. Figma**

https://www.figma.com/design/eR9iJ2wgtY0Nvv6b4VWatf/Liv-ON_Portfolio?node-id=0-1&t=DhRIqltyz7KiOkpU-1

**2. 웹페이지 링크** 

[Liv;ON 홈페이지 바로가기](https://liveon1018.netlify.app/)
