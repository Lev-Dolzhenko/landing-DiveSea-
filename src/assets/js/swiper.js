const prevBtn = document.getElementById("prevBtnHero");
const nextBtn = document.getElementById("nextBtnHero");
const slides = document.querySelector(".hero__slides");
const totalSlides = document.querySelectorAll(".hero__slide").length;
const totalSlidesArr = document.querySelectorAll(".hero__slide");
console.log(totalSlidesArr);
let slideIndex = 0;

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  if (slideIndex === totalSlides - 1) return;
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  if (slideIndex === totalSlides - 1) return;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(${-slideIndex * 340}px)`;
}
