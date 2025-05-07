// swiper 02
let swiper = new Swiper(".sec02_mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".next_btn",
  },
});


//swiper 01
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.sec01_swiper', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    speed: 1000,
    mousewheel: true,
    effect: 'slide',
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    on: {
      init: function () {
        // 초기화 시 첫 슬라이드 애니메이션 트리거
        this.slides[this.activeIndex].classList.add('.sec01_swiper-slide-active');
      },
      slideChange: function () {
        // 슬라이드 변경 시 애니메이션 리셋
        const slides = this.slides;
        for (let i = 0; i < slides.length; i++) {
          slides[i].classList.remove('swiper-slide-active');
        }
        slides[this.activeIndex].classList.add('swiper-slide-active');
      }
    },
    // 마지막 swiper에서 하단으로 스크롤 가능띠 
    on: {
      reachEnd: function () {
        swiper.mousewheel.disable();
      }
    }
  });
  window.addEventListener('wheel', function (event) {
    if (event.deltaY < 0) {
      swiper.mousewheel.enable();
    } else if (event.deltaY > 0) {
    }
  });
});


