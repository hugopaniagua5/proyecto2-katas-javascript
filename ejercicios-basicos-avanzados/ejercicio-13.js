const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, nameToFind) {
  // 1. Buscamos la posición del nombre con indexOf
  const position = nameList.indexOf(nameToFind);

  // 2. Si es diferente a -1 está en el array
  if (position !== -1) {
    return { found: true, position: position };
  } else {
    // Si da -1, es que no existe en el array
    return false;
  }
}

// Prueba
console.log(nameFinder(names, 'Tony'));
console.log(nameFinder(names, 'Hugo'));