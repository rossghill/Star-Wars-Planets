import("./app.js")

let searchbutton = document.getElementById('search_button');

searchbutton.addEventListener("click", function () {
    clearTable();
    resetPageNos();
    let search_term = document.getElementById('search_input').value;
    let url = search_url + search_term
    console.log(url);
    sendSearch(url);
});

const sendSearch = function (url) {
    makeRequest(url, requestComplete);
}

// function myFunction() {
//     clearTable();
//     resetPageNos();
//     let input = document.getElementById('search_input')
//     let table_content = document.getElementById('planets_table');
//     let table_row = table_content.getElementsByTagName("tr");
//     let td;

//     for (i = 0; i < table_row.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             if (td.innerHTML.indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }