import("./app.js");

const first = document.getElementById('first');
const last = document.getElementById('last');
const back = document.getElementById('back_button');
const forward = document.getElementById('forward_button');
const currentPage = document.getElementById('current_page');
const nextPage = document.getElementById('next_page');
let currentPageNo = 1;
let nextPageNo = 2;


const resetPageNos = function () {
    currentPageNo = 1;
    nextPageNo = 2;
    currentPage.innerText = currentPageNo.toString();
    nextPage.innerText = nextPageNo.toString();
};

first.addEventListener("click", function () {
    clearTable();
    resetPageNos();
    if (row_count !== 10) {
        nextPageNo = currentPageNo + 1;
    }
    else {
        nextPageNo = "";
    } 
    currentPage.innerText = currentPageNo.toString();
    nextPage.innerText = nextPageNo.toString();
    makeRequest(url, requestComplete);   
});

last.addEventListener("click", function () {
    if (row_count === 10) {
        clearTable();
        currentPageNo = 7;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = "";
        url += currentPageNo;
        makeRequest(url, requestComplete);
    }
});

back.addEventListener("click", function () {
    if (currentPageNo !== 1) {
        clearTable();
        currentPageNo--;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = (currentPageNo + 1).toString();
        let page_url = url + currentPageNo;
        makeRequest(page_url, requestComplete);
    }
});

forward.addEventListener("click", function () {
    if (row_count === 10) {
        clearTable();
        currentPageNo++;
        currentPage.innerText = currentPageNo.toString();
        nextPage.innerText = (currentPageNo + 1).toString();
        let page_url = url + currentPageNo;
        makeRequest(page_url, requestComplete);
    }
});
