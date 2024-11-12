// Funcao construtora -> objetos
// Funcao fabrica -> objetos
// Construtora -> Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('Suzana', 'Santos');
const p2 = new Pessoa('David', 'Monteiro');
p1.metodo();
