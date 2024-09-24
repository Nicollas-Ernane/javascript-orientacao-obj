const estudante = require('./estudante.json');

const stringEstudante = JSON.stringify(estudante);
//console.log(stringEstudante);
//console.log(typeof stringEstudante);

// console.log(estudante.nome);
const objsEstudante = JSON.parse(stringEstudante);
console.log(objsEstudante);
console.log(typeof objsEstudante);
console.log(objsEstudante.nome);