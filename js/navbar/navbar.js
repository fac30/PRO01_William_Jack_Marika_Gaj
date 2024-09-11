const burgerIcon = document.querySelector(".burger-icon");
const navbarList = document.querySelector(".navbar-list");
const navItems = document.querySelectorAll(".nav-item");

const hideAndDisplayList = () => {
  navbarList.classList.toggle("show-navbar");
  navbarList.classList.toggle("mobile-nav");
};

const navEventListeners = () => {
  burgerIcon.addEventListener("click", function () {
    hideAndDisplayList();
    const isExpanded = burgerIcon.getAttribute("aria-expanded");
    burgerIcon.setAttribute(
      "aria-expanded",
      isExpanded === "false" ? "true" : "false"
    );
    burgerIcon.setAttribute(
      "aria-label",
      isExpanded === "false" ? "open navigation menu" : "close navigation menu"
    );
  });

  navItems.forEach((element) => {
    element.addEventListener("click", function () {
      hideAndDisplayList();
    });
  });
};

export default navEventListeners;
