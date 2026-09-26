// 1.1 Lista de países simple en el body
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

for (const country of countries) {
  const li = document.createElement('li');
  li.textContent = country;
  ulCountries.appendChild(li);
}
document.body.appendChild(ulCountries);

// 1.2 Eliminar elemento con la clase .fn-remove-me
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
  elementToRemove.remove();
}

// 1.3 Lista de coches dentro del div con data-function="printHere"
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

for (const car of cars) {
  const li = document.createElement('li');
  li.textContent = car;
  ulCars.appendChild(li);
}
if (printHereDiv) {
  printHereDiv.appendChild(ulCars);
}

// 1.4 Divs con h4 e img
const countryObjects = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

// Creamos un contenedor para agrupar estos divs
const containerDiv = document.createElement('div');
containerDiv.className = 'country-container';

for (const item of countryObjects) {
  const itemDiv = document.createElement('div');
  itemDiv.className = 'country-card';

  const h4 = document.createElement('h4');
  h4.textContent = item.title;

  const img = document.createElement('img');
  img.src = item.imgUrl;
  img.alt = item.title;

  // 1.6 Botón para eliminar este div concreto
  const deleteThisBtn = document.createElement('button');
  deleteThisBtn.textContent = 'Eliminar este tarjeta';
  deleteThisBtn.addEventListener('click', () => {
    itemDiv.remove();
  });

  itemDiv.appendChild(h4);
  itemDiv.appendChild(img);
  itemDiv.appendChild(deleteThisBtn);
  containerDiv.appendChild(itemDiv);
}
document.body.appendChild(containerDiv);

// 1.5 Botón para eliminar el último elemento de la serie
const deleteLastBtn = document.createElement('button');
deleteLastBtn.textContent = 'Eliminar el último';
deleteLastBtn.addEventListener('click', () => {
  const cards = containerDiv.querySelectorAll('.country-card');
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
document.body.appendChild(deleteLastBtn);