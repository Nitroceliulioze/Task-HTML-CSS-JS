// HOME.html
//MOVIE LIST

export default class Movie {
  constructor(title, genre, price, stock, id) {
    (this.title = title),
      (this.genre = genre),
      (this.price = price),
      (this.stock = stock),
      (this.id = id);
  }
  // getTitle = () => {
  //   return this.title;
  // };

  // getGenre = () => {
  //   return this.genre;
  // };

  // getPrice = () => {
  //   return this.price;
  // };

  // getStock = () => {
  //   return this.stock;
  // };

  // getMovies = () => {
  //   return this.movies;
  // };

  // addMovie = (movie) => {
  //   this.movies.push(movie);
  // };
}

const batman = new Movie("Batman", "Action", 4.55, 0, 1);
const superman = new Movie("Superman", "Action", 4.55, 10, 2);
const aquaman = new Movie("Aquaman", "Action", 4.55, 3, 3);
const mermaid = new Movie("Little mermaid", "Amination", 3.5, 5, 4);
const aladdin = new Movie("Aladdin", "Animation", 4, 4, 5);
const titanic = new Movie("Titanic", "Drama", 7, 10, 6);
const starwars = new Movie("Star Wars", "Action", 6, 12, 7);
const got = new Movie("Game of Thrones", "Fantasy", 12, 0, 8);

// const movieList = [{
//     title: 'Batman',
//     genre: 'Action',
//     price: 4.55,
//     stock: 0
// }, {
//     title: 'Superman',
//     genre: 'Action',
//     price: 4.55,
//     stock: 3
// }, {
//     title: 'Aquaman',
//     genre: 'Action',
//     price: 4.55,
//     stock: 21
// }, {
//     title: 'Little mermaid',
//     genre: 'Amination',
//     price: 3.5,
//     stock: 5
// }, {
//     title: 'Aladdin',
//     genre: 'Animation',
//     price: 4,
//     stock: 4
// }, {
//     title: 'Titanic',
//     genre: 'Drama',
//     price: 7,
//     stock: 10
// }, {
//     title: 'Star Wars',
//     genre: 'Action',
//     price: 6,
//     stock: 12
// }, {
//     title: 'Game of Thrones',
//     genre: 'Fantasy',
//     price: 12,
//     stock: 0
// }]

export const movieList = [];
movieList.push(
  batman,
  superman,
  aquaman,
  mermaid,
  aladdin,
  titanic,
  starwars,
  got
);

const tableHomeMovies = document.getElementById("home-table");

tableHomeMovies.innerHTML = `
    <tr>
        <th>Name</th>
        <th>Genre</th>
        <th>Price for 12h</th>
        <th>Is in stock</th>
    </tr>
`;

movieList.map((movie) => {
  tableHomeMovies.innerHTML += `
        <tr id="movie-row">
            <td>${movie.title}</td>
            <td>${movie.genre}</td>                        
            <td>${movie.price}$</td>
            <td class="check"><img class="check-img" id="${movie.id} check-img" src="images/check.png"></td>
            <td><button class="button-rent" id="${movie.id}">Rent</button></td>
        </tr>
    `;
});

movieList.map((movie) => {
  const stockImage = document.getElementById(`${movie.id} check-img`);
  if (movie.stock === 0) {
    stockImage.src = "images/cross.png";
  } else {
    stockImage.src = "images/check.png";
  }
});

//RENT button

const buttons = document.querySelectorAll("button");

export const yourMovies = [];

for (let i = 0; i < buttons.length; ++i) {
  buttons[i].addEventListener("click", rent);
}

function rent() {
  for (let i = 0; i < movieList.length; i++) {
    if (movieList[i].id === +this.id) {
      if (movieList[i].stock === 0) {
        return false;
      } else {
        movieList[i].stock = movieList[i].stock - 1;
        yourMovies.push(movieList[i]);
      }
    }
  }
  
  movieList.map((movie) => {
    const stockImage = document.getElementById(`${movie.id} check-img`);
    if (movie.stock === 0) {
      stockImage.src = "images/cross.png";
    } else {
      stockImage.src = "images/check.png";
    }
  });
}
console.log(yourMovies);