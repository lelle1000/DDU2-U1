// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements
const main = document.querySelector("main");
main.className = main;



const h2 = document.querySelector("h2");

let WhatCity = prompt("Vilken stad?")
if (WhatCity == cities.name) {
    h2.textContent = `${cities.name} (${cities.country})`
    document.title = `${WhatCity}`
} else 
    h2.textContent = `${WhatCity} finns inte i databasen`
    document.title = "Not Found";



// Recommended: Ask for the city name and then the rest of the code

