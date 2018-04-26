let url = "https://swapi.co/api/planets/?format=json&page=";
const search_url = "https://swapi.co/api/planets/?search=";

let row_count = 0;

const app = function () {    
    makeRequest(url, requestComplete);
};

const clearTable = function () {
    row_count = 0;
    const table_content = document.getElementById('planets_table');
    table_content.getElementsByTagName("tbody")[0].innerHTML = "";
}

const makeRequest = function (url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const requestComplete = function () {
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const planets = JSON.parse(jsonString);
    populateList(planets);
}

const populateList = function (planets) {

    const table = document.getElementById('table_body');
    const br = document.createElement("br");

    planets.results.forEach(function (planet) {
        const row = table.insertRow(0);
        row_count++;
        console.log(row_count);

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

        const terrain_array = planet.terrain.replace(/,/g, "<br>");
        terrain.innerHTML = terrain_array;

        const films_string = planet.films.toString();
        const films_array = films_string.split(",");

        const filmsRequestComplete = function () {
            if (this.status !== 200) return;
            const jsonString = this.responseText;
            const film_data = JSON.parse(jsonString);
            const film_title = film_data.title;
            films.innerHTML += film_title + "<br>";
        }

        for (film_url of films_array) {
            makeRequest(film_url, filmsRequestComplete);
        }     
    });
    
};

const tr_count = document.querySelectorAll("tr");

document.addEventListener('DOMContentLoaded', app);