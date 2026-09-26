const products = [
  "Camiseta de Metallica",
  "Pantalón vaquero",
  "Gorra de beisbol",
  "Camiseta de Basket",
  "Cinturón de Orión",
  "AC/DC Camiseta"
];

// Recorro el array
for (let i = 0; i < products.length; i++) {
  const product = products[i];

  // Compruebo con includes si el elemento contiene la palabra "Camiseta"
  if (product.includes("Camiseta")) {
    console.log(product);
  }
}