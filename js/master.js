import {appendCards, movieEventListener} from "./movie-cards/movie-cards.js";
import confirmMessage from "./form/contact-form.js";
import navEventListeners from "./navbar/navbar.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", confirmMessage);
});

navEventListeners();
appendCards();
movieEventListener();
