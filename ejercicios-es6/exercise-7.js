const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
];

// 1. Filtramos solo los videojuegos que contengan 'RPG' en su array genders
const rpgGames = videogames.filter((game) => game.genders.includes('RPG'));

// 2. Usamos .reduce() para calcular la suma de las puntuaciones de esos juegos
const totalRpgScore = rpgGames.reduce((acc, game) => acc + game.score, 0);

// 3. Calculamos la media dividiendo la suma entre el número de juegos RPG encontrados
const averageRpgScore = totalRpgScore / rpgGames.length;

console.log('Juegos RPG encontrados:', rpgGames);
console.log('Media de puntuación de juegos RPG:', averageRpgScore);