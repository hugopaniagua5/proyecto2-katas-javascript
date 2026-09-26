const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
  // Guardamos temporalmente el valor del primer índice
  const temp = array[index1];

  // Sobreescribimos la primera posición por el valor de la segunda
  array[index1] = array[index2];

  // Colocamos el valor guardado en la variable temporal dentro de la segunda posición
  array[index2] = temp;

  return array;
}

// Probamos intercambiando "La antorcha humana" (índice 0) con "La cosa" (índice 3)
console.log("Array original:", fantasticFour);
const swappedArray = swap(fantasticFour, 0, 3);
console.log("Array tras el intercambio:", swappedArray);