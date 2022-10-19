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

function objectList (){
    var nameList = ["Abomasnow", "Abra", "Absol", "Accelgor", "Aegislash", "Aerodactyl", "Aggron", "Aipom", "Alakazam", "Alcremie", "Alomomola", "Altaria", "Amaura", "Ambipom", "Amoonguss", "Ampharos", "Anorith", "Appletun", "Applin", "Araquanid", "Arbok", "Arcanine", "Arceus", "Archen", "Archeops", "Arctovish", "Arctozolt", "Ariados", "Armaldo", "Aromatisse", "Aron", "Arrokuda", "Articuno", "Audino", "Aurorus", "Avalugg", "Axew", "Azelf", "Azumarill", "Azurill", "Bagon", "Baltoy", "Banette", "Barbaracle", "Barboach", "Barraskewda", "Basculin", "Bastiodon", "Bayleef", "Beartic", "Beautifly", "Beedrill", "Beheeyem", "Beldum", "Bellossom", "Bellsprout", "Bergmite", "Bewear", "Bibarel", "Bidoof", "Binacle", "Bisharp", "Blacephalon", "Blastoise", "Blaziken", "Blipbug", "Blissey", "Blitzle", "Boldore", "Boltund", "Bonsly", "Bouffalant", "Bounsweet", "Braixen", "Braviary", "Breloom", "Brionne", "Bronzong", "Bronzor", "Bruxish", "Budew", "Buizel", "Bulbasaur", "Buneary", "Bunnelby", "Burmy", "Butterfree", "Buzzwole", "Cacnea", "Cacturne", "Calyrex", "Camerupt", "Carbink", "Carkol", "Carnivine", "Carracosta", "Carvanha", "Cascoon", "Castform", "Caterpie", "Celebi", "Celesteela", "Centiskorch", "Chandelure", "Chansey", "Charizard", "Charjabug", "Charmander", "Charmeleon", "Chatot", "Cherrim", "Cherubi", "Chesnaught", "Chespin", "Chewtle", "Chikorita", "Chimchar", "Chimecho", "Chinchou", "Chingling", "Cinccino", "Cinderace", "Clamperl", "Clauncher", "Clawitzer", "Claydol", "Clefable", "Clefairy", "Cleffa", "Clobbopus", "Cloyster", "Coalossal", "Cobalion", "Cofagrigus", "Combee", "Combusken", "Comfey", "Conkeldurr", "Copperajah", "Corphish", "Corsola", "Corviknight", "Corvisquire", "Cosmoem", "Cosmog", "Cottonee", "Crabominable", "Crabrawler", "Cradily", "Cramorant", "Cranidos", "Crawdaunt", "Cresselia", "Croagunk", "Crobat", "Croconaw", "Crustle", "Cryogonal", "Cubchoo", "Cubone", "Cufant", "Cursola", "Cutiefly", "Cyndaquil", "Darkrai", "Darmanitan", "Dartrix", "Darumaka", "Decidueye", "Dedenne", "Deerling", "Deino", "Delcatty", "Delibird", "Delphox", "Deoxys", "Dewgong", "Dewott", "Dewpider", "Dhelmise", "Dialga", "Diancie", "Diggersby", "Diglett", "Ditto", "Dodrio", "Doduo", "Donphan", "Dottler", "Doublade", "Dracovish", "Dracozolt", "Dragalge", "Dragapult", "Dragonair", "Dragonite", "Drakloak", "Drampa", "Drapion", "Dratini", "Drednaw", "Dreepy", "Drifblim", "Drifloon", "Drilbur", "Drizzile", "Drowzee", "Druddigon", "Dubwool", "Ducklett", "Dugtrio", "Dunsparce", "Duosion", "Duraludon", "Durant", "Dusclops", "Dusknoir", "Duskull", "Dustox", "Dwebble", "Eelektrik", "Eelektross", "Eevee", "Eiscue", "Ekans", "Eldegoss", "Electabuzz", "Electivire", "Electrike", "Electrode", "Elekid", "Elgyem", "Emboar", "Emolga", "Empoleon", "Entei", "Escavalier", "Espeon", "Espurr", "Eternatus", "Excadrill", "Exeggcute", "Exeggutor", "Exploud", "Falinks", "Farfetchd", "Fearow", "Feebas", "Fennekin", "Feraligatr", "Ferroseed", "Ferrothorn", "Finneon", "Flaaffy", "Flabébé", "Flapple", "Flareon", "Fletchinder", "Fletchling", "Floatzel", "Floette", "Florges", "Flygon", "Fomantis", "Foongus", "Forretress", "Fraxure", "Frillish", "Froakie", "Frogadier", "Froslass", "Frosmoth", "Furfrou", "Furret", "Gabite", "Gallade", "Galvantula", "Garbodor", "Garchomp", "Gardevoir", "Gastly", "Gastrodon", "Genesect", "Gengar", "Geodude", "Gible", "Gigalith", "Girafarig", "Giratina", "Glaceon", "Glalie", "Glameow", "Glastrier", "Gligar", "Gliscor", "Gloom", "Gogoat", "Golbat", "Goldeen", "Golduck", "Golem", "Golett", "Golisopod", "Golurk", "Goodra", "Goomy", "Gorebyss", "Gossifleur", "Gothita", "Gothitelle", "Gothorita", "Gourgeist", "Granbull", "Grapploct", "Graveler", "Greedent", "Greninja", "Grimer", "Grimmsnarl", "Grookey", "Grotle", "Groudon", "Grovyle", "Growlithe", "Grubbin", "Grumpig", "Gulpin", "Gumshoos", "Gurdurr", "Guzzlord", "Gyarados", "Hakamo-o", "Happiny", "Hariyama", "Hatenna", "Hatterene", "Hattrem", "Haunter", "Hawlucha", "Haxorus", "Heatmor", "Heatran", "Heliolisk", "Helioptile", "Heracross", "Herdier", "Hippopotas", "Hippowdon", "Hitmonchan", "Hitmonlee", "Hitmontop", "Ho-Oh", "Honchkrow", "Honedge", "Hoopa", "Hoothoot", "Hoppip", "Horsea", "Houndoom", "Houndour", "Huntail", "Hydreigon", "Hypno", "Igglybuff", "Illumise", "Impidimp", "Incineroar", "Indeedee", "Infernape", "Inkay", "Inteleon", "Ivysaur", "Jangmo-o", "Jellicent", "Jigglypuff", "Jirachi", "Jolteon", "Joltik", "Jumpluff", "Jynx", "Kabuto", "Kabutops", "Kadabra", "Kakuna", "Kangaskhan", "Karrablast", "Kartana", "Kecleon", "Keldeo", "Kingdra", "Kingler", "Kirlia", "Klang", "Klefki", "Klink", "Klinklang", "Koffing", "Komala", "Kommo-o", "Krabby", "Kricketot", "Kricketune", "Krokorok", "Krookodile", "Kubfu", "Kyogre", "Kyurem", "Lairon", "Lampent", "Landorus", "Lanturn", "Lapras", "Larvesta", "Larvitar", "Latias", "Latios", "Leafeon", "Leavanny", "Ledian", "Ledyba", "Lickilicky", "Lickitung", "Liepard", "Lileep", "Lilligant", "Lillipup", "Linoone", "Litleo", "Litten", "Litwick", "Lombre", "Lopunny", "Lotad", "Loudred", "Lucario", "Ludicolo", "Lugia", "Lumineon", "Lunala", "Lunatone", "Lurantis", "Luvdisc", "Luxio", "Luxray", "Lycanroc", "Machamp", "Machoke", "Machop", "Magby", "Magcargo", "Magearna", "Magikarp", "Magmar", "Magmortar", "Magnemite", "Magneton", "Magnezone", "Makuhita", "Malamar", "Mamoswine", "Manaphy", "Mandibuzz", "Manectric", "Mankey", "Mantine", "Mantyke", "Maractus", "Mareanie", "Mareep", "Marill", "Marowak", "Marshadow", "Marshtomp", "Masquerain", "Mawile", "Medicham", "Meditite", "Meganium", "Melmetal", "Meloetta", "Meltan", "Meowstic", "Meowth", "Mesprit", "Metagross", "Metang", "Metapod", "Mew", "Mewtwo", "Mienfoo", "Mienshao", "Mightyena", "Milcery", "Milotic", "Miltank", "Mime Jr.", "Mimikyu", "Minccino", "Minior", "Minun", "Misdreavus", "Mismagius", "Moltres", "Monferno", "Morelull", "Morgrem", "Morpeko", "Mothim", "Mr. Mime", "Mr. Rime", "Mudbray", "Mudkip", "Mudsdale", "Muk", "Munchlax", "Munna", "Murkrow", "Musharna", "Naganadel", "Natu", "Necrozma", "Nickit", "Nidoking", "Nidoqueen", "Nidoran♀", "Nidoran♂", "Nidorina", "Nidorino", "Nihilego", "Nincada", "Ninetales", "Ninjask", "Noctowl", "Noibat", "Noivern", "Nosepass", "Numel", "Nuzleaf", "Obstagoon", "Octillery", "Oddish", "Omanyte", "Omastar", "Onix", "Oranguru", "Orbeetle", "Oricorio", "Oshawott", "Pachirisu", "Palkia", "Palossand", "Palpitoad", "Pancham", "Pangoro", "Panpour", "Pansage", "Pansear", "Paras", "Parasect", "Passimian", "Patrat", "Pawniard", "Pelipper", "Perrserker", "Persian", "Petilil", "Phanpy", "Phantump", "Pheromosa", "Phione", "Pichu", "Pidgeot", "Pidgeotto", "Pidgey", "Pidove", "Pignite", "Pikachu", "Pikipek", "Piloswine", "Pincurchin", "Pineco", "Pinsir", "Piplup", "Plusle", "Poipole", "Politoed", "Poliwag", "Poliwhirl", "Poliwrath", "Polteageist", "Ponyta", "Poochyena", "Popplio", "Porygon", "Porygon-Z", "Porygon2", "Primarina", "Primeape", "Prinplup", "Probopass", "Psyduck", "Pumpkaboo", "Pupitar", "Purrloin", "Purugly", "Pyroar", "Pyukumuku", "Quagsire", "Quilava", "Quilladin", "Qwilfish", "Raboot", "Raichu", "Raikou", "Ralts", "Rampardos", "Rapidash", "Raticate", "Rattata", "Rayquaza", "Regice", "Regidrago", "Regieleki", "Regigigas", "Regirock", "Registeel", "Relicanth", "Remoraid", "Reshiram", "Reuniclus", "Rhydon", "Rhyhorn", "Rhyperior", "Ribombee", "Rillaboom", "Riolu", "Rockruff", "Roggenrola", "Rolycoly", "Rookidee", "Roselia", "Roserade", "Rotom", "Rowlet", "Rufflet", "Runerigus", "Sableye", "Salamence", "Salandit", "Salazzle", "Samurott", "Sandaconda", "Sandile", "Sandshrew", "Sandslash", "Sandygast", "Sawk", "Sawsbuck", "Scatterbug", "Sceptile", "Scizor", "Scolipede", "Scorbunny", "Scrafty", "Scraggy", "Scyther", "Seadra", "Seaking", "Sealeo", "Seedot", "Seel", "Seismitoad", "Sentret", "Serperior", "Servine", "Seviper", "Sewaddle", "Sharpedo", "Shaymin", "Shedinja", "Shelgon", "Shellder", "Shellos", "Shelmet", "Shieldon", "Shiftry", "Shiinotic", "Shinx", "Shroomish", "Shuckle", "Shuppet", "Sigilyph", "Silcoon", "Silicobra", "Silvally", "Simipour", "Simisage", "Simisear", "Sinistea", "Sirfetchd", "Sizzlipede", "Skarmory", "Skiddo", "Skiploom", "Skitty", "Skorupi", "Skrelp", "Skuntank", "Skwovet", "Slaking", "Slakoth", "Sliggoo", "Slowbro", "Slowking", "Slowpoke", "Slugma", "Slurpuff", "Smeargle", "Smoochum", "Sneasel", "Snivy", "Snom", "Snorlax", "Snorunt", "Snover", "Snubbull", "Sobble", "Solgaleo", "Solosis", "Solrock", "Spearow", "Spectrier", "Spewpa", "Spheal", "Spinarak", "Spinda", "Spiritomb", "Spoink", "Spritzee", "Squirtle", "Stakataka", "Stantler", "Staraptor", "Staravia", "Starly", "Starmie", "Staryu", "Steelix", "Steenee", "Stonjourner", "Stoutland", "Stufful", "Stunfisk", "Stunky", "Sudowoodo", "Suicune", "Sunflora", "Sunkern", "Surskit", "Swablu", "Swadloon", "Swalot", "Swampert", "Swanna", "Swellow", "Swinub", "Swirlix", "Swoobat", "Sylveon", "Taillow", "Talonflame", "Tangela", "Tangrowth", "Tapu Bulu", "Tapu Fini", "Tapu Koko", "Tapu Lele", "Tauros", "Teddiursa", "Tentacool", "Tentacruel", "Tepig", "Terrakion", "Thievul", "Throh", "Thundurus", "Thwackey", "Timburr", "Tirtouga", "Togedemaru", "Togekiss", "Togepi", "Togetic", "Torchic", "Torkoal", "Tornadus", "Torracat", "Torterra", "Totodile", "Toucannon", "Toxapex", "Toxel", "Toxicroak", "Toxtricity", "Tranquill", "Trapinch", "Treecko", "Trevenant", "Tropius", "Trubbish", "Trumbeak", "Tsareena", "Turtonator", "Turtwig", "Tympole", "Tynamo", "Type: Null", "Typhlosion", "Tyranitar", "Tyrantrum", "Tyrogue", "Tyrunt", "Umbreon", "Unfezant", "Unown", "Ursaring", "Urshifu", "Uxie", "Vanillish", "Vanillite", "Vanilluxe", "Vaporeon", "Venipede", "Venomoth", "Venonat", "Venusaur", "Vespiquen", "Vibrava", "Victini", "Victreebel", "Vigoroth", "Vikavolt", "Vileplume", "Virizion", "Vivillon", "Volbeat", "Volcanion", "Volcarona", "Voltorb", "Vullaby", "Vulpix", "Wailmer", "Wailord", "Walrein", "Wartortle", "Watchog", "Weavile", "Weedle", "Weepinbell", "Weezing", "Whimsicott", "Whirlipede", "Whiscash", "Whismur", "Wigglytuff", "Wimpod", "Wingull", "Wishiwashi", "Wobbuffet", "Woobat", "Wooloo", "Wooper", "Wormadam", "Wurmple", "Wynaut", "Xatu", "Xerneas", "Xurkitree", "Yamask", "Yamper", "Yanma", "Yanmega", "Yungoos", "Yveltal", "Zacian", "Zamazenta", "Zangoose", "Zapdos", "Zarude", "Zebstrika", "Zekrom", "Zeraora", "Zigzagoon", "Zoroark", "Zorua", "Zubat", "Zweilous", "Zygarde"]
    for(let i = 0; i < nameList.length; i++){
        document.getElementById("pokemonDataList").insertAdjacentHTML("beforeend", "<option value='" + nameList[i] + "'>")
}}

objectList()


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


