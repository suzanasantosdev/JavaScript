// For in -> le os indices ou chaves do objeto

//                0       1       2
const pessoa = {
    nome: 'Suzana',
    Sobrenome: 'Santos',
    Idade: 24
};

for (let chave in pessoa ) {
    console.log(chave, pessoa[chave]);
}
// for (let indice in frutas) {
//     console.log(frutas[indice]);
// }

// for (let i = 0; i < frutas.length; i ++) {
//     console.log(frutas[i]);
// }
