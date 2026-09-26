// 4.1 Filtrar valores mayores que 18
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages1.filter((age) => age > 18);

console.log('4.1 Mayores de 18:', adults);

// 4.2 Filtrar números pares (número % 2 === 0)
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter((age) => age % 2 === 0);

console.log('4.2 Edades pares:', evenAges);

// 4.3 Filtrar streamers que juegan a 'League of Legends'
const streamers1 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const lolStreamers = streamers1.filter(
  (streamer) => streamer.gameMorePlayed === 'League of Legends'
);

console.log('4.3 Streamers de LoL:', lolStreamers);

// 4.4 Filtrar streamers cuyo nombre incluya la letra 'u'
const streamers2 = [
  { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
  { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
  { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
  { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

const streamersWithU = streamers2.filter((streamer) =>
  streamer.name.toLowerCase().includes('u')
);

console.log('4.4 Streamers con "u" en el nombre:', streamersWithU);

// 4.5 Filtrar por 'Legends' y transformar a MAYÚSCULAS si age > 35
const filteredLegendsStreamers = streamers2
  .filter((streamer) => streamer.gameMorePlayed.includes('Legends'))
  .map((streamer) => {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
      };
    }
    return streamer;
  });

console.log('4.5 Streamers Legends (con mayúsculas si > 35):', filteredLegendsStreamers);