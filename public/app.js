const app = function () {
    const url = "https://swapi.co/api/planets/?format=json"
    makeRequest(url, requestComplete);
    console.log("loaded");   
};

const makeRequest= function(url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const requestComplete = function() {
    if(this.status !== 200) return;
    const jsonString = this.responseText;
    const planets = JSON.parse(jsonString);
    populateList(planets);
}

const populateList = function(planets) {
    const ul = document.getElementById('planet_names');

    planets.results.forEach(function(planet){
        const li = document.createElement("li");
        console.log(planet.name);

        li.innerText = planet.name + " " + planet.population + " " + planet.diameter;
        ul.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', app);