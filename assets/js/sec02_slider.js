// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    hide: "false",
    clickable: true,
  },
  centeredSlides: false, // centeredSlides 비활성화
  slidesOffsetBefore: 50, // 왼쪽 여백 추가 (px 단위)
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    540: {
      slidesPerView: 2,
    },
    430: {
      slidesPerView: 1.5,
    }, 390: {
      slidesPerView: 2,
    }
  }
});

