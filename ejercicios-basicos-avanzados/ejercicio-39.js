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

// 1. Objeto vacío para cada sonido
const soundCount = {};

// 2. For of para recorrer el array de usuarios
for (const user of users) {
  // 3. For in para las claves (nombres de los sonidos)
  for (const soundName in user.favoritesSounds) {
    // 4. Si el sonido ya existe sumamos 1
    if (soundCount[soundName]) {
      soundCount[soundName]++;
    } else {
      // 5. Si no existe lo añadimos desde 1
      soundCount[soundName] = 1;
    }
  }
}

// 6. Resultado por consola
console.log(soundCount);