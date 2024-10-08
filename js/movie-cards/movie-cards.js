const movieCards = document.getElementById("movie-cards");

import cards from "./moviedata.js";

function appendCards() {
  movieCards.innerHTML = cards
    .map(
      (card) => `
  <div tabindex="0" id="${card.id}" class="movie-card">
  <img id="poster" src="${card.poster}">
  
  
  <div id="movie-modal-${card.id}" class="movie-modal">
     <h2>${card.title}</h2>
      <h3>${card.director}</h3>
      <p>${card.year}</p>
      <p>${card.synopsis}</p>
      <button tabindex="0" id="close-modal" class="close-modal">CLOSE</button></div>
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
    element.addEventListener("click", function () {
      console.log("triggered");
      selectedModal = `movie-modal-${element.id}`;
      renderModal();
    });
  });

  movieCardElements.forEach((element) => {
    element.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        console.log("triggered");
        selectedModal = `movie-modal-${element.id}`;
        renderModal();
      }
    });
  });

  modalClose.forEach((buttonEl) => {
    buttonEl.addEventListener("click", function (event) {
      event.stopPropagation();
      selectedModal = "";
      console.log(selectedModal);
      renderModal();
    });
  });

  const renderModal = () => {
    movieModals.forEach((modal) => {
      if (modal.id === selectedModal) {
        console.log(selectedModal);
        modal.classList.add("show");
      }
      if (modal.id !== selectedModal) {
        modal.classList.remove("show");
      }
    });
  };
};

export { appendCards, movieEventListener };
