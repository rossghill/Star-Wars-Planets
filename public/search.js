import("./app.js");

let search_input = document.getElementById('search_input');

let enter_search = function() {
        clearTable();
        resetPageNos();
        let search_term = document.getElementById('search_input').value;
        let url = search_url + search_term;
        makeRequest(url, requestComplete);
};
