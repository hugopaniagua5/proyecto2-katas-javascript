// 2.1 Copia de un array con Spread Operator
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];

console.log('2.1 Copia pointsList:', pointsListCopy);

// 2.2 Copia de un objeto con Spread Operator
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyCopy = { ...toy };

console.log('2.2 Copia toy:', toyCopy);

// 2.3 Unir dos arrays en uno nuevo
const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54, 87, 99, 65, 32];
const joinedPoints = [...pointsList1, ...pointsList2];

console.log('2.3 Arrays unidos:', joinedPoints);

// 2.4 Fusionar dos objetos en uno nuevo
const toyBase = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] };
const mergedToy = { ...toyBase, ...toyUpdate };

console.log('2.4 Objeto fusionado:', mergedToy);

// 2.5 Crear una copia de un array eliminando la posición 2 (índice 2)
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
// Cortamos desde el inicio hasta el índice 2 y desde el índice 3 hasta el final
const colorsCopyWithoutIndex2 = [
  ...colors.slice(0, 2),
  ...colors.slice(3)
];

console.log('2.5 Copia sin la posición 2 (amarillo):', colorsCopyWithoutIndex2);