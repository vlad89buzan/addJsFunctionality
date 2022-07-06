import tabs from "./modules/tabs";
import modal from "./modules/modal";
import { openModal } from "./modules/modal";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calc from "./modules/calc";
import form from "./modules/form";
import slider from "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  // const tabs = require('./modules/tabs');
  // const modal = require('./modules/modal');
  // const timer = require('./modules/timer');
  // const cards = require('./modules/cards');
  // const calc = require('./modules/calc');
  // const form = require('./modules/form');
  // const slider = require('./modules/slider');

  const modalTimerId = setTimeout(
    () => openModal(".modal", modalTimerId),
    50000
  );
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  modal("[data-modal]", ".modal", modalTimerId);
  timer();
  cards();
  calc();
  form("form", modalTimerId);
  slider({
    container: ".offer__slider",
    slide:".offer__slide",
    nextArrow:".offer__slider-next",
    prevArrow:".offer__slider-prev",
    totalCounter:"#total",
    currentCounter:"#current",
    wrapper:".offer__slider-wrapper",
    field:".offer__slider-inner",
  });
});
