import modal from "./modules/modal";
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
import calc from './modules/calc';

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
  forms();
  mask('[name = "phone"]');
  checkTextInputs('[name="name"]');
  checkTextInputs('[name="message"]');
  // showMoreStyles('.button-styles','.styles-2');
  showMoreStyles('.button-styles','#styles .row');
  calc('#size','#material','#options','.promocode','.calc-price');
});
