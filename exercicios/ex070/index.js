// const pessoa = {
//     nome: 'Suzana',
//     sobrenome: 'Santos'
// };
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

const pessoa1 = new Object();
pessoa1.nome = 'Suzana';
pessoa1.sobrenome = 'Santos';
pessoa1. falarNome = function() {
    console.log(`${this.nome} esta falando seu nome.`);
}

pessoa1.falarNome();