// 3.1 Devuelve un array solo con los nombres utilizando .map()
const users1 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const names = users1.map((user) => user.name);

console.log('3.1 Nombres:', names);

// 3.2 Devuelve los nombres, cambiando a 'Anacleto' si el nombre empieza por 'A'
const users2 = [
  { id: 1, name: 'Abel' },
  { id: 2, name: 'Julia' },
  { id: 3, name: 'Pedro' },
  { id: 4, name: 'Amanda' }
];

const updatedNames = users2.map((user) => {
  if (user.name.startsWith('A')) {
    return 'Anacleto';
  }
  return user.name;
});

console.log('3.2 Nombres modificados:', updatedNames);

// 3.3 Devuelve los nombres y añade ' (Visitado)' si isVisited es true
const cities = [
  { isVisited: true, name: 'Tokyo' },
  { isVisited: false, name: 'Madagascar' },
  { isVisited: true, name: 'Amsterdam' },
  { isVisited: false, name: 'Seul' }
];

const cityList = cities.map((city) => {
  if (city.isVisited) {
    return `${city.name} (Visitado)`;
  }
  return city.name;
});

console.log('3.3 Lista de ciudades:', cityList);