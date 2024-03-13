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
  slidesPerView: 5,
  loop: true,
});
