const burgerIcon = document.querySelector(".burger-icon");
const navbarList = document.querySelector(".navbar-list");
const navItems = document.querySelectorAll(".nav-item");

const hideAndDisplayList = () => {
  navbarList.classList.toggle("show-navbar");
  navbarList.classList.toggle("mobile-nav");
  //   navbarList.classList.remove("navbar-list");
};

const navEventListeners = () => {
  burgerIcon.addEventListener("click", function () {
    hideAndDisplayList();
  });

  navItems.forEach((element) => {
    element.addEventListener("click", function () {
      hideAndDisplayList();
    });
  });
};

export default navEventListeners;
