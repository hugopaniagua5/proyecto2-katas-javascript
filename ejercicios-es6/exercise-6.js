const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

// 6.1 Suma de todas las notas con .reduce()
const totalScore = exams.reduce((accumulator, exam) => {
    return accumulator + exam.score;
}, 0);

console.log('6.1 Suma total de notas:', totalScore);

// 6.2 Suma de las notas de los alumnos aprobados (score >= 5) con .reduce()
const passedTotalScore = exams.reduce((accumulator, exam) => {
    if (exam.score >= 5) {
        return accumulator + exam.score;
    }
    return accumulator;
}, 0);

console.log('6.2 Suma de notas aprobadas:', passedTotalScore);

// 6.3 Media de las notas de todos los exámenes usando .reduce()
const averageScore = exams.reduce((accumulator, exam, index, array) => {
    accumulator += exam.score;
    // En la última iteración dividimos la suma entre la cantidad total de exámenes
    if (index === array.length - 1) {
        return accumulator / array.length;
    }
    return accumulator;
}, 0);

console.log('6.3 Media de notas:', averageScore);