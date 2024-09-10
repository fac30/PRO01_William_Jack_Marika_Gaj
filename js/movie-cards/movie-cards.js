const movieCards = document.getElementById('movie-cards');

console.log(movieCards)


import cards  from "./moviedata.js"
console.log(cards)

  function appendCards() {   
         movieCards.innerHTML = cards.map(card => `
         <div id="${card.id}"class="movie-card" >
         <img id="poster" src="${card.poster}">
         </div>`
         ).join('\n')

          }

export default appendCards
// movieCards.addEventListener('click', (cards)=>{
    
// })

        


        
        