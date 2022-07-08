// import modal from './modules/modals';

// window.addEventListener('DOMContentLoaded',()=>{
//    modal(
//         ".popup_engineer_btn",
//         ".popup_engineer",
//         ".popup_engineer .popup_close",
//         3000
//       );
// });

function modal(
  triggerSelector,
  modalSelector,
  closeSelector,
  closeClickOverlay = true,
  time = 0,
  end = 0,
  destroy = false
) {
  let btnPressed = false;
  const modalTrigger = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);
  const modalCloseBtn = document.querySelector(closeSelector);
  const windows = document.querySelectorAll("[data-modal]");
  const scroll = calcScroll();

  let modalTimerId;

  function openModal() {
    windows.forEach((window) => {
      window.style.display = "none";
      window.classList.add('animated','fadeIn');
    });
    // modal.classList.add("show");
    // modal.classList.remove("hide");
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
    document.body.style.marginRight = `${scroll}px`;
    clearInterval(modalTimerId);
  }

  function closeModal() {
    windows.forEach((window) => {
      window.style.display = "none";
    });
    // modal.classList.add("hide");
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

  

  modalTrigger.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (e.target) {
        e.preventDefault();
      }
      btnPressed = true;

      if(destroy){
        item.remove();
      }

      openModal();
    });
  });

  modalCloseBtn.addEventListener("click", () => {
    closeModal();
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal && closeClickOverlay) {
      closeModal();
    }
  });
  // close modal when press Escape
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
    if (e.code === "Escape" && modal.style.display === "block") {
      closeModal();
    }
  });
  // open modal after sometime //
  let display;
  windows.forEach((item) => {
    if (getComputedStyle(item).display !== "none") {
      display = 1;
    }
  });

  if (time > 0 && !display) {
    
    
    modalTimerId = setTimeout(openModal, time);
  }
  //open modal when scroll to the end of page
  if (end === 1) {
    window.addEventListener("scroll", ()=>showModalByScroll('.fixed-gift'));
  }
  function showModalByScroll(selector) {
    if (
      window.scrollY + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight && !btnPressed
    ) {
      
      document.querySelector(selector).click();
      openModal();

      window.removeEventListener("scroll", ()=>showModalByScroll(selector));
    }
  }
}

export default modal;
