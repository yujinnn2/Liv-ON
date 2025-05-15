var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 26,
  centeredSlides: true,
  breakpoints: {
    1024: {
      slidesPerView: 2,
    }
  },
  clickable: true,
  navigation: {
    prevEl: ".sec02_swiper-button-prev",
  },
});