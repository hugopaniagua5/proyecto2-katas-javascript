const albums = [
  { title: 'Led Zeppelin IV', genre: 'Rock', duration: 42.19 },
  { title: 'The Dark Side of the Moon', genre: 'Rock', duration: 42.49 },
  { title: 'Back in Black', genre: 'Rock', duration: 42.11 },
  { title: 'Hotel California', genre: 'Rock', duration: 43.08 },
  { title: 'Abbey Road', genre: 'Rock', duration: 47.23 },
  { title: 'Thriller', genre: 'Pop', duration: 42.19 },
  { title: 'A Night at the Opera', genre: 'Rock', duration: 43.08 },
  { title: 'The Wall', genre: 'Rock', duration: 81.00 },
  { title: 'Born to Run', genre: 'Rock', duration: 39.26 },
  { title: 'The Joshua Tree', genre: 'Rock', duration: 50.11 }
];

// 1. Creamos la variable
let totalRockDuration = 0;

// 2. For of para recorrer el array
for (const album of albums) {
  // 3. Comprobamos que sea rock
  if (album.genre === 'Rock') {
    // 4. Si es así, lo sumamos a la variable
    totalRockDuration += album.duration;
  }
}

// 5. Resultado por consola
console.log(`La duración total de los álbumes de rock es: ${totalRockDuration} minutos`);