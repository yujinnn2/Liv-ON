// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    hide: "false",
    clickable: true,
  },
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
