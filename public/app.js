const app = function () {
    // const url = "https://swapi.co/api/planets/?format=json"
    // makeRequest(url, requestComplete);
    console.log("loaded");
    
};

// const makeRequest= function(url, callback) {
//     const request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.addEventListener("load", callback);
//     request.send();
// }

// const requestComplete = function() {
//     if(this.status !== 200) return;
//     const jsonString = this.responseText;
//     const planets = JSON.parse(jsonString);
//     populateList(planets);
// }

// const populateList = function(planet) {
//     const planet_div = document.getElementById('planet_div');
//     const ul = document.getElementById('plant_names');

//     planets.forEach(function(planet){
//         const li = document.createElement("li");

//         li.innerText = planet.name;
//         ul.appendChild(li);
//     })
// }

document.addEventListener('DOMContentLoaded', app);