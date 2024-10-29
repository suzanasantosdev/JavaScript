const pessoa = {
    nome: 'Suzana',
    sobrenome: 'Santos',
    idade: 24,
    endereço: {
        rua:'Av Brasil',
        numero: 995
    }
};

// Atribuicao via desestruturacao
const { nome: teste = '', sobrenome } = pessoa;
console.log(teste, sobrenome);