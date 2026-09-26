const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  // 1. Creo una variable acumuladora que empieza en 0
  let totalSum = 0;

  // 2. Bucle con los elementos del array
  for (let i = 0; i < numberList.length; i++) {
    // Vamos sumando cada número a la variable
    totalSum += numberList[i];
  }

  // 3. Devolvemos la suma total
  return totalSum;
}

// Prueba
console.log("La suma total es:", sumNumbers(numbers));