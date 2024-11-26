
const main = document.querySelector("main");

const CityOfChoice = document.querySelector("h2");


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

function getCityId(cityName) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].name === cityName) {
            return cities[i].id;
        }
    }
}

function getCityNameByID(cityId) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i].id === cityId) {
            return cities[i].name;
        }
    }
}

function getClosestCity(TargetCityObject) {
    TargetCityObject = getCityId(TargetCityObject);
    let shortestDistance = Infinity;
    let ClosestCity = null;

    for (let i = 0; i < distances.length; i++) {
        if (distances[i].city1 === TargetCityObject) {
            if (distances[i].distance < shortestDistance) {
                shortestDistance = distances[i].distance;
                ClosestCity = distances[i].city2; 
            }
        } else if (distances[i].city2 === TargetCityObject) {
            if (distances[i].distance < shortestDistance) {
                shortestDistance = distances[i].distance;
                ClosestCity = distances[i].city1;
            }
        }
    }

    if (ClosestCity) {
        const ClosestCityName = getCityNameByID(ClosestCity);
        document.getElementById("closest").textContent = ClosestCityName;
    }
}
getClosestCity(WhatCity)
