import modal from "./modules/modal";
import sliders from './modules/sliders';

window.addEventListener("DOMContentLoaded", () => {
  modal(".button-design", ".popup-design", ".popup-design .popup-close");
  modal(
    ".button-consultation",
    ".popup-consultation",
    ".popup-consultation .popup-close",
    true
  );
  modal(
    ".fixed-gift",
    ".popup-gift",
    ".popup-gift .popup-close",
    true,
    0,
    1,
    true
  );
  sliders('.feedback-slider-item','h','.main-prev-btn','.main-next-btn');
  sliders('.main-slider-item','vertical');
});
