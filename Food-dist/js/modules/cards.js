import {getResource} from '../services/services';

function cards(){
// class for cards
class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUah();
      this.changeHeight();
    }
    changeToUah() {
      this.price = this.price * this.transfer;
    }
    changeHeight() {
      const boxes = document.querySelectorAll(".menu__item-descr");
      let height = 0;
      //Определяем максимальную высоту блока
      for (let i = 0; i < boxes.length; i++) {
        var currentHeight = boxes[i].offsetHeight;
        if (currentHeight > height) {
          height = currentHeight;
        }
      }
      //Задаем максимальную высоту блока всем элементам
      for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.height = height + "px";
      }
    }
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }

      element.innerHTML = `
        <img src=${this.src} alt="=${this.alt}">
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
        <div class="menu__item-cost">Цена:</div>
        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
        `;
      this.parent.append(element);
    }
  }
 
  getResource(" http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}

//module.exports = cards;
export default cards;