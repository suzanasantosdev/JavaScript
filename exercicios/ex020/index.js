/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol)

Referencia (mutavel) - array, object, function
*/
const a = {
    nome: 'Suzana',
    sobrenome: 'Santos'
};
const b = {...a};

a.nome = 'Joao';
console.log(a);
console.log(b);

