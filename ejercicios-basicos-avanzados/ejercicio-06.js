// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestra el valor de i por consola.
for (let i = 0; i < 10; i++) {
    console.log("1.1 Valor de i:", i);
}


// 1.2 Muestra el valor de i por consola solo cuando el resto del número dividido entre 2 sea 0 (números pares).
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log("1.2 Número par:", i);
    }
}


// 1.3 Bucle para contar ovejas (10 vueltas)
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        console.log("Intentando dormir 🐑");
    } else {
        console.log("¡Dormido!");
    }
}