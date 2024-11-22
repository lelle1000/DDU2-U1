// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");

const h2 = document.querySelector("h2");





// Recommended: Ask for the city name and then the rest of the code
main.className = main;

let WhatCity = prompt("Vilken stad?")

function findCity(city) {

    for (let i = 0; i < cities.length; i++) {
        if (city === cities[i].name) {
            h2.textContent = `${cities[i].name} (${cities[i].country})`
            document.title = `${WhatCity}`

            return;
        } 
    }
        h2.textContent = `${WhatCity} finns inte i databasen`
        document.title = "Not Found";
}
   
    findCity(WhatCity)


// Recommended: Ask for the city name and then the rest of the code

