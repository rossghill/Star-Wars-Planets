import ("./app.js")

test();

let back = document.getElementById('back_button');
let forward = document.getElementById('forward_button');
let first = document.getElementById('first');
let last = document.getElementById('last');
let currentPage = 1;
let url = "https://swapi.co/api/planets/?format=json&page="

first.addEventListener("click", function () {
    makeRequest(url, requestComplete);
    console.log(url);
});

back.addEventListener("click", function() {
    console.log("back clicked");
    if (currentPage !== 1) {
        currentPage--;  
        let url = "https://swapi.co/api/planets/?format=json&page=" + currentPage;
        console.log(url);
        makeRequest(url, requestComplete);
    }
});

forward.addEventListener("click", function () {
    console.log("forward clicked");
    if (currentPage !== 7) {
        currentPage++;
        let url = "https://swapi.co/api/planets/?format=json&page=" + currentPage;
        console.log(url);
        makeRequest(url, requestComplete);
    }
});

last.addEventListener("click", function () {
    console.log("last clicked");
    let url = "https://swapi.co/api/planets/?format=json&page=7"
    makeRequest(url, requestComplete);
    console.log(url);
});