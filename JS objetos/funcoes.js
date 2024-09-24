const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '01245678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['55119999999', '5511999998'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}
console.log('oi');
console.log(estudante.estaAprovado(7));