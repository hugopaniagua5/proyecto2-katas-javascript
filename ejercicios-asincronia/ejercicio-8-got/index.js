// 1. Seleccionamos los elementos del DOM
const characterSelect = document.getElementById('character-list');
const characterImage = document.querySelector('.character-image');

// Variable global para guardar la lista de personajes obtenida de la API
let charactersData = [];

// 2. Función asíncrona para pedir los datos a la API de Game of Thrones
async function getGotCharacters() {
  try {
    const response = await fetch('https://thronesapi.com/api/v2/Characters');
    charactersData = await response.json();

    // Rellenamos el desplegable <select>
    populateSelect(charactersData);
  } catch (error) {
    console.error('Error al obtener los personajes de GOT:', error);
  }
}

// 3. Función para crear las opciones (<option>) dentro del <select>
function populateSelect(characters) {
  // Opción por defecto
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = '-- Selecciona un personaje --';
  characterSelect.appendChild(defaultOption);

  // Iteramos sobre cada personaje y creamos un <option>
  characters.forEach((character) => {
    const option = document.createElement('option');
    option.value = character.imageUrl; // Guardamos la URL de la imagen en el value
    option.textContent = character.fullName; // Mostramos el nombre completo
    characterSelect.appendChild(option);
  });
}

// 4. Escuchamos el evento 'change' en el <select> para actualizar la imagen
characterSelect.addEventListener('change', (event) => {
  const imageUrl = event.target.value;

  if (imageUrl) {
    characterImage.src = imageUrl;
    characterImage.alt = 'Imagen del personaje';
    characterImage.style.display = 'block';
  } else {
    characterImage.src = '';
    characterImage.style.display = 'none';
  }
});

// 5. Ejecutamos la llamada a la API al cargar el script
getGotCharacters();