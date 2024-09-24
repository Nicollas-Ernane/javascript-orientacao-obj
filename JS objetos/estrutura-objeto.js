const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '01245678901',
    turma: 'JavaScript'
}

console.log(estudante.nome);
console.log(`o nome do estudante é ${estudante.nome}`);
console.log(`os três primeiro números do cpf são ${estudante.cpf.substring(0, 3)}`);