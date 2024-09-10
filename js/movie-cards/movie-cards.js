
const movieCards = document.getElementById('movie-cards')

import cards from "./moviedata.js";
 

function appendCards() {   
  movieCards.innerHTML = cards.map(card => `
  <div id="${card.id}"class="movie-card">
  <img id="poster" src="${card.poster}">
  </div>`
  ).join('\n')
  
}
export default appendCards


        
// movieCards.addEventListener('click', (e) => {

//   //forEach(e.id === card.id) { showModal()}

//   //call moddal

// })

// function renderModal(){
//   movieCards.innerHTML = cards.map(card => `
//   <div id="${card.id}"class="movie-card">
//   <h2>${card.title}</h2>
//   <h3>${card.director}</h3>
//   <p>${card.year}</p>
//   <p>${card.synopsis}</p>
//   <buttong>close</button>
//   </div>`
//   ).join('\n')
// }

