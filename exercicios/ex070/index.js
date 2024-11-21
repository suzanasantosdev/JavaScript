// const pessoa = {
//     nome: 'Suzana',
//     sobrenome: 'Santos'
// };
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);



// Factory functions / Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this);
}

    const p1 = new Pessoa('David', 'Monteiro');
    const p2 = new Pessoa('Suzana', 'Santos');
    
    console.log(p1);
    console.log(p2);