import("./app.js")

const back = document.getElementById('back_button');
const forward = document.getElementById('forward_button');
const first = document.getElementById('first');
const last = document.getElementById('last');
const currentPage = document.getElementById('current_page');
const nextPage = document.getElementById('next_page');
let currentPageNo = 1;
let nextPageNo = 2;

let resetPageNos = function () {
    currentPageNo = 1;
    nextPageNo = 2;
    currentPage.innerText = "1";
    nextPage.innerText = "2";
}

first.addEventListener("click", function () {
    clearTable();
    resetPageNos();
    currentPage.innerText = "1";
    nextPage.innerText = "2";
    makeRequest(url, requestComplete);
    console.log(url);

});

back.addEventListener("click", function () {
    console.log("back clicked");
    if (currentPageNo !== 1) {
        clearTable();
        currentPageNo--;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = (currentPageNo + 1).toString();
        let page_url = url + currentPageNo;
        console.log(page_url);
        makeRequest(page_url, requestComplete);
    }
});

forward.addEventListener("click", function () {
    console.log("forward clicked");
    if (currentPageNo !== 7) {
        clearTable();
        currentPageNo++;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = (currentPageNo + 1).toString();
        let page_url = url + currentPageNo;
        console.log(page_url);
        makeRequest(page_url, requestComplete);
    }
});

last.addEventListener("click", function () {
    clearTable();
    currentPage.innerText = "";
    nextPage.innerText = "7";
    let url = "https://swapi.co/api/planets/?format=json&page=7";
    makeRequest(url, requestComplete);
    console.log(url);
});