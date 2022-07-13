/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");












window.addEventListener("DOMContentLoaded", () => {
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(".button-design", ".popup-design", ".popup-design .popup-close");
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(".button-consultation", ".popup-consultation", ".popup-consultation .popup-close", true);
  Object(_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(".fixed-gift", ".popup-gift", ".popup-gift .popup-close", true, 0, 1, true);
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'h', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
  Object(_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name = "phone"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  Object(_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]'); // showMoreStyles('.button-styles','.styles-2');

  Object(_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  Object(_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])('#size', '#material', '#options', '.promocode', '.calc-price');
  Object(_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  Object(_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])('.sizes-block');
  Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])('.accordion-heading', '.accordion-block');
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
});

/***/ }),

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const accordion = (triggersSelector, itemsSelector) => {
//   const btns = document.querySelectorAll(triggersSelector);
//   const blocks = document.querySelectorAll(itemsSelector);
//     blocks.forEach((block) => {
//       block.classList.add("animated", "fadeInDown");
//     });
//     btns.forEach((btn) => {
//       btn.addEventListener("click", function () {
//         if (!this.classList.contains("active")) {
//           btns.forEach((btn) => {
//             btn.classList.remove("active", "active-style");
//           });
//           this.classList.add("active", "active-style");
//         }
//       });
//     });
// };
const accordion = triggersSelector => {
  const btns = document.querySelectorAll(triggersSelector);
  btns.forEach(btn => {
    btn.addEventListener("click", function () {
      btns.forEach(btn => {
        btn.classList.remove('active-style');
        btn.nextElementSibling.classList.remove("active-content");
        btn.nextElementSibling.style.maxHeight = "0px";
      });
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");

      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
      } else {
        this.nextElementSibling.style.maxHeight = "0px";
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burger = (menuSelector, burgerSelector) => {
  const menuEl = document.querySelector(menuSelector);
  const burgerEl = document.querySelector(burgerSelector);
  menuEl.style.display = "none";
  burgerEl.addEventListener("click", () => {
    if (menuEl.style.display == "none" && window.screen.availWidth < 993) {
      menuEl.style.display = "block";
    } else {
      menuEl.style.display = "none";
    }
  });
  window.addEventListener("resize", () => {
    if (window.screen.availWidth > 992) {
      menuEl.style.display = "none";
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const calc = (size, material, options, promocode, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promocodeBlock = document.querySelector(promocode);
  const resultBlock = document.querySelector(result);
  let sum = 0;

  const calcFunc = () => {
    sum = Math.round(+sizeBlock.value * +materialBlock.value + +optionsBlock.value);

    if (sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = 'Пожалуйста выберите размер и материал';
    } else if (promocodeBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    } else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promocodeBlock.addEventListener('input', calcFunc);
};

/* harmony default export */ __webpack_exports__["default"] = (calc);

/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkTextInputs = selector => {
  const txtInputs = document.querySelectorAll(selector);
  txtInputs.forEach(input => {
    input.addEventListener('keypress', function (e) {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const filter = () => {
  const menu = document.querySelector(".portfolio-menu");
  const items = menu.querySelectorAll("li");
  const btnAll = menu.querySelector(".all");
  const btnLovers = menu.querySelector(".lovers");
  const btnChef = menu.querySelector(".chef");
  const btnGirl = menu.querySelector(".girl");
  const btnGuy = menu.querySelector(".guy");
  const btnGrandmother = menu.querySelector(".grandmother");
  const btnGranddad = menu.querySelector(".granddad");
  const wrapper = document.querySelector(".portfolio-wrapper");
  const markAll = wrapper.querySelectorAll(".all");
  const markLovers = wrapper.querySelectorAll(".lovers");
  const markChef = wrapper.querySelectorAll(".chef");
  const markGirl = wrapper.querySelectorAll(".girl");
  const markGuy = wrapper.querySelectorAll(".guy");
  const no = document.querySelector(".portfolio-no");

  const typeFilter = markType => {
    markAll.forEach(mark => {
      mark.style.display = "none";
      mark.classList.remove("animated", "fadeIn");
    });
    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType) {
      markType.forEach(mark => {
        mark.style.display = "block";
        mark.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnLovers.addEventListener("click", () => {
    typeFilter(markLovers);
  });
  btnChef.addEventListener("click", () => {
    typeFilter(markChef);
  });
  btnGirl.addEventListener("click", () => {
    typeFilter(markGirl);
  });
  btnGuy.addEventListener("click", () => {
    typeFilter(markGuy);
  });
  btnAll.addEventListener("click", () => {
    typeFilter(markAll);
  });
  btnGrandmother.addEventListener("click", () => {
    typeFilter();
  });
  btnGranddad.addEventListener("click", () => {
    typeFilter();
  });
  menu.addEventListener("click", e => {
    let target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach(item => item.classList.remove('active'));
      target.classList.add('active');
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");


const forms = () => {
  const form = document.querySelectorAll("form");
  const inputs = document.querySelectorAll("input");
  const upload = document.querySelectorAll('[name = "upload"]'); //   checkNumInputs('input[name = "user_phone"]');

  const message = {
    loading: "Загрузка...",
    success: "Спасибо!Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
    spinner: "assets/img/spinner.gif",
    ok: "assets/img/ok.png",
    fail: "assets/img/fail.png"
  };
  const path = {
    designer: "assets/server.php",
    question: "assets/question.php"
  };

  const clearInputs = () => {
    inputs.forEach(input => input.value = "");
    upload.forEach(item => {
      item.previousElementSibling.textContent = "Файл не выбран";
    });
  };

  upload.forEach(item => {
    item.addEventListener("input", () => {
      let dots;
      const arr = item.files[0].name.split(".");
      arr[0].length > 5 ? dots = "..." : dots = ".";
      const name = arr[0].substring(0, 6) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener("submit", e => {
      e.preventDefault();
      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.parentNode.appendChild(statusMessage);
      item.classList.add("animated", "fadeOutUp");
      setTimeout(() => {
        item.style.display = "none";
      }, 400);
      let statusImg = document.createElement("img");
      statusImg.setAttribute("src", message.spinner);
      statusImg.classList.add("animated", "fadeInUP");
      statusMessage.appendChild(statusImg);
      let textMessage = document.createElement("div");
      textMessage.textContent = message.loading;
      statusMessage.appendChild(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest(".popup-design") || item.classList.contains("calc_form") ? api = path.designer : api = path.question;
      console.log(api);
      Object(_services_request__WEBPACK_IMPORTED_MODULE_0__["postData"])(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute("src", message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute("src", message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          statusMessage.remove();
          item.style.display = "block";
          item.classList.remove("fadeOutUp");
          item.classList.add("fadeInUp");
        }, 3000);
      });
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };

  function createMask(event) {
    let matrix = '+7 (___) ___ __ __',
        i = 0,
        def = matrix.replace(/\D/g, ''),
        val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import modal from './modules/modals';
// window.addEventListener('DOMContentLoaded',()=>{
//    modal(
//         ".popup_engineer_btn",
//         ".popup_engineer",
//         ".popup_engineer .popup_close",
//         3000
//       );
// });
function modal(triggerSelector, modalSelector, closeSelector) {
  let closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let time = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  let end = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
  let destroy = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  let btnPressed = false;
  const modalTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const modalCloseBtn = document.querySelector(closeSelector);
  const windows = document.querySelectorAll("[data-modal]");
  const scroll = calcScroll();
  let modalTimerId;

  function openModal() {
    windows.forEach(window => {
      window.style.display = "none";
      window.classList.add('animated', 'fadeIn');
    }); // modal.classList.add("show");
    // modal.classList.remove("hide");

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
    clearInterval(modalTimerId);
  }

  function closeModal() {
    windows.forEach(window => {
      window.style.display = "none";
    }); // modal.classList.add("hide");
    // modal.classList.remove("show");

    modal.style.display = "none";
    document.body.style.overflowY = "";
    document.body.style.marginRight = `0px`;
  }

  function calcScroll() {
    let div = document.createElement("div");
    div.style.width = "50px";
    div.style.height = "50px";
    div.style.overflowY = "scroll";
    div.style.visibility = "hidden";
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  modalTrigger.forEach(item => {
    item.addEventListener("click", e => {
      if (e.target) {
        e.preventDefault();
      }

      btnPressed = true;

      if (destroy) {
        item.remove();
      }

      openModal();
    });
  });
  modalCloseBtn.addEventListener("click", () => {
    closeModal();
  });
  modal.addEventListener("click", e => {
    if (e.target === modal && closeClickOverlay) {
      closeModal();
    }
  }); // close modal when press Escape

  document.addEventListener("keydown", e => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }

    if (e.code === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  }); // open modal after sometime //

  let display;
  windows.forEach(item => {
    if (getComputedStyle(item).display !== "none") {
      display = 1;
    }
  });

  if (time > 0 && !display) {
    modalTimerId = setTimeout(openModal, time);
  } //open modal when scroll to the end of page


  if (end === 1) {
    window.addEventListener("scroll", () => showModalByScroll('.fixed-gift'));
  }

  function showModalByScroll(selector) {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight && !btnPressed) {
      document.querySelector(selector).click();
      openModal();
      window.removeEventListener("scroll", () => showModalByScroll(selector));
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pictureSize = imgSelector => {
  const blocks = document.querySelectorAll(imgSelector);

  function showImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -4) + "-1.png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
      p.style.display = "none";
    });
  }

  function hideImg(block) {
    const img = block.querySelector("img");
    img.src = img.src.slice(0, -6) + ".png";
    block.querySelectorAll("p:not(.sizes-hit)").forEach(p => {
      p.style.display = "block";
    });
  }

  blocks.forEach(block => {
    block.addEventListener("mouseover", () => {
      showImg(block);
    });
    block.addEventListener("mouseout", () => {
      hideImg(block);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const scrolling = upSelector => {
  const upEL = document.querySelector(upSelector);
  upEL.classList.add("animated");
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1650) {
      upEL.classList.add("fadeIn");
      upEL.classList.remove("fadeOut");
    } else {
      upEL.classList.remove("fadeIn");
      upEL.classList.remove("fadeIn");
    }
  }); //requstAnimationFrame

  let links = document.querySelectorAll('[href^="#"]');
  console.log(links);
  let speed = 0.4;
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let widthTop = document.documentElement.scrollTop;
      let hash = this.hash;
      let toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start;
        let r = toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);
        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  }); //pure js scrolling
  //   const element = document.documentElement;
  //   const body = document.body;
  //   const calcScroll = () => {
  //     upEL.addEventListener("click", function (e) {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //       if (this.hash !== "") {
  //         e.preventDefault();
  //         let hashElement = document.getElementById(this.hash.substring(1));
  //         let hashElementTop = 0;
  //         while (hashElement.offsetParent) {
  //           hashElementTop += hashElement.offsetTop;
  //           hashElement = hashElement.offsetParent;
  //         }
  //         hashElementTop = Math.round(hashElementTop);
  //         smoothScroll(scrollTop, hashElementTop, this.hash);
  //       }
  //     });
  //   };
  //   const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1;
  //     let prevScroolTop;
  //     let speed;
  //     if (to > from) {
  //       speed = 30;
  //     } else {
  //       speed = -30;
  //     }
  //     let move = setInterval(function () {
  //       let scrollTop = Math.round(body.scrollTop || element.scrollTop);
  //       if (
  //         prevScroolTop === scrollTop ||
  //         (to > from && scrollTop >= to) ||
  //         (to < from && scrollTop <= to)
  //       ) {
  //         clearInterval(move);
  //         history.replaceState(history.state, document.title, location.href.replace(/#.*$/g,'')+ hash);
  //       } else {
  //         body.scrollTop += speed;
  //         element.scrollTop += speed;
  //         prevScroolTop = scrollTop;
  //       }
  //     },timeInterval);
  //   };
  //   calcScroll();
};

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/request */ "./src/js/services/request.js");


const showMoreStyles = (trigger, wrapper) => {
  // const cards = document.querySelectorAll(styles);
  const btn = document.querySelector(trigger); //   cards.forEach((card) => {
  //     card.classList.add("animated", "fadeInUp");
  //   });
  //   btn.addEventListener("click", () => {
  //     cards.forEach((card) => {
  //       card.classList.remove("hidden-lg", "hidden-md", "hidden-sm", "hidden-xs");
  //       card.classList.add(
  //         "col-sm-3",
  //         "col-sm-offset-0",
  //         "col-xs-10",
  //         "col-xs-offset-1"
  //       );
  //       btn.remove();
  //     });
  //   });

  btn.addEventListener("click", function () {
    Object(_services_request__WEBPACK_IMPORTED_MODULE_0__["getResource"])(" http://localhost:3000/styles").then(res => createCards(res)).catch(error => console.log(error));
    this.remove();
  });

  function createCards(response) {
    response.forEach(_ref => {
      let {
        src,
        title,
        link
      } = _ref;
      let card = document.createElement("div");
      card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1", "animated", "fadeInUp");
      card.innerHTML = `
      <div class="styles-block">
   					<img src=${src} alt="style">
   					<h4>${title}</h4>
  					<a href="${link}">Подробнее</a>
   		</div>
      `;
      document.querySelector(wrapper).appendChild(card);
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const sliders = function (slides, dir, prev, next) {
  let slideIndex = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  const items = document.querySelectorAll(slides);
  let paused = false;

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = "block";
  }

  showSlides(slideIndex);

  function changeSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const nextBtn = document.querySelector(next);
    const prevBtn = document.querySelector(prev);
    prevBtn.addEventListener("click", () => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove("slideInLeft");
      items[slideIndex - 1].classList.add("slideInRight");
    });
    nextBtn.addEventListener("click", () => {
      changeSlides(1);
      items[slideIndex - 1].classList.remove("slideInRight");
      items[slideIndex - 1].classList.add("slideInLeft");
    });
  } catch (e) {}

  function activateAnimation() {
    if (dir === "vertical") {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.add("slideInDown");
      }, 3000);
    } else {
      paused = setInterval(function () {
        changeSlides(1);
        items[slideIndex - 1].classList.remove("slideInRight");
        items[slideIndex - 1].classList.add("slideInLeft");
      }, 3000);
    }
  }

  activateAnimation();
  items[0].parentNode.addEventListener("mouseenter", () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener("mouseleave", () => {
    activateAnimation();
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sliders);

/***/ }),

/***/ "./src/js/services/request.js":
/*!************************************!*\
  !*** ./src/js/services/request.js ***!
  \************************************/
/*! exports provided: postData, getResource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResource", function() { return getResource; });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data
  });
  return await res.text();
};

const getResource = async url => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ })

/******/ });
//# sourceMappingURL=script.js.map