import("./app.js")

let searchbutton = document.getElementById('search_button');
let base_url = "https://swapi.co/api/planets/?search="

searchbutton.addEventListener("click", function () {
    clearTable();
    resetPageNos();
    let search_term = document.getElementById('search_input').value;
    let search_url = base_url + search_term
    console.log(search_url);
    sendSearch(search_url);
});

const sendSearch = function (search_url) {
    makeRequest(search_url, requestComplete);
}