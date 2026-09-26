function rollDice(numFaces) {
  // 1. Math.random para generar un número decimal entre 0 (incluido) y 1 (excluido)
  // 2. Multiplicamos por el número de caras 
  // 3. Math.floor() redondea hacia abajo al entero más cercano
  // 4. Sumamos 1 para que no pueda ser el resultado 0 nunca
  const result = Math.floor(Math.random() * numFaces) + 1;

  return result;
}

//Prueba por consola

console.log("Tirada de dado de 6 caras:", rollDice(6));
console.log("Tirada de dado de 20 caras (D20):", rollDice(20));
console.log("Tirada de dado de 100 caras:", rollDice(100));