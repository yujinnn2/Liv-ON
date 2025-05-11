var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 26,
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    }
  },
  pagination: {
    el: ".swiper-pagination",
  },
  clickable: true,
  navigation: {
    prevEl: ".sec02_swiper-button-prev",
  },
});