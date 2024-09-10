import appendCards from "./movie-cards/movie-cards.js";
import confirmMessage from "./form/contact-form.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", confirmMessage);
});

appendCards();
