// 1.1 Destructuring del objeto game
const game = { title: 'The Last of Us 2', gender: ['action', 'zombie', 'survival'], year: 2020 };

const { title, gender, year } = game;

console.log('1.1 Title:', title);
console.log('1.1 Gender:', gender);
console.log('1.1 Year:', year);

// 1.2 Destructuring del array fruits en fruit1, fruit2 y fruit3
const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

console.log('1.2 Frutas:', fruit1, fruit2, fruit3);

// 1.3 Destructuring de la función animalFunction
const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' };
};

const { name, race } = animalFunction();

console.log('1.3 Animal:', name, race);

// 1.4 Destructuring del objeto car y de su propiedad itv
const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] };

// Extraemos name e itv del objeto car
const { name: carName, itv } = car;

// Extraemos los tres años del array itv mediante destructuring
const [year1, year2, year3] = itv;

console.log('1.4 Car Name:', carName);
console.log('1.4 ITV Years:', year1, year2, year3);