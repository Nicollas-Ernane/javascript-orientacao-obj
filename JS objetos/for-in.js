const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '01245678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55119999999', '5511999998'],
    enderecos: [{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    },
    {
        rua: 'Rua Dona Claudia',
        numero: '71',
        complemento: null
    }]
}

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}

