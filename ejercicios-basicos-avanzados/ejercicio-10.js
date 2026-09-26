const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let totalSum = 0;

  // 1. Bucle para sumar los elementos del array
  for (let i = 0; i < numberList.length; i++) {
    totalSum += numberList[i];
  }

  // 2. Calculamos la media
  let media = totalSum / numberList.length;

  return media;
}

// Prueba
console.log("El promedio es:", average(numbers));