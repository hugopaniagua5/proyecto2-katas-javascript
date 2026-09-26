// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showmeBtn = document.querySelector('.showme');
console.log('1.1 Botón .showme:', showmeBtn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pilladoH1 = document.querySelector('#pillado');
console.log('1.2 H1 #pillado:', pilladoH1);

// 1.3 Usa querySelectorAll para mostrar por consola todos los p
const allParagraphs = document.querySelectorAll('p');
console.log('1.3 Todos los párrafos:', allParagraphs);

// 1.4 Usa querySelectorAll para mostrar por consola todos los elementos con la clase .pokemon
const allPokemons = document.querySelectorAll('.pokemon');
console.log('1.4 Todos los pokemons:', allPokemons);

// 1.5 Usa querySelectorAll para mostrar por consola todos los elementos con el atributo data-function="testMe"
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log('1.5 Elementos con data-function="testMe":', allTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3º personaje con el atributo data-function="testMe"
console.log('1.6 3er personaje (Rick):', allTestMe[2]);