const prevBtn = document.getElementById("prevBtnHero");
const nextBtn = document.getElementById("nextBtnHero");
const slides = document.querySelector(".hero__slides");
const totalSlides = document.querySelectorAll(".hero__slide").length;

let slideIndex = 0;

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlidePosition();
});

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(${-slideIndex * 340}px)`;
}
