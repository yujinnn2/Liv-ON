// 햄버거 메뉴 토글 기능
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navBar = document.getElementById('navBar');

  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    navBar.classList.toggle('active');

    // 메뉴 열릴 때 body 스크롤 막기
    if (navBar.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  });

  // 메뉴 링크 클릭 시 모바일에서 자동으로 닫히도록
  const navLinks = document.querySelectorAll('.nav-bar a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 992) {
        hamburger.classList.remove('active');
        navBar.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // 화면 크기 변경 시 체크
  window.addEventListener('resize', function () {
    if (window.innerWidth > 992) {
      hamburger.classList.remove('active');
      navBar.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

// AOS
AOS.init();