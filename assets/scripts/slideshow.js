const images = document.querySelectorAll('.slide-image');
const titleElement = document.getElementById('slide-title');
const descriptionElement = document.getElementById('slide-description');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let autoSlideTimer;
let currentIndex = 0;

function showNextSlide(next) {
  console.log(currentIndex + "  " + next);
  // Hide the current image
  images[currentIndex].classList.remove('active');

  // Show the next image
  images[next].classList.add('active');

  // Update text overlay from data attributes
  const currentSlide = images[next];
  if (titleElement) {
  titleElement.textContent = currentSlide.getAttribute('data-title');
  descriptionElement.textContent = currentSlide.getAttribute('data-description');
  }
}

function autoSlide() {
  showNextSlide((currentIndex + 1)  % images.length);
  currentIndex = (currentIndex + 1) % images.length;
}

// Change images and text every 5 seconds
autoSlideTimer = setInterval(autoSlide, 5000);

prevBtn.addEventListener('click', () => {
  showNextSlide((currentIndex - 1 + images.length) % images.length);
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(autoSlide, 5000);
});

nextBtn.addEventListener('click', () => {
  showNextSlide((currentIndex + 1)  % images.length);
  currentIndex = (currentIndex + 1) % images.length;
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(autoSlide, 5000);
});