const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  // 1. Creo un array vacío para ir metiendo los elementos no duplicados
  const uniqueList = [];

  // 2. Recorro el array buscando los elementos necesarios
  for (let i = 0; i < list.length; i++) {
    const item = list[i];

    // 3. Revisar que no esté ya en el array
    if (!uniqueList.includes(item)) {
      // Si no está se añade
      uniqueList.push(item);
    }
  }

  return uniqueList;
}

// Prueba
console.log(removeDuplicates(duplicates));