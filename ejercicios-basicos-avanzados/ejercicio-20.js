const popularToys = [];

const toys = [
  { id: 101, name: 'Super Soaker', sellCount: 15 },
  { id: 102, name: 'Tamagotchi', sellCount: 22 },
  { id: 103, name: 'Polly Pocket', sellCount: 8 },
  { id: 104, name: 'Yo-yo', sellCount: 33 },
  { id: 105, name: 'Pikachu plush toy', sellCount: 19 },
  { id: 106, name: "Rubik's Cube", sellCount: 27 },
  { id: 107, name: 'Fidget Spinner', sellCount: 12 },
  { id: 108, name: 'Slinky', sellCount: 5 },
  { id: 109, name: 'Magic 8-Ball', sellCount: 38 },
  { id: 110, name: 'Troll Doll', sellCount: 20 }
];

// 1. Recorremos el array con for...of
for (const toy of toys) {
  // 2. Comprobamos si el número de ventas es mayor de 15
  if (toy.sellCount > 15) {
    // 3. Si tiene se cumple lo añadimos al nuevo array
    popularToys.push(toy);
  }
}

// 4. Resultado por consola
console.log(popularToys);