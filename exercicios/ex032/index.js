// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// [a,b,c] = [1,2,3];

// console.log(a,b,c);


              // 0 1 2 3 4 5 6 7 8
const numeros = [1000,2000,3000,4000,5000,6000,7000,8000,9000];
const [um, dois, tres, ...resto] = numeros;
console.log(um, dois, tres);

console.log(resto);