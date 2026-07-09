// 슬라이더
var currentSlide = 0;
var slides = document.querySelectorAll('.slide');
var dots = document.querySelectorAll('.dot');
var autoSlide;

if (slides.length === 0) {
  slides = [];
  dots = [];
}

function showSlide(n) {
  slides.forEach(function(slide) {
    slide.classList.remove('active');
  });
  dots.forEach(function(dot) {
    dot.classList.remove('active');
  });
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(currentSlide + n);
  resetAutoSlide();
}

function goSlide(n) {
  showSlide(n);
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlide = setInterval(function() {
    showSlide(currentSlide + 1);
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

if (slides.length > 0) {
  startAutoSlide();
}

// 햄버거 메뉴
function toggleMenu() {
  var gnb = document.querySelector('.gnb');
  gnb.classList.toggle('open');
}

// 모바일 드롭다운
var gnbItems = document.querySelectorAll('.gnb > li');
gnbItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      // 하위메뉴(dropdown) 안의 실제 링크를 클릭한 경우엔 그대로 페이지 이동
      if (e.target.closest('.dropdown')) {
        return;
      }
      e.preventDefault();
      gnbItems.forEach(function(other) {
        if (other !== item) {
          other.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    }
  });
});

// 스크롤 시 헤더 그림자
window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 2px 12px rgba(0,0,0,0.2)';
  } else {
    header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
  }
});