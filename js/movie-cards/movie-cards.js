
const movieCards = document.getElementById('movie-cards')
const dialogBox = document.createElement('dialog')
dialogBox.setAttribute("id", "modalbox")

import cards from "./moviedata.js";

 

function appendCards() {   
  movieCards.innerHTML = cards.map(card => `
  <div id="${card.id}"class="movie-card">
  <img id="poster" src="${card.poster}">
  </div>`
  ).join('\n')
  
}
export default appendCards

function popUp(){ 
  
  
  movieCards.addEventListener('click',(event)=>{

  dialogBox.innerHTML = cards.map(card =>
    `<div id="${card.id}"class="movie-card">
    <h2>${card.title}</h2>
    <h3>${card.director}</h3>
    <p>${card.year}</p>
    <p>${card.synopsis}</p>
    <button>close</button>
    </div>
    </dialog>
    `).join('\n')
})
document.body.appendChild(dialogBox);
}

  