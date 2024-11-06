function retornaFuncao() {
    const nome =  'Suzana';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.dir(funcao);