let rows = document.getElementsByClassName('planet_entry')

const app = function () {
    let url = "https://swapi.co/api/planets/?format=json&page=";
    makeRequest(url, requestComplete);  
};

const test = function() {
    console.log("linked");
}

const clearTable = function() {
    const the_table = document.getElementById('planets_table');
    the_table.getElementsByTagName("tbody")[0].innerHTML = "";
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
    const br = document.createElement("br");

    planets.results.forEach(function(planet) {
        let count = 0;
        let terrain_count = 0;
        // const planet_data = document.createElement('tr');
        const row = table.insertRow(0);

        const name = row.insertCell(0);
        // name.classList.add('planet_entry');
        const population = row.insertCell(1);
        // population.classList.add('planet_entry');
        const diameter = row.insertCell(2);
        // diameter.classList.add('planet_entry');
        const rot_period = row.insertCell(3);
        // rot_period.classList.add('planet_entry');
        const orb_period = row.insertCell(4);
        // orb_period.classList.add('planet_entry');
        const terrain = row.insertCell(5);
        // terrain.classList.add('planet_entry');
        const films = row.insertCell(6);
        // films.classList.add('planet_entry');

        name.innerText = planet.name;
        population.innerText = planet.population;
        diameter.innerText = planet.diameter;
        rot_period.innerText = planet.rotation_period;
        orb_period.innerText = planet.orbital_period;
        let terrain_array = planet.terrain.replace(/,/g, "<br>");
        console.log(terrain_array);

        // const generateFilms = function() {
        //     for (i = 0; i < terrain_array.length; i++) {
        //     return terrain_array[i] + br.innerHTML; 
        //     }     
        // }


        // terrain.innerText = generateFilms(); 

        terrain.innerHTML = terrain_array;

        // let films_url = planet.films[0] + "?format=json";
        
        // let film = makeFilmsRequest(films_url, filmsRequestComplete);
        // // films.innerText = film[0].title;
        // console.log(film)
        count++;
        terrain_count++;

    });
};

const returnFilms = function(film_data) {
    return film_data.title;
}

document.addEventListener('DOMContentLoaded', app);