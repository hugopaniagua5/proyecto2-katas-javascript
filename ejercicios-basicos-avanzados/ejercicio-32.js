const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMenList) {
  // 1. Creamos una variable temporal que se irá actualizando con el más antiguo
  let oldestMember = xMenList[0];

  // 2. For of para recorrer el array
  for (const member of xMenList) {
    // 3. Si hay algún mutante más antiguo lo actualizamos
    if (member.year < oldestMember.year) {
      oldestMember = member;
    }
  }

  // 4. Devolvemos el más antiguo
  return oldestMember;
}

// Resultado de la función por consola
console.log('El X-Men más antiguo es:', findOldestXMen(xMen));