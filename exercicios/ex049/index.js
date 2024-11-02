// Declacao de funcao (function hoistring)

falaOi();

function falaOi() {
    console.log('Oi');
}

// First-class objects (objetos de primeira classe)
// function expression
const souUmDado = function () {
    console.log('Sou Um dado.');
};
souUmDado();

// function executaFuncao(funcao) {
//     console.log('Vou executar sua funcao abaixo:');
//     funcao();
// }
// executaFuncao(souUmDado)

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function () {
        console.log("Estou falando...");
    }
};
obj.falar();