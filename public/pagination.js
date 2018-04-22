import ("./app.js")

test();

var back = document.getElementById('back_button');
var forward = document.getElementById('forward_button');
var first = document.getElementById('first');
var last = document.getElementById('last');
var currentPage = 1;
let url = "https://swapi.co/api/planets/?format=json&page="

first.addEventListener("click", function () {
    app();
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
});