const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
};

// Recorro el objeto con for...in y muestro el resultado por consola
for (const key in alien) {
  console.log(`La propiedad ${key} tiene cómo valor: ${alien[key]}`);
}