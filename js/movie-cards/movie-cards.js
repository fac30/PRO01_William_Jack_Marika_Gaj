
const movieCards = document.getElementById('movie-cards')

import cards from "./moviedata.js";

 

function appendCards() {   
  movieCards.innerHTML = cards.map(card => `
  <div id="${card.id}" class="movie-card">
  <img id="poster" src="${card.poster}">
  </div>
  <div id="${card.id}" class="movie-modal"> <h2>${card.title}</h2>
      <h3>${card.director}</h3>
      <p>${card.year}</p>
      <p>${card.synopsis}</p>
      <button>close</button></div>`
  ).join('\n')
  
}

 const movieEventListener = () => {
  let renderedModal = ""

  const movieCardElements = document.querySelectorAll(".movie-card")

  
  movieCardElements.forEach((element) => {
    console.log("hellooooo")
    element.addEventListener("click", function() {
      console.log(element.id)
      renderedModal = element.id
      renderModal(element)
    })

  })

  const renderModal = (element) => {
    console.log(element)
    if (element.id === renderedModal) {
      console.log(element.id)
      element.classList.add("show")
      element.style.display = "block"
    }
  }
}




export  {appendCards, movieEventListener}