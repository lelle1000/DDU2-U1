
const main = document.querySelector("main");
const CityOfChoice = document.querySelector("h2");
const h3 = document.querySelector("h3");
const AddTarget = document.getElementsByClassName("cityBox");
const AddTargetClosest = document.getElementById("closest");
const AddTargetFurthest = document.getElementById("furthest");
const TableContainer = document.getElementById("table")


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
        h3.style.display = "none"
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
                const distanceDividedBy10 = shortestDistance / 10;
                cityBoxes[i].classList.add('closest');
                cityBoxes[i].textContent += ` ligger ${distanceDividedBy10} mil bort`;
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
                const distanceDividedBy10 = FurthestDistance / 10;
                cityBoxes[i].classList.add('furthest');
                cityBoxes[i].textContent += ` ligger ${distanceDividedBy10} mil bort`;
                break;
            }
        }
    }
}
getFurthestCity(WhatCity)


TableContainer.innerHTML = `<div class="cell head_row"></div>`; 

for (let i = 0; i < cities.length; i++) {
    TableContainer.innerHTML += `<div class="cell head_row">${cities[i].id}</div>`; 
}
    


for (let rad = 0; rad < cities.length; rad++) {
    TableContainer.innerHTML += `<div class="cell head_column">${cities[rad].id}-${cities[rad].name}</div>`; 
    
    for (let col = 0; col < cities.length; col++) {  
        let content = ""; 
    
        if (rad !== col) { 
            const KorrektPar = distances.find(dist => (dist.city1 === cities[rad].id && dist.city2 === cities[col].id) || (dist.city2 === cities[rad].id && dist.city1 === cities[col].id)) 
    
            if(KorrektPar) { 
                content = KorrektPar.distance / 10
            } 
        }
            
        let cellClass = "cell";
        if (col % 2 === 0) {
            cellClass += " even_col";
        }
        TableContainer.innerHTML += `<div class="${cellClass}">${content}</div>`;
    }
}
    

