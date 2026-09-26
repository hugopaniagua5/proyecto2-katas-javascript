const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actorList) {
  // 1. Usamos new date y getFullYear para obtener el año actual
  const currentYear = new Date().getFullYear();

  // 2. Creamos un array para guardar los objetos con nombre y edad
  const actorsWithAges = [];

  // 3. For of para recorrer el array
  for (const actor of actorList) {
    const age = currentYear - actor.born;

    // 4. Creamos un objeto para añadirlo al array
    actorsWithAges.push({
      name: actor.name,
      age: age
    });
  }

  // 5. Devolvemos el array con nombre y edad
  return actorsWithAges;
}

// Resultado por consola
console.log(calculateActorsAges(actors));