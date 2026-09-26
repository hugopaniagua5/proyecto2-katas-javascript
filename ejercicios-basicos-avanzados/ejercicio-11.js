const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let totalSum = 0;

  for (let i = 0; i < list.length; i++) {
    const elemento = list[i];

    // 1. Sumamos tal cual si es número
    if (typeof elemento === "number") {
      totalSum += elemento;
    } 
    // Sumamos las letras de cada elemento si es texto
    else if (typeof elemento === "string") {
      totalSum += elemento.length;
    }
  }

  return totalSum;
}

// Prueba
console.log("La suma total mezclada es:", averageWord(mixedElements));