const app = function () {
    let url = "https://swapi.co/api/planets/?format=json&page=";
    makeRequest(url, requestComplete);  
};

const test = function() {
    console.log("linked");
}

const clearTable = function() {

}

const makeRequest = function(url, callback) {
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

const makeFilmsRequest = function(films_url, callback) {
    const request = new XMLHttpRequest();
    request.open("GET", films_url);
    request.addEventListener("load", callback);
    request.send();
}

const filmsRequestComplete = function () {
    if (this.status !== 200) return;
    const jsonString = this.responseText;
    const film_data = JSON.parse(jsonString);
    // console.log(film_data)
    return returnFilms(film_data);
}

const populateList = function(planets) {

    const table = document.getElementById('table_body');

    planets.results.forEach(function(planet) {
        let count = 0;
        const planet_data = document.createElement('tr');
        const row = table.insertRow(0);

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

        // let films_url = planet.films[0] + "?format=json";
        
        // let film = makeFilmsRequest(films_url, filmsRequestComplete);
        // // films.innerText = film[0].title;
        // console.log(film)
        count++;

    });
};

const returnFilms = function(film_data) {
    return film_data.title;
}

document.addEventListener('DOMContentLoaded', app);

