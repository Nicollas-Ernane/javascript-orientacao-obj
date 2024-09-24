const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '01245678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55119999999', '5511999998'],
    endereco: [{
     rua: 'Rua Joseph Climber',
     numero: '45',
     complemento: 'apto 43'
    }]
}

estudante.endereco.push({
    rua: 'Rua Dona Claudia',
    numero: '70',
    complemento: null
})


//console.log(estudante.endereco);
//console.log(estudante.endereco[1]);

const listaEnderecosComplemento = estudante.endereco.filter((endereco) => endereco.complemento)

console.log(listaEnderecosComplemento);
