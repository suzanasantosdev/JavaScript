// return
// retorna um valor
// termina a funcao
/*------------------------------------------------------------------------------ */
// function soma(a, b) {
//     return a + b; 
// }

// console.log(soma(5, 2));

/*------------------------------------------------------------------------------- */

// function criaPessoa(nome, sobrenome) {
//     return {nome, sobrenome};
// }

// const p1 = criaPessoa('Suzana', 'Santos');
// const p2 = {
//     nome: 'David',
//     sobrenome: 'Monteiro'
// };

// console.log(p1);
// console.log(p2);


function criaMultiplicador(multiplicador) {
    // multiplicador
    return function(n) {
      return n * multiplicador;
    };
}
    
    const duplica = criaMultiplicador(2);
    const triplica = criaMultiplicador(3);
    const quadriplica = criaMultiplicador(4);
    
    console.log(duplica(3));
    console.log(triplica(2));
    console.log(quadriplica(10));