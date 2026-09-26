const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// 1. Función para encontrar el índice de un texto en el array
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i; // Devolvemos la posición tan pronto como encontramos la coincidencia
    }
  }
  return -1; // Devolvemos -1 si el texto no existe en el array
}

// 2. Función para eliminar un elemento apoyándose en findArrayIndex
function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  // Si el elemento existe (el índice no es -1), lo eliminamos
  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

// --- Pruebas de funcionamiento ---

console.log("Índice de 'Han Solo':", findArrayIndex(mainCharacters, "Han Solo")); // Devuelve 2
console.log("Índice de 'Yoda':", findArrayIndex(mainCharacters, "Yoda"));         // Devuelve -1

console.log("\nArray original antes de eliminar:", mainCharacters);

// Eliminamos a 'Rey'
removeItem(mainCharacters, "Rey");
console.log("Array tras eliminar a 'Rey':", mainCharacters);

// Eliminamos a 'Luke'
removeItem(mainCharacters, "Luke");
console.log("Array tras eliminar a 'Luke':", mainCharacters);