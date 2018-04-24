let count = 0;

const app = function () {
    let url = "https://swapi.co/api/planets/?format=json&page=";
    makeRequest(url, requestComplete);
};

const clearTable = function () {
    const the_table = document.getElementById('planets_table');
    the_table.getElementsByTagName("tbody")[0].innerHTML = "";
}

const makeRequest = function (url, callback) {
    // console.log(count);
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

const makeFilmRequest = function (url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.addEventListener("load", callback);
    request.send();
}

const filmsRequestComplete = function () {
    const film_titles_array = [];
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const film_data = JSON.parse(jsonString);
    // populateFilms(film_data);
    // console.log(film_data);
}

const populateList = function (planets) {

    const table = document.getElementById('table_body');
    const br = document.createElement("br");

    planets.results.forEach(function (planet) {
        const row = table.insertRow(0);
        count++;
        let film_id = 'film_cell' + count.toString();

        const name = row.insertCell(0);
        const population = row.insertCell(1);
        const diameter = row.insertCell(2);
        const rot_period = row.insertCell(3);
        const orb_period = row.insertCell(4);
        const terrain = row.insertCell(5);
        const films = row.insertCell(6);
        films.setAttribute('id', film_id);

        name.innerText = planet.name;
        population.innerText = planet.population;
        diameter.innerText = planet.diameter;
        rot_period.innerText = planet.rotation_period;
        orb_period.innerText = planet.orbital_period;

        let terrain_array = planet.terrain.replace(/,/g, "<br>");
        terrain.innerHTML = terrain_array;

        let films_string = planet.films.toString();
        let films_array = films_string.replace(/,/g, "<br>");
        films.innerHTML = films_array;
        

        // for (film_url of planet.films) {
        //     let filmArray = [];
        //     filmArray.push(film_url);
        //     films.innerHTML = filmArray;
        // makeFilmRequest(film_url, filmsRequestComplete);    
        // }

        planet.films.forEach(function (film) {
            // console.log(film);
            makeFilmRequest(film, filmsRequestComplete);
        });
    });
};

// const populateFilms = function (film_data) {
//     console.log(film_data);
//     let currentId = 'film_cell' + count.toString();
//     let filmCell = document.getElementById(currentId);
//     filmCell.innerText = film_data.title;
// };

document.addEventListener('DOMContentLoaded', app);