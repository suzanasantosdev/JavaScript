// factory function (funcao fabrica)
// constructor function (funcao construtora)
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Suzana', 'Santos', 1.7, 60);
console.log(p1.imc());
const p2 = criaPessoa('David', 'Monteiro', 1.77, 85);
console.log(p1. fala('Falando sobre JS'));
console.log(p2.imc());
