const movies = [
  {
    title: "Bracula: Condemor II",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spider-Man: No Way Home",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "The Voices",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "Shrek",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

// 1. Array para guardar las categorías sin duplicar
const uniqueCategories = [];

// 2. Bucle externo con for of para cada película del array
for (const movie of movies) {
  // 3. Bucle interno para cada categoría de la película actual
  for (const category of movie.categories) {
    // 4. Si la categoría no está en el array nuevo la añadimos
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  }
}

// 5. Resultado por consola
console.log(uniqueCategories);