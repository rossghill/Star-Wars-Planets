import ("./app.js")

let back = document.getElementById('back_button');
let forward = document.getElementById('forward_button');
let first = document.getElementById('first');
let last = document.getElementById('last');
let currentPage = document.getElementById('current_page');
let nextPage = document.getElementById('next_page');
let currentPageNo = 1;
let nextPageNo = 2;
let url = "https://swapi.co/api/planets/?format=json&page="

first.addEventListener("click", function () {
    clearTable();
    let currentPageNo = 1;
    let nextPageNo = 2;
    currentPage.innerText = "1";
    nextPage.innerText = "2";
    makeRequest(url, requestComplete);
    console.log(url);

});

back.addEventListener("click", function() {
    console.log("back clicked");
    if (currentPageNo !== 1) {
        clearTable();
        currentPageNo--;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = (currentPageNo + 1).toString();  
        let url = "https://swapi.co/api/planets/?format=json&page=" + currentPageNo;
        console.log(url);
        makeRequest(url, requestComplete);
    }
});

forward.addEventListener("click", function () {
    console.log("forward clicked");
    if (currentPageNo !== 7) {
        clearTable();
        currentPageNo++;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = (currentPageNo + 1).toString(); 
        let url = "https://swapi.co/api/planets/?format=json&page=" + currentPageNo;
        console.log(url);
        makeRequest(url, requestComplete);
    }
});

last.addEventListener("click", function () {
    clearTable();
    currentPage.innerText = "";
    nextPage.innerText = "7";
    console.log("last clicked");
    let url = "https://swapi.co/api/planets/?format=json&page=7"
    makeRequest(url, requestComplete);
    console.log(url);
});