const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

// Recorremos el array de atrás hacia delante para que no se quede ningún elemento sin revisar
for (let i = placesToTravel.length - 1; i >= 0; i--) {
  const destination = placesToTravel[i];

  // Si el id es 11 o es 40, se elimina 1 elemento de la posición en la que esté en ese momento
  if (destination.id === 11 || destination.id === 40) {
    placesToTravel.splice(i, 1);
  }
}

// Resultado por consola
console.log(placesToTravel);