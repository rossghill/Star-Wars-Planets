import("./app.js")

let searchbutton = document.getElementById('search_button');
let search_input = document.getElementById('search_input');

searchbutton.addEventListener("click", function () {
    clearTable();
    resetPageNos();
    let search_term = document.getElementById('search_input').value;
    let url = search_url + search_term;
    makeRequest(url, requestComplete);
});

let enter_search = function() {
        clearTable();
        resetPageNos();
        let search_term = document.getElementById('search_input').value;
        let url = search_url + search_term;
        makeRequest(url, requestComplete);
}
