const movieCards = document.getElementById('movieCards');

const cards = [{
    id: 1,
    title:'Echoes of Tomorrow',
    year:2023,
    director: 'Manrika',
    poster: ,
    synopsis: " In a future where memories can be traded, a rogue scientist uncovers a conspiracy that could rewrite humanity's past and future."
}, 
{   id:2,
    title:'Crimson Horizon' ,
    year: 2020,
    director: 'Gaj',
    poster: ,
    synopsis: ' small coastal town becomes the epicenter of a mysterious phenomenon as the sea turns blood red, and dark secrets begin to surface.'
},
{   id:3,
    title: 'Shattered Reflections',
    year:2019,
    director: 'Jack',
    poster: ,
    synopsis: 'A detective haunted by her past must confront her own fractured psyche to solve a murder that hits too close to home.'},

{   id:4,    
    title: 'The Midnight Paradox',
        year:2024,
        director: 'William',
        poster: ,
        synopsis:  'When a physicist stumbles upon a way to travel between parallel universes, he faces a race against time to save his world from collapsing.'}]

         
    
            
         movieCards.innerHTML = cards.map(card => `
         <div id="${card.id}"class="movie-card" >
         <img src="${card.poster}">
         <h2>${card.title}</h2>
         </div>`
         ).join('\n')

    
        


        
        