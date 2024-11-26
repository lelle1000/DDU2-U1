
const main = document.querySelector("main");
const CityOfChoice = document.querySelector("h2");
const AddTarget = document.getElementsByClassName("cityBox");
const AddTargetClosest = document.getElementById("closest");
const AddTargetFurthest = document.getElementById("furthest");



let WhatCity = prompt("Vilken stad?")
function findCity(city) {


    for (let i = 0; i < cities.length; i++) {
        if (city === cities[i].name) {
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

    if (ClosestCity !== null) {
        const ClosestCityName = getCityNameByID(ClosestCity);
        AddTargetClosest.textContent = ClosestCityName;

        const cityBoxes = document.querySelectorAll('.cityBox');
        for (let i = 0; i < cityBoxes.length; i++) {
            if (cityBoxes[i].textContent === ClosestCityName) {
              cityBoxes[i].classList.add('closest');
            break; 
            }
        }
    }
}
getClosestCity(WhatCity)





function getFurthestCity(TargetCityObject) {
    TargetCityObject = getCityId(TargetCityObject);
    let FurthestDistance = -Infinity;
    let FurthestCity = null;

 

    for (let i = 0; i < distances.length; i++) {
        if (distances[i].city1 === TargetCityObject) {
            if (distances[i].distance > FurthestDistance) {
                FurthestDistance = distances[i].distance;
                FurthestCity = distances[i].city2; 
            }
        } else if (distances[i].city2 === TargetCityObject) {
            if (distances[i].distance > FurthestDistance) {
                FurthestDistance = distances[i].distance;
                FurthestCity = distances[i].city1;
            }
        }
    }

    if (FurthestCity) {
        const FurthestCityName = getCityNameByID(FurthestCity);
        AddTargetFurthest.textContent = FurthestCityName;

        const cityBoxes = document.querySelectorAll('.cityBox');
        for (let i = 0; i < cityBoxes.length; i++) {
            if (cityBoxes[i].textContent === FurthestCityName) {
              cityBoxes[i].classList.add('furthest');
            break; 
            }
        }
    }
}
getFurthestCity(WhatCity)


