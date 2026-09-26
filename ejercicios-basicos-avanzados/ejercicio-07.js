function greaterNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log("El número más alto es:", numberOne);
    } else if (numberTwo > numberOne) {
        console.log("El número más alto es:", numberTwo);
    } else {
        console.log("Ambos números son iguales:", numberOne);
    }
}

greaterNumber(10, 20);
greaterNumber(50, 15);
greaterNumber(7, 7);