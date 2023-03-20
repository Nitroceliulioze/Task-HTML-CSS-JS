const removeBtn = document.getElementById("button-remove");

const rentTime = document.getElementById("time");
const timeIncrement = document.getElementById("next");
const timeDerement = document.querySelectorAll(".prev");

//yourMovies table

const tableYourMovies = document.getElementById("yourMovies-table");

const yourMovies = JSON.parse(localStorage.getItem("movies"));

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
        <tr id="${movie.id} your-movie-row">
            <td>${movie.title}</td>
            <td>${movie.genre}</td>
            <td><span class="sign prev" onclick="decrement()">&#60;</span><span class="time" id="time"> 12 </span><span class="sign next" id="next">&#62;</span></td>
            <td>${movie.price}</td>
            <td><button class="button-remove" id="${movie.id}">Remove</button></td>
        </tr>
    `;
});

// // Time column

// let time = 12;

// rentTime.innerHTML = time + "h";

// function increment() {
//   if (time === 168) {
//     return false;
//   } else {
//     time += 12;
//     rentTime.innerHTML = time + "h";
//   }
//   console.log(next)
// }

// function decrement() {
//   if (time === 12) {
//     return false;
//   } else {
//     time = 12;
//     rentTime.innerHTML = time + "h";
//   }
// }

// REMOVE button
const buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("click", removeMovie);
}

//get index and splice

function removeMovie() {
  for (let i = 0; i < yourMovies.length; i++) {
    console.log(yourMovies[i]);
    if (yourMovies[i].id === +this.id) {
        console.log(yourMovies.getIndexOf(i))
    }
  }
}
yourMovies.map((movie) => {
  const yourMovieRow = document.getElementById(`${movie.id} your-movie-row`);
});
// function remove() {
//   console.log(this)
// for (let i = 0; i < yourMovies.length; i++) {
//   if (yourMovies[i].id === +this.id) {
//     yourMovieRow.style.display = "none";

//     yourMovies[i].stock = yourMovies[i].stock + 1;
//   }
//   // }
