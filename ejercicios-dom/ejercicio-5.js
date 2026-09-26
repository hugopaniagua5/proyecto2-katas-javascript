const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Estructura básica tipo web completa
const header = document.createElement('header');
const h1 = document.createElement('h1');
h1.textContent = 'Mi Colección de Álbumes';
header.appendChild(h1);
document.body.appendChild(header);

const main = document.createElement('main');
const ulAlbums = document.createElement('ul');

for (const album of albums) {
  const li = document.createElement('li');
  li.textContent = album;
  ulAlbums.appendChild(li);
}

main.appendChild(ulAlbums);
document.body.appendChild(main);