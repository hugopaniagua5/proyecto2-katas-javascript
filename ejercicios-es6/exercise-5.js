const streamers = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

// 1. Seleccionamos el input por su atributo data-function
const filterInput = document.querySelector('[data-function="toFilterStreamers"]');

// 2. Escuchamos el evento 'input' para ejecutar la búsqueda cada vez que el usuario escribe
filterInput.addEventListener('input', (event) => {
  // Convertimos el texto ingresado a minúsculas para evitar problemas con mayúsculas
  const searchText = event.target.value.toLowerCase();

  // Filtramos la lista de streamers según su nombre
  const filteredStreamers = streamers.filter((streamer) =>
    streamer.name.toLowerCase().includes(searchText)
  );

  // Mostramos el resultado filtrado por consola
  console.log('Streamers encontrados:', filteredStreamers);
});