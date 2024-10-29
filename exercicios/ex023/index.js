/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/

//const expressaoAnd = true && true && false && true;
//const expressaoOr = false || false || false || false;

const usuario =  'Suzana';
const senha =     '123456';

//               True                     False
const vaiLogar = usuario === 'Suzana' && senha === '123456';
console.log(vaiLogar);