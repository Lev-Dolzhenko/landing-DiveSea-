import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".hero__swiper", {
  modules: [Navigation, Pagination, Autoplay],
  navigation: {
    nextEl: "#nextBtnHero",
    prevEl: "#prevBtnHero",
  },
  slidesPerView: 1,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    800: {
      slidesPerView: 2,
    },
  },
});
