// IIFE -> Immediately invoked function expression


/* (function() {
    const nome = 'Suzana';
    console.log(nome);
}) ();

const nome = 'qualquer coisa'; */


(function(idade, peso, altura) {

    const sobrenome = 'Santos';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Suzana'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);