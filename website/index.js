
const main = document.querySelector("main");

const CityOfChoice = document.querySelector("h2");






main.className = main;

let WhatCity = prompt("Vilken stad?")

function findCity(city) {

    for (let i = 0; i < cities.length; i++) {
        if (city.toLowerCase() === cities[i].name.toLowerCase()) {
            CityOfChoice.textContent = `${cities[i].name} (${cities[i].country})`
            document.title = `${WhatCity}`

            return;
        } 
    }
        CityOfChoice.textContent = `${WhatCity} finns inte i databasen`
        document.title = "Not Found";
}
    findCity(WhatCity)



for (let i = 0; i < cities.length; i++) {
    document.getElementById("cities").innerHTML += `<div class="cityBox">${cities[i].name}</div>`
}





