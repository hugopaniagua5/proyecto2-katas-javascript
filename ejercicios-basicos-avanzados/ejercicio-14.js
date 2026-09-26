const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  // 1. Creo un objeto vacío para guardar el contador de cada palabra
  const count = {};

  // 2. Recorro el array
  for (let i = 0; i < list.length; i++) {
    const word = list[i];

    // 3. Compruebo si existe ya dentro del contador
    if (count[word]) {
      // Si existe, suma 1 a su contador
      count[word]++;
    } else {
      // Si todavía no existe se crea su contador desde 1
      count[word] = 1;
    }
  }

  return count;
}

// Prueba
console.log(repeatCounter(words));