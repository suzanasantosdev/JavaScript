// argumentos que sustenta todos os argumentos enviados


// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
    
//     }

//     console.log(total, a, b, c);
// }
// funcao( 1,2,3,4,5,6,7,8,9,10);


// function funcao(a, b = 2, c = 4) {
//     console.log(a + b + c);
// }
// funcao(2, 10, 20);

function funcao({nome,sobrenome,idade}) {
    console.log(nome,sobrenome,idade);
}
funcao({nome:'Suzana', sobrenome:'Santos', idade: 24});