let count = 0;

let rows = document.getElementsByClassName('planet_entry');
let titles = null;

const app = function () {
    let url = "https://swapi.co/api/planets/?format=json&page=";
    makeRequest(url, requestComplete);  
};

const clearTable = function() {
    const the_table = document.getElementById('planets_table');
    the_table.getElementsByTagName("tbody")[0].innerHTML = "";
}

const makeRequest = function(url, callback) {
    console.log(count);
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const makeFilmRequest = function (url, callback) {
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

const filmsRequestComplete = function () {
    const film_titles_array = [];
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const film_data = JSON.parse(jsonString)
    const film_titles = film_data.title;
    film_titles_array.push(film_titles)
    // populateFilms(film_titles_array);
    // console.log(count);
}

const populateList = function(planets) {
   
    const table = document.getElementById('table_body');
    const br = document.createElement("br");

    planets.results.forEach(function(planet) {
        const row = table.insertRow(0);
        count++;
        let film_id = 'film_cell' + count.toString();
        
        // console.log(film_id);

        const name = row.insertCell(0);
        const population = row.insertCell(1);
        const diameter = row.insertCell(2);
        const rot_period = row.insertCell(3);
        const orb_period = row.insertCell(4);  
        const terrain = row.insertCell(5);  
        const films = row.insertCell(6);
        films.setAttribute('id', film_id)
       
        name.innerText = planet.name;
        population.innerText = planet.population;
        diameter.innerText = planet.diameter;
        rot_period.innerText = planet.rotation_period;
        orb_period.innerText = planet.orbital_period;
        
        let terrain_array = planet.terrain.replace(/,/g, "<br>");
        terrain.innerHTML = terrain_array;


        for (film_url of planet.films) {
            makeFilmRequest(film_url, filmsRequestComplete);    
        }

        // let populateFilms = function(film_titles) {
        //     films.innerHTML = film_titles;
        // }

        
        // console.log(count);
    });
};

const populateFilms = function(film_titles_array) {
    let currentId = 'film_cell' + count.toString();
    let filmCell = document.getElementById(currentId);  
    filmCell.innerText = film_titles_array;
}

document.addEventListener('DOMContentLoaded', app);