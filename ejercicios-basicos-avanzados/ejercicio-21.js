const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

// 1. Recorremos con for of el array para encontrar los menores de edad y lo imprimimos por consola
console.log("Usuarios menores de edad:");
for (const user of users) {
  if (user.years < 18) {
    console.log(user.name);
  }
}

//2. Recorremos otra vez con for of el array para encontrar los mayores de edad y lo imprimimos por consola
console.log("Usuarios mayores de edad:");
for (const user of users) {
  if (user.years >= 18) {
    console.log(user.name);
  }
}