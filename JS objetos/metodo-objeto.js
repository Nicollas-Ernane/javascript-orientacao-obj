const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '01245678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55119999999', '5511999998'],
   // enderecos: [{
      //  rua: 'Rua Joseph Climber',
      //  numero: '45',
     //   complemento: 'apto 43'
   // },
   // {
    //    rua: 'Rua Dona Claudia',
    //     numero: '71',
 //       complemento: null
//    }]
}

const chavesObjeto = Object.keys(estudante)
console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('è necessario  ter um endereço cadastrado');
}