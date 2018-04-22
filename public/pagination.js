import ("./app.js")

let back = document.getElementById('back_button');
let forward = document.getElementById('forward_button');
let first = document.getElementById('first');
let last = document.getElementById('last');
let navPageCurrent = document.getElementsByClassName('current_page').innerText;
let navPageNext = document.getElementsByClassName('next_page').innerText;
let currentPage = 1;
let nextPage = 2;
let url = "https://swapi.co/api/planets/?format=json&page="

first.addEventListener("click", function () {
    clearTable();
    let currentPage = 1;
    let nextPage = 2;
    navPageCurrent = "1";
    navPageNext = "2";
    makeRequest(url, requestComplete);
    console.log(url);

});

back.addEventListener("click", function() {
    console.log("back clicked");
    if (currentPage !== 1) {
        clearTable();
        currentPage--; 
        let url = "https://swapi.co/api/planets/?format=json&page=" + currentPage;
        console.log(url);
        makeRequest(url, requestComplete);
    }
});

forward.addEventListener("click", function () {
    console.log("forward clicked");
    if (currentPage !== 7) {
        clearTable();
        currentPage++;
        navPageCurrent = "2";
        navPageNext = "3"; 
        let url = "https://swapi.co/api/planets/?format=json&page=" + currentPage;
        console.log(url);
        makeRequest(url, requestComplete);
    }
});

last.addEventListener("click", function () {
    clearTable();
    navPageCurrent.textContent = "";
    navPageNext.textContent = "7";
    console.log("last clicked");
    let url = "https://swapi.co/api/planets/?format=json&page=7"
    makeRequest(url, requestComplete);
    console.log(url);
});