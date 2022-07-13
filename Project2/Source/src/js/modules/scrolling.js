const scrolling = (upSelector) => {
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
  });
  //requstAnimationFrame
  let links = document.querySelectorAll('[href^="#"]');
  console.log(links);
  let speed = 0.4;

  links.forEach((link) => {
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
        let r =
          (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  //pure js scrolling
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

export default scrolling;
