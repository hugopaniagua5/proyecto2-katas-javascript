const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

// 1. Creamos un índice en el array de frutas para no repetirlas
let fruitIndex = 0;

// 2. Usamos for para recorrer el array
for (let i = 0; i < foodSchedule.length; i++) {
  // 3. If para eliminar las comidas no veganas
  if (!foodSchedule[i].isVegan) {
    // 4. Si no es vegana la reemplazamos por una fruta del array de frutas
    foodSchedule[i].name = fruits[fruitIndex];
    foodSchedule[i].isVegan = true;

    // Avanzamos en el índice para no repetir ninguna fruta
    fruitIndex++;
  }
}

console.log(foodSchedule);