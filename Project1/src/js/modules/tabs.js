function tabs(
  headerSelector,
  tabSelector,
  contentSelector,
  activeClass,
  startTab = 0,
  display = "block"
) {
  const header = document.querySelector(headerSelector);
  const tab = document.querySelectorAll(tabSelector);
  const content = document.querySelectorAll(contentSelector);
  

  hideTabContent();
  showTabContent();
  function hideTabContent() {
    content.forEach((item) => {
      item.style.display = "none";
    });
    tab.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }
  function showTabContent(i = startTab) {
    content[i].style.display = display;
    tab[i].classList.add(activeClass);
  }

  header.addEventListener("click", (e) => {
    const target = e.target;
    if (
      target.classList.contains(tabSelector.replace(/\./, "")) ||
      target
        .closest(tabSelector)
        .classList.contains(tabSelector.replace(/\./, ""))
    ) {
      tab.forEach((item, i) => {
        if (target == item || target.closest(tabSelector) == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}
export default tabs;
