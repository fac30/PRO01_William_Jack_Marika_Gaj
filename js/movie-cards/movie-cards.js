
const movieCards = document.getElementById('movie-cards')

import cards from "./moviedata.js";

 

function appendCards() {   
  movieCards.innerHTML = cards.map(card => `
  <div id="${card.id}" class="movie-card">
  <img id="poster" src="${card.poster}">
  
  <div id="movie-modal-${card.id}" class="movie-modal"> <h2>${card.title}</h2>
      <h3>${card.director}</h3>
      <p>${card.year}</p>
      <p>${card.synopsis}</p>
      <button>close</button></div>

  </div>`
  ).join('\n')
  
}

 const movieEventListener = () => {
  let selectedModal = ""

  const movieCardElements = document.querySelectorAll(".movie-card")
  const movieModals = document.querySelectorAll(".movie-modal")

  movieCardElements.forEach((element) => {

    element.addEventListener("click", function() {
      selectedModal = `movie-modal-${element.id}`
      renderModal()
    })

  })

  const renderModal = () => {

    movieModals.forEach((modal) => {

      if (modal.id === selectedModal) {
        modal.classList.add("show")

      } if (modal.id !== selectedModal) {
        modal.classList.remove("show")
      }
    })
  }
}




export  {appendCards, movieEventListener}