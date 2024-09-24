const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '01245678901',
    turma: 'JavaScript'
}

estudante.nome //José

function exibeInfoEstudante(objsEstudante, InfoEstudante) {
    return objsEstudante[InfoEstudante];
}

console.log(estudante.pet);
console.log(estudante['pet']);

console.log(estudante['nome']);
console.log(estudante['cpf']);

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));