/*
Suzana Santos tem 24 anos, pesa 54kg
tem 1.70 de altura e seu IMC é de 18.69,
ano de nascimento 1999
*/

const nome = 'Suzana';
const sobrenome = 'Santos';
const idade = 24;
const peso = 54;
const alturaEmM = 1.70;
let imc;
let anoNascimento;

imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos,pesa', peso,'kg.');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', imc);
console.log('e seu nascimento foi em',anoNascimento = 2024 - idade - 1,'.');
