const movieCards = document.getElementById("movie-cards");

import cards from "./moviedata.js";

function appendCards() {
  movieCards.innerHTML = cards
    .map(
      (card) => `
  <div id="${card.id}" class="movie-card" tabindex=0>
  <img id="poster" src="${card.poster}">
  
  
  <div id="movie-modal-${card.id}" class="movie-modal" tabindex=0> <h2>${card.title}</h2>
      <h3>${card.director}</h3>
      <p>${card.year}</p>
      <p>${card.synopsis}</p>
      <button id="close-modal" class="close-modal" tabindex=0>close</button></div>
  </div>
  
  
  `
    )
    .join("\n");
}

const movieEventListener = () => {
  let selectedModal = "";

  const movieCardElements = document.querySelectorAll(".movie-card");
  const movieModals = document.querySelectorAll(".movie-modal");
  const modalClose = document.querySelectorAll(".close-modal");

  movieCardElements.forEach((element) => {
    element.addEventListener("dblclick", function () {
      selectedModal = `movie-modal-${element.id}`;
      renderModal();
    });
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        selectedModal = `movie-modal-${element.id}`;
        renderModal();
      }
    });
  });

  modalClose.forEach((buttonEl) => {
    buttonEl.addEventListener("click", () => {
      selectedModal = "";
      console.log(selectedModal);
      renderModal();
    });
  });

  const renderModal = () => {
    movieModals.forEach((modal) => {
      if (modal.id === selectedModal) {
        console.log(modal, selectedModal);
        modal.classList.add("show");
      }
      if (modal.id !== selectedModal) {
        modal.classList.remove("show");
      }
    });
  };
};

export { appendCards, movieEventListener };
