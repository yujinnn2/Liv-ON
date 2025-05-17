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