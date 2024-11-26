
const main = document.querySelector("main");

const CityOfChoice = document.querySelector("h2");



// Ställer frågan vilken stad
let WhatCity = prompt("Vilken stad?")

function findCity(city) {

    const AddTarget = document.getElementsByClassName("cityBox")

    for (let i = 0; i < cities.length; i++) {
        if (city.toLowerCase() === cities[i].name.toLowerCase()) {
            CityOfChoice.textContent = `${cities[i].name} (${cities[i].country})`
            document.title = `${WhatCity}`
            
            AddTarget[i].classList.add("target")

            return;
        } 
    }
        CityOfChoice.textContent = `${WhatCity} finns inte i databasen`
        document.title = "Not Found";
}

for (let i = 0; i < cities.length; i++) {
    document.getElementById("cities").innerHTML += `<div class="cityBox">${cities[i].name}</div>`
    
}
findCity(WhatCity)