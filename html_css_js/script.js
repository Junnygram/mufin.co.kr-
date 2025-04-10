// ===== Hero Carousel Logic =====
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

const nextBtn = document.getElementById('nextSlide');
const prevBtn = document.getElementById('prevSlide');

if (nextBtn && prevBtn) {
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Autoplay every 4s
  setInterval(nextSlide, 4000);
}

// ===== Typing Effect =====
const typingText = document.getElementById('typingText');
const message = `안녕하세요, 사색의향기 이사장 오덕균 입니다.\n사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를 만들어가고자 노력해왔습니다.\n앞으로도 문학과 인문학의 가치를 공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.\n많은 관심과 응원 부탁드립니다. 감사합니다.`;
let charIndex = 0;

function typeLine() {
  if (charIndex < message.length) {
    const char = message.charAt(charIndex);
    typingText.innerHTML += char === '\n' ? '<br>' : char;
    charIndex++;
    setTimeout(typeLine, 30);
  }
}

if (typingText) {
  typeLine();
}

// ===== Partners Carousel Scrollable =====
const partnerCarousel = document.querySelector('.carousel-partners');

if (partnerCarousel) {
  let scrollAmount = 0;
  setInterval(() => {
    scrollAmount += 1;
    partnerCarousel.scrollLeft += 1;
    if (
      partnerCarousel.scrollLeft + partnerCarousel.offsetWidth >=
      partnerCarousel.scrollWidth
    ) {
      partnerCarousel.scrollLeft = 0;
      scrollAmount = 0;
    }
  }, 40);
}
