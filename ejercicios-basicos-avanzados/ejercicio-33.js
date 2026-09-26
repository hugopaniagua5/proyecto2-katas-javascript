const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

function getCapital(country) {
  // 1. Buscamos el país directamente en el objeto de capitales
  const capital = capitals[country];

  // 2. Si la clave existe devolvemos la capital
  if (capital) {
    return `La capital de ${country} es ${capital}.`;
  } else {
    // 3. Si no existe devolvemos un mensaje de que no está
    return `Lo siento, el país "${country}" no se encuentra en la lista.`;
  }
}

// Resultado por consola
console.log(getCapital('Spain'));
console.log(getCapital('Brazil'));