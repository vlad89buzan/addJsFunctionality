import "./slider";
import modal from "./modules/modals";
import tabs from "./modules/tabs.js";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  let modalState = {};
  changeModalState(modalState);
  modal(
    ".popup_engineer_btn",
    ".popup_engineer",
    ".popup_engineer .popup_close"
  );
  modal(".phone_link", ".popup", ".popup .popup_close");
  modal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  modal(
    ".popup_calc_button",
    ".popup_calc_profile",
    ".popup_calc_profile_close",
    false
  );
  modal(
    ".popup_calc_profile_button",
    ".popup_calc_end",
    ".popup_calc_end_close",
    false
  );
  tabs(".glazing_slider", ".glazing_block", ".glazing_content", "active");
  tabs(
    ".decoration_slider",
    ".no_click",
    ".decoration_content>div>div",
    "after_click"
  );
  tabs(
    ".balcon_icons",
    ".balcon_icons_img",
    ".big_img>img",
    "do_image_more",
    0,
    "inline-block"
  );
  forms(modalState);
  timer(".container1", "2022-07-08");
  images();
});
