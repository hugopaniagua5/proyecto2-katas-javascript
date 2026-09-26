const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Creamos los contadores
let before2000Count = 0;
let afterOrIn2000Count = 0;

// For of para recorrer el array e if y else para sumar a los contadores
for (const movie of movies) {
  if (movie.releaseYear < 2000) {
    before2000Count++;
  } else {
    afterOrIn2000Count++;
  }
}

// Resultado por consola
console.log(`Películas anteriores al año 2000: ${before2000Count}`);
console.log(`Películas del año 2000 o posteriores: ${afterOrIn2000Count}`);