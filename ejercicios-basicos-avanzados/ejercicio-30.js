const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// 1. Creamos el objeto vacío
const tracksByGenre = {};

// 2. For of para recorrer el array
for (const track of tracks) {
  const genre = track.genre;

  // 3. Si la clave del género todavía no existe creamos un array vacío para meterla
  if (!tracksByGenre[genre]) {
    tracksByGenre[genre] = [];
  }

  // 4. Añadimos cada canción a su género
  tracksByGenre[genre].push(track);
}

// 5. Resultado por consola
console.log(tracksByGenre);