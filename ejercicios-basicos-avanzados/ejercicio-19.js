const toys = [
  { id: 5, name: 'Transformers' },
  { id: 11, name: 'LEGO' },
  { id: 23, name: 'Hot Wheels' },
  { id: 40, name: 'Rascador de gato' },
  { id: 40, name: 'FurReal Friends gato interactivo' },
  { id: 60, name: 'Nerf Blaster' },
  { id: 71, name: 'Sylvanian Families - Familia gato' }
];

// 1. Creo un array para guardar los juguetes que no lleven gato
const finalToys = [];

// 2. Recorremos los juguetes con for...of
for (const toy of toys) {
  // 3. Comprobamos que ningún elemento lleve gato
  if (!toy.name.includes('gato')) {
    // Si cumple, lo añadimos al nuevo array
    finalToys.push(toy);
  }
}

// 4. Resultado por consola
console.log(finalToys);
