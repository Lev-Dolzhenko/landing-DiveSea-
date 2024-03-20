import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline();

tl.fromTo(
  ".hero__title",
  { y: 100, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.4 }
)
  .fromTo(
    ".hero__subtitle",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 }
  )
  .fromTo(
    ".hero__buttons",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 }
  )
  .fromTo(
    ".hero__info",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 }
  )
  .fromTo(
    ".hero__swiper",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1, duration: 0.4 }
  )
  .fromTo(
    ".slides__button_wrapper-hero",
    { y: 100, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4 }
  )
  .fromTo(".header__wrapper", { opacity: 0 }, { opacity: 1, duration: 0.4 });

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".top__title",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".top",
      start: "top center",
      end: "20%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".top_swiper",
  { opacity: 0, x: 100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".top",
      start: "top center",
      end: "30%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".viewed_top_wrapper",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".top",
      start: "center center",
      end: "70%, center",
      scrub: true,
    },
  }
);
gsap.fromTo(
  ".marketplace__title",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".marketplace",
      start: "top center",
      end: "15%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".marketplace__tags",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".marketplace",
      start: "top center",
      end: "15%, center",
      scrub: true,
    },
  }
);

const benefitsItems = document.querySelectorAll(".benefits__item");
console.log(benefitsItems);

benefitsItems.forEach((benefitsItem) => {
  gsap.fromTo(
    benefitsItem,
    { opacity: 0, x: -100 },
    {
      opacity: 1,
      x: 0,
      scrollTrigger: {
        trigger: benefitsItem,
        start: "0% center",
        end: "100%, center",
        scrub: true,
      },
    }
  );
});

gsap.fromTo(
  ".benefits__title",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "30%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".benefits__new",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "30%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".benefits__new",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "30%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".viewed_benefits",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "50%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".benefits__best",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".benefits",
      start: "top center",
      end: "50%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".community__title",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".community  ",
      start: "top center",
      end: "30%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".community__title",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".community  ",
      start: "top center",
      end: "30%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".community__subtitle",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".community",
      start: "top center",
      end: "40%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".community__button_wrapper",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".community",
      start: "top center",
      end: "40%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".questions__title",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".questions",
      start: "top center",
      end: "20%, center",
      scrub: true,
    },
  }
);

const questionsitems = document.querySelectorAll(".questions__item");

questionsitems.forEach((questionsitem) => {
  gsap.fromTo(
    questionsitem,
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: questionsitem,
        start: "-200% center",
        end: "top, center",
        scrub: true,
      },
    }
  );
});

gsap.fromTo(
  ".explore__wrapper",
  { opacity: 0, x: -100 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".explore",
      start: "top center",
      end: "20%, center",
      scrub: true,
    },
  }
);

gsap.fromTo(
  ".footer",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: ".explore",
      start: "top center",
      end: "35%, center",
      scrub: true,
    },
  }
);
