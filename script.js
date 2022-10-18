let fightButtonEl = document.getElementById("fightButton") // for Fight button
let pokemonOneConfirm = document.getElementById("pokemonOneConfirm") // for Confirm Buttons
let pokemonTwoConfirm = document.getElementById("pokemonTwoConfirm") // challenger in index.html refers to vars involving pokemon2
let pokemonOne = document.getElementById("pokemonOne") // saves the pokemon chosen by user 
let pokemonTwo = document.getElementById("pokemonTwo")  
var happy = null
var angry = null

// On confirm click, these two functions save pokemon names and summed stats to local storage
pokemonOneConfirm.addEventListener("click", function (event) {  
      event.preventDefault()         
      localStorage.setItem("pokemonOneName", pokemonOne.value.toLowerCase()) 
      fetch (`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem("pokemonOneName")}/`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("pokemonOneStats", data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
        document.getElementById("pokeimg1").setAttribute("src", data.sprites.front_default);
      });

     // MVP would just be leaving these columns with only confirm button and no change on either tile
      // Potentially pull out each data stat to change column 1/3 displays, if going beyond MVP

      

    });



pokemonTwoConfirm.addEventListener("click", function (event) {
        event.preventDefault()      
        localStorage.setItem("pokemonTwoName", pokemonTwo.value.toLowerCase())
        fetch (`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem("pokemonTwoName")}/`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("pokemonTwoStats", data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
            document.getElementById("pokeimg2").setAttribute("src", data.sprites.front_default);
        }
        
        )})

// takes data variables, calculates the winner, changes text under fight box
fightButtonEl.addEventListener("click", function() {

    getCards()

    // creates variables from saved names and stats in local storage
    let pokemonOneStats = localStorage.getItem("pokemonOneStats")
    console.log(pokemonOneStats)
    let pokemonTwoStats = localStorage.getItem("pokemonTwoStats")
    console.log(pokemonTwoStats)  
    let pokemonName1 = localStorage.getItem("pokemonOneName") 
    let pokemonName2 = localStorage.getItem("pokemonTwoName")

    if (!pokemonOneStats || !pokemonTwoStats) {
        console.log("Invalid")
        document.getElementById("result").innerHTML = "The best trainers check that they spelled both Pokemons' names correctly. Don't forget to confirm both Pokemon choices!"
    }
    else if(pokemonOneStats > pokemonTwoStats){
        console.log(pokemonName1 + " Wins")        
        console.log(pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + " has defeated " + pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + "!") // How to capitalize the pokemon's name
        document.getElementById("result").innerHTML = pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + " has defeated " + pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + "!"
        document.getElementById("emoji1").textContent = happy.emoji
        document.getElementById("emoji2").textContent = angry.emoji       
    }
    else if (pokemonTwoStats > pokemonOneStats){
        console.log(pokemonName2 + " Wins")         
        document.getElementById("result").innerHTML = pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + " has defeated " + pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + "!"
        document.getElementById("emoji1").textContent = angry.emoji
        document.getElementById("emoji2").textContent = happy.emoji
    }
    else {
        console.log("Draw!") // Pikachu and Oddish are equal in strength to test        
        document.getElementById("result").innerHTML = "Test results are inconclusive. " + pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + " and " + pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + " are so close in strength, it'll most likely end in a draw. That means you're both winners! Or losers..."
        document.getElementById("emoji1").textContent = happy.emoji
        document.getElementById("emoji2").textContent = happy.emoji
        
    }})


async function fetchEmoji(emotion){
    let response = await fetch(`https://api.emojisworld.fr/v1/search?q=${emotion}`)
    var emoji = await response.json()
    return emoji
    


}



async function setEmoji(){
    

    var emoji = await fetchEmoji("happy")
    happy = emoji.results[0];
    emoji = await fetchEmoji("angry")
    angry = emoji.results[0];
    
}
setEmoji()

async function getCards(){
    var response = await fetch("https://api.tcgdex.net/v2/en/hp/80")
    var cards = await response.json();
    for(let i = 0; i < 25; i++){
        var url = cards.cards[i].image
        if(url !== undefined){

            document.getElementById("cardimage").insertAdjacentHTML("beforeend", `<img src="${url}/low.webp"/>`)
        }
        console.log(url);


    }      
}