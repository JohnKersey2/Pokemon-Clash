let fightButtonEl = document.getElementById("fightButton") // for Fight button
let pokemonOneConfirm = document.getElementById("pokemonOneConfirm") // for Confirm Buttons
let pokemonTwoConfirm = document.getElementById("pokemonTwoConfirm") // Rival in index.html refers to vars involving pokemon2
let pokemonOne = document.getElementById("pokemonOne") // saves the pokemon chosen by user 
let pokemonTwo = document.getElementById("pokemonTwo")  
localStorage.setItem("pokemonOneStats", null) // these prevent an error on reload with the fight button
localStorage.setItem("pokemonTwoStats", null)

// On confirm click, these two event listener functions save pokemon names and summed stats to local storage, displays sprite
pokemonOneConfirm.addEventListener("click", function (event) {  
      event.preventDefault()         
      localStorage.setItem("pokemonOneName", pokemonOne.value.toLowerCase()) 
      fetch (`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem("pokemonOneName")}/`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("pokemonOneStats", data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
        document.getElementById("pokeimg1").setAttribute("src", data.sprites.front_default)
      })})

pokemonTwoConfirm.addEventListener("click", function (event) {
        event.preventDefault()      
        localStorage.setItem("pokemonTwoName", pokemonTwo.value.toLowerCase())
        fetch (`https://pokeapi.co/api/v2/pokemon/${localStorage.getItem("pokemonTwoName")}/`)
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem("pokemonTwoStats", data.stats[0].base_stat + data.stats[1].base_stat + data.stats[2].base_stat + data.stats[3].base_stat + data.stats[4].base_stat + data.stats[5].base_stat)
            document.getElementById("pokeimg2").setAttribute("src", data.sprites.front_default)
            document.getElementById("pokeimg2").setAttribute("alt", "A sprite of " + data.name)
        })})

// takes data variables from PokeAPI, calculates the winner, changes text under fight box, creates new cards at bottom of page
fightButtonEl.addEventListener("click", function() {

    getCards() // runs function to create cards at the bottom of the page

    // creates variables from saved names and stats in local storage
    let pokemonOneStats = localStorage.getItem("pokemonOneStats")
    let pokemonTwoStats = localStorage.getItem("pokemonTwoStats")
    let pokemonName1 = localStorage.getItem("pokemonOneName") 
    let pokemonName2 = localStorage.getItem("pokemonTwoName")

    if (pokemonOneStats == "null" || !pokemonTwoStats == "null") {  // Prompts user if incorrect or no input given
        document.getElementById("result").innerHTML = "The best trainers check that they spelled both Pokemons' names correctly. Don't forget to confirm both Pokemon choices!"
    }
    else if(pokemonOneStats > pokemonTwoStats){       
        document.getElementById("result").innerHTML = pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + " has defeated " + pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + "!"
        //document.getElementById("emoji1").textContent = happy.emoji
        //document.getElementById("emoji2").textContent = angry.emoji       
    }
    else if (pokemonTwoStats > pokemonOneStats){        
        document.getElementById("result").innerHTML = pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + " has defeated " + pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + "!"
        //document.getElementById("emoji1").textContent = angry.emoji
        //document.getElementById("emoji2").textContent = happy.emoji
    }
    else {      
        document.getElementById("result").innerHTML = "Test results are inconclusive. " + pokemonName1.toUpperCase().slice(0,1) + pokemonName1.slice(1) + " and " + pokemonName2.toUpperCase().slice(0,1) + pokemonName2.slice(1) + " are so close in strength, it'll most likely end in a draw. That means you're both winners! Or losers..."
        //document.getElementById("emoji1").textContent = happy.emoji
        //document.getElementById("emoji2").textContent = happy.emoji   
    }})

// This adds randomized images of trading cards from TCGDex API to give user suggestions of Pokemon to try out
async function getCards(){
    const removeCards = document.getElementsByClassName('removeCards') // Removes old cards before adding new ones
    while (removeCards.length > 0) removeCards[0].remove()

    // pulls a portion of cards into an array, randomizes the order, then picks the first 26 to display at the bottom of the page. 
    var response = await fetch("https://api.tcgdex.net/v2/en/hp/80") 
    var cards = await response.json()
    console.log(cards)
    cards.cards.sort(() => Math.random() - Math.random()).slice(0, 25)
    for(let i = 0; i < 25; i++){
        var url = cards.cards[i].image
        var alt = cards.cards[i].name
        console.log(alt)
        if(url !== undefined){
            document.getElementById("cardimage").insertAdjacentHTML("afterbegin", `<img class="removeCards" src="${url}/low.webp" alt="A trading card of the Pokemon ${alt}"/>`)
        }}}



// Unused code left her incase functionality is needed later. 

// var happy = null
// var angry = null

//async function fetchEmoji(emotion){
//    let response = await fetch(`https://api.emojisworld.fr/v1/search?q=${emotion}`)
//    var emoji = await response.json()
//    return emoji
// }

// async function setEmoji(){
//    var emoji = await fetchEmoji("happy")
//    happy = emoji.results[0];
//    emoji = await fetchEmoji("angry")
//    angry = emoji.results[0];  
//}
// setEmoji()


