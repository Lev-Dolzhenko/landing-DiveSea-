import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiper = new Swiper(".top_swiper", {
  modules: [Navigation, Pagination, Autoplay],
  navigation: {
    nextEl: "#nextBtnTop",
    prevEl: "#prevBtnTop",
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  loop: true,
  breakpoints: {
    680: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 4,
    },
    1500: {
      slidesPerView: 5,
    },
  },
});
