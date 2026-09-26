const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

function averageMovieDuration(movieList) {

  // 1. Acumulamos la suma total de minutos
  let totalDuration = 0;
  for (const movie of movieList) {
    totalDuration += movie.duration;
  }

  // 2. Calculamos y devolvemos el promedio duración total/nº de películas
  return totalDuration / movieList.length;
}

// Resultado por consola
console.log('El promedio de duración es:', averageMovieDuration(movies), 'minutos');