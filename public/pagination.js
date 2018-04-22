import ("./app.js")

test();

var back = document.getElementById('back_button');
var forward = document.getElementById('forward_button');
var first = document.getElementById('first');
var last = document.getElementById('last');

first.addEventListener("click", function () {
    app();
});

back.addEventListener("click", function() {
    console.log("back clicked");
});

forward.addEventListener("click", function () {
    console.log("forward clicked");
});

last.addEventListener("click", function () {
    console.log("last clicked");
});