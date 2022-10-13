let wikileftEl = document.getElementById("wikileft");
let wikiinfoEl = document.getElementById("wikiinfo");
let fightbtnEl = document.getElementById("fightbtn")
let character1 = document.getElementById("leftselection")
let character2 = document.getElementById("rightselection")






fightbtnEl.addEventListener("click", function() {
    fetch (`https://pokeapi.co/api/v2/pokemon/${character1}/`)
    
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));



}
)
     // no-cors, *cors, same-origin

// fightbtnEl.addEventListener("click", function() {
//         fetch(`https://superheroapi.com/api/10166921538705314/${character1}/powerstats`)
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
      
    

