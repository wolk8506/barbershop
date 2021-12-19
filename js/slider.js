const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');
let sl1 = document.getElementById('sl1');
let sl2 = document.getElementById('sl2');
let sl3 = document.getElementById('sl3');
let activeSlideIndex = 0;

sliderActive();
upBtn.addEventListener('click', () => {
  changesSlide('up');
});
downBtn.addEventListener('click', () => {
  changesSlide('down');
});

function changesSlide(direction) {
  if (direction === 'up') {
    activeSlideIndex += 1;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }
  sliderActive();

  const width = container.clientWidth;

  mainSlide.style.transform = `translateX(-${activeSlideIndex * width}px)`;
}

function sliderActive() {
  sl1.classList.remove('is-activ');
  sl2.classList.remove('is-activ');
  sl3.classList.remove('is-activ');

  if (activeSlideIndex === 0) {
    sl1.classList.toggle('is-activ');
  } else if (activeSlideIndex === 1) {
    sl2.classList.toggle('is-activ');
  } else if (activeSlideIndex === 2) {
    sl3.classList.toggle('is-activ');
  }
}
