// try {
//     console.log(naoExisto);
// }    catch(erro) {
//     console.log('naoExisto nao existe.');
//     console.log(erro);
// }

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser numeros.');
    }

    return x + y;
}

console.log(soma(1, 2));
console.log(soma('1', 2));