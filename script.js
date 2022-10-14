let wikileftEl = document.getElementById("wikileft");
let wikiinfoEl = document.getElementById("wikiinfo");
let fightbtnEl = document.getElementById("fightbtn");
let buttonsubmit1El = document.getElementById("button-submit1");
let buttonsubmit2El = document.getElementById("button-submit2");
var pokemonEl1 = document.getElementById("pokemon1");
var pokemonEl2 = document.getElementById("pokemon2");





buttonsubmit1El.addEventListener("click", function (event) {
      event.preventDefault();         
      localStorage.setItem("poke1", pokemonEl1.value.toLowerCase()) 
           
      
    ;})

buttonsubmit2El.addEventListener("click", function (event) {
        event.preventDefault();      
        localStorage.setItem("poke2", pokemonEl2.value.toLowerCase())
        
    })


var pokemon1 = localStorage.getItem("poke1".toLowerCase());
var pokemon2 = localStorage.getItem("poke2".toLowerCase());

console.log(pokemon1);
console.log(pokemon2);

fightbtnEl.addEventListener("click", function() {


    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon1}/`)
    
    .then((response) => response.json())
    .then((data) =>    localStorage.setItem("character1", data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
    );
    

    let characterOneStats = localStorage.getItem("character1")
    console.log(characterOneStats);

    fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon2}/`)
    
    .then((response) => response.json())
    .then((data) =>    localStorage.setItem("character2", data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
    );
    


    let characterTwoStats = localStorage.getItem("character2")
    console.log(characterTwoStats);

    if (characterOneStats > characterTwoStats){
        console.log(pokemon1 + " Wins");
    }
    else if (characterTwoStats > characterOneStats){
        console.log(pokemon2 + " Wins");
    }
    else {
        console.log("Draw!");
    }

  
})








    

    
           

    // let characterOneStats = data[6];
    //  console.log(characterOneStats);
      

    // fetch (`https://pokeapi.co/api/v2/pokemon/36/`)
    
    // .then((res) => res.json())
    // .then((data) => console.log(data))
    // .catch((err) => console.log(err));

    








    

    // fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=Belgium&limit=5").then(function(resp) {
    //     console.log(resp);
    //     return resp.json()
    // }).then(function(data) {
    //     console.log(data);
    
    
    
    // }
    // )





     // no-cors, *cors, same-origin

// fightbtnEl.addEventListener("click", function() {
//         fetch(`https://superheroapi.com/api/10166921538705314/${character1}/powerstats`)
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((err) => console.log(err));
      
    
