const verdadeira = true;

//let tem escopo de bloco {... bloco }
// var so tem escopo de funcao

let nome = 'Suzana'; // Criando
var nome2 = 'Suzana'; // Criando

if (verdadeira) {
    let nome = 'Suzana'; // Criando
    var nome2 = 'David'; // Redeclarando

    if (verdadeira) {
        var nome2 = 'Joao';
        let nome = 'Outra coisa';
    }
}

console.log(nome, nome2);