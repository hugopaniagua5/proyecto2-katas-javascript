const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// 1. Creamos el objeto vacío
const moviesByDecade = {};

// 2. For of para recorrer el array
for (const movie of starWarsMovies) {
  // 3. Calculamos la década: /10, math floor para redondear y luego *10
  const decade = Math.floor(movie.releaseYear / 10) * 10;

  // 4. Si la clave de la década todavía no existe creamos un array vacío
  if (!moviesByDecade[decade]) {
    moviesByDecade[decade] = [];
  }

  // 5. Añadimos cada película a su década
  moviesByDecade[decade].push(movie);
}

// 6. Resultado por consola
console.log(moviesByDecade);