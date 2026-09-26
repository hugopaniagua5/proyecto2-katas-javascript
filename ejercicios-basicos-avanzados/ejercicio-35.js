const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutantList, powerToFind) {
  // 1. Array acumulador para guardar los nombres de los mutantes encontrados
  const foundMutants = [];

  // 2. For of para recorrer el array
  for (const mutant of mutantList) {
    if (mutant.power === powerToFind) {
      foundMutants.push(mutant.name);
    }
  }

  // 3. Comprobamos si hay alguno
  if (foundMutants.length > 0) {
    // Join para unir los nombres con comas si hay más de uno
    return `Se ha(n) encontrado mutante(s) con el poder "${powerToFind}": ${foundMutants.join(', ')}.`;
  } else {
    return `No se ha encontrado ningún mutante con el poder "${powerToFind}".`;
  }
}

// Resultado por consola
console.log(findMutantByPower(mutants, 'telepathy'));
console.log(findMutantByPower(mutants, 'invisibility'));