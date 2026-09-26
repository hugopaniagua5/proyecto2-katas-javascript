const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

// 1. Variables para la suma de volúmenes y de sonidos
let totalVolume = 0;
let soundCount = 0;

// 2. For of para el array de usuarios
for (const user of users) {
  // 3. For in para recorrer las claves del objeto favoritesSounds
  for (const soundKey in user.favoritesSounds) {
    // Accedemos al objeto del sonido actual y a su propiedad 'volume'
    const sound = user.favoritesSounds[soundKey];
    totalVolume += sound.volume;
    soundCount++;
  }
}

// 4. Media volúmenes/sonidos
const averageVolume = totalVolume / soundCount;

// 5. Resultado por consola
console.log(`El volumen medio de todos los sonidos es: ${averageVolume}`);