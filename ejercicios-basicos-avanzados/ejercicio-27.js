const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];

// 1. Creamos la variable del más antiguo
let oldestCartoon = cartoons[0];

// 2. Recorremos el resto de la lista con for...of
for (const cartoon of cartoons) {
  // Si encontramos una serie más antigua la reemplazamos en la variable
  if (cartoon.debut < oldestCartoon.debut) {
    oldestCartoon = cartoon;
  }
}

// 3. Resulado por consola
const oldestCartoonName = oldestCartoon.name;
console.log("La serie más antigua es:", oldestCartoonName);