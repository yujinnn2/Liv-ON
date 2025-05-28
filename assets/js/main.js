var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})

AOS.init();



document.addEventListener('DOMContentLoaded', () => {
  const textBlocks = document.querySelectorAll('.text-block');
  let currentIndex = 0;

  // 스크롤 이벤트 감지
  window.addEventListener('wheel', (e) => {
    e.preventDefault(); // 기본 스크롤 방지 (선택적)

    // 스크롤 방향에 따라 인덱스 변경
    if (e.deltaY > 0) {
      currentIndex = Math.min(currentIndex + 1, textBlocks.length - 1);
    } else {
      currentIndex = Math.max(currentIndex - 1, 0);
    }

    // 모든 텍스트 비활성화 후 현재 텍스트만 활성화
    textBlocks.forEach(block => block.classList.remove('active'));
    textBlocks[currentIndex].classList.add('active');
  });
});


// hbg button 
let hbg = document.querySelector('.hbg');
hbg.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
  $(function () { });
};


    document.addEventListener('DOMContentLoaded', function () {
      const tabEls = document.querySelectorAll('button[data-bs-toggle="tab"]');

      tabEls.forEach(tabEl => {
        tabEl.addEventListener('shown.bs.tab', function () {
          // AOS 새로고침
          AOS.refresh();

          // 모든 탭 콘텐츠 숨기기
          document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.querySelectorAll('[data-aos]').forEach(el => {
              el.style.opacity = '0';
              el.style.transform = 'translateY(20px)';
            });
          });

          // 활성화된 탭의 요소에만 AOS 적용
          const activePane = document.querySelector('.tab-pane.active');
          if (activePane) {
            setTimeout(() => {
              activePane.querySelectorAll('[data-aos]').forEach(el => {
                el.style.opacity = '';
                el.style.transform = '';
                AOS.init({
                  once: false // 효과가 여러번 나타나도록 설정
                });
              });
            }, 50);
          }
        });
      });
    });

