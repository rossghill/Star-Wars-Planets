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
    // const ul = document.getElementById('planet_names');
    const table = document.getElementById('table_body');
    // planets.results.forEach(function(planet){
    //     const li = document.createElement("li");
    //     console.log(planet.name);

    //     li.innerText = planet.name + " " + planet.population + " " + planet.diameter;
    //     ul.appendChild(li);
    planets.results.forEach(function(planet) {
        let count = 0;
        const planet_data = document.createElement('tr');
        const row = table.insertRow(0)

        const name = row.insertCell(0);
        const population = row.insertCell(1);
        const diameter = row.insertCell(2);
        const rot_period = row.insertCell(3);
        const orb_period = row.insertCell(4);
        const terrain = row.insertCell(5);
        const films = row.insertCell(6);

        name.innerText = planet.name;
        population.innerText = planet.population;
        diameter.innerText = planet.diameter;
        rot_period.innerText = planet.rotation_period;
        orb_period.innerText = planet.orbital_period;
        terrain.innerText = planet.terrain;
        films.innerText = planet.films[0];

        count++;

    });
}

document.addEventListener('DOMContentLoaded', app);