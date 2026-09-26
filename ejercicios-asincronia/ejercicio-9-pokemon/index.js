// 1. Seleccionamos el elemento <img> del HTML
const pokemonImage = document.querySelector('.random-image');

// 2. Función para generar un número entero aleatorio entre min y max (ambos incluidos)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3. Función asíncrona para obtener un Pokémon aleatorio de la 1.ª generación (1 al 151)
async function getRandomPokemon() {
  try {
    // Generamos un ID aleatorio del 1 al 151
    const randomId = getRandomInt(1, 151);

    // Hacemos la petición a la PokeAPI con ese ID aleatorio
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemonData = await response.json();

    // Extraemos la imagen oficial (sprite frontal) del objeto
    // Nota: 'front_default' o la imagen oficial 'official-artwork'
    const imageUrl =
      pokemonData.sprites.other['official-artwork'].front_default ||
      pokemonData.sprites.front_default;

    // Asignamos la imagen y el alt al elemento <img>
    if (pokemonImage) {
      pokemonImage.src = imageUrl;
      pokemonImage.alt = pokemonData.name;
    }

    console.log(`¡Pokémon cargado!: ${pokemonData.name.toUpperCase()} (ID: ${randomId})`);
  } catch (error) {
    console.error('Error al obtener el Pokémon aleatorio:', error);
  }
}

// 4. Ejecutamos la función automáticamente al cargar la página
getRandomPokemon();