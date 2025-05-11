
// 슬라이드의 내부 콘텐츠가 좌우로 움직이는 정도를 조절 (0 ~ 1 사이 값)
var interleaveOffset = 0.5;

// Swiper 슬라이더 설정 객체
var swiperOptions = {
    loop: true, // 슬라이드 무한 반복
    speed: 1000, // 슬라이드 전환 속도 (밀리초)
    parallax: true, // parallax 효과 활성화
    autoplay: {
        delay: 6500, // 자동 슬라이드 간 간격 (밀리초)
        disableOnInteraction: false // 사용자와 상호작용해도 자동 재생 유지
    },
    watchSlidesProgress: true, // 슬라이드 이동 진행률 추적 (progress 이벤트용)
    pagination: {
        el: '.swiper-pagination', // 페이지네이션 요소 지정
        clickable: true // 사용자 클릭 가능하게 설정
    },
    navigation: {
        nextEl: '.swiper-button-next', // 다음 버튼
        prevEl: '.swiper-button-prev'  // 이전 버튼
    },

    // 슬라이더 상태 변화에 따른 이벤트 핸들러 설정
    on: {
        // 슬라이드가 전환 중일 때 실행됨
        progress: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress; // 현재 슬라이드의 진행률
                var innerOffset = swiper.width * interleaveOffset; // 내부 요소 이동 거리 계산
                var innerTranslate = slideProgress * innerOffset; // 슬라이드별 이동 거리 계산
                // slide-inner 요소를 좌우로 이동시켜 parallax 효과 연출
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
            }
        },

        // 사용자가 슬라이드를 터치하기 시작할 때 실행됨
        touchStart: function () {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = ""; // 전환 효과 초기화 (즉시 반응 위해)
            }
        },

        // 슬라이드 전환 애니메이션 속도 설정 시 호출됨
        setTransition: function (speed) {
            var swiper = this;
            for (var i = 0; i < swiper.slides.length; i++) {
                // 슬라이드와 내부 요소에 전환 시간 적용
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-inner").style.transition = speed + "ms";
            }
        }
    }
};

// Swiper 인스턴스를 생성하여 슬라이더 동작 시작
var swiper = new Swiper(".swiper-container", swiperOptions);

// 각 슬라이드에 배경 이미지 설정
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
    // data-background 속성이 있으면 해당 이미지를 background-image로 적용
    if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
    }
});
