const removeBtn = document.getElementById("button-remove");
const yourMovieRow = document.getElementById("your-movie-row");
const rentTime = document.getElementById("time");
const timeIncrement = document.getElementById("next");
const timeDerement = document.querySelectorAll(".prev")


// Time column 

let time = 12;

rentTime.innerHTML = time + "h";

function increment() {
    if (time === 168) {
        return false
    } else {
        time += 12;
        rentTime.innerHTML = time + "h";
    };
}

function decrement() {
    if (time === 12) {
        return false
    } else {
        time = 12;
        rentTime.innerHTML = time + "h";
    };
}



// REMOVE button
// How to get current movie? 

function remove() {
    yourMovieRow.style.display = "none";

}
