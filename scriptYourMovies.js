const removeBtn = document.getElementById("button-remove");
const yourMovieRow = document.getElementById("your-movie-row");
const rentTime = document.getElementById("time");
const timeIncrement = document.getElementById("next");
const timeDerement = document.querySelectorAll(".prev");

//yourMovies table

const tableYourMovies = document.getElementById("yourMovies-table");

tableYourMovies.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Time</th>
        <th>Price</th>
    </tr>
`;

yourMovies.map((movie) => {
    tableYourMovies.innerHTML += `
        <tr id="your-movie-row">
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td><span class="sign prev" onclick="decrement()">&#60;</span><span class="time" id="time"> 12 </span><span class="sign next" id="next" onclick="increment()">&#62;</span></td>
            <td>${movie.price}</td>
            <td><button class="button-remove" id="${movie.id} button-remove" onclick="remove()">Remove</button></td>
        </tr>
    `;
})



// Time column

let time = 12;

rentTime.innerHTML = time + "h";

function increment() {
  if (time === 168) {
    return false;
  } else {
    time += 12;
    rentTime.innerHTML = time + "h";
  }
}

function decrement() {
  if (time === 12) {
    return false;
  } else {
    time = 12;
    rentTime.innerHTML = time + "h";
  }
}

// REMOVE button
// How to get current movie?

function remove() {
  yourMovieRow.style.display = "none";
}
