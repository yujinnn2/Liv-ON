// swiper 
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 3,
    },
    540: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 2,
    }
  },
  spaceBetween: 30,
});


// 제품 팝업
$(function () {
  // 모달 버튼 클릭 이벤트
  $('.act__btn_01').click(function (e) {
    e.stopPropagation();
    $('.act__text_01').toggleClass('act_btn_show');
    $('.modal-overlay').toggleClass('active');
  });

  $('.act__btn_02').click(function (e) {
    e.stopPropagation();
    $('.act__text_02').toggleClass('act_btn_show');
    $('.modal-overlay').toggleClass('active');
  });

  $('.act__btn_03').click(function (e) {
    e.stopPropagation();
    $('.act__text_03').toggleClass('act_btn_show');
    $('.modal-overlay').toggleClass('active');
  });

  // 모달 외부 클릭 시 닫기
  $(document).click(function (e) {
    // 클릭한 요소가 모달이나 버튼이 아닌 경우
    if (!$(e.target).closest('.act__text_01, .act__text_02, .act__text_03, .act__btn_01, .act__btn_02, .act__btn_03').length) {
      $('.act__text_01, .act__text_02, .act__text_03').removeClass('act_btn_show');
      $('.modal-overlay').removeClass('active');
    }
  });

  // 모달 내부 클릭 시 이벤트 전파 방지
  $('.act__text_01, .act__text_02, .act__text_03').click(function (e) {
    e.stopPropagation();
  });
});