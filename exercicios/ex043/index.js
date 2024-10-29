// Escreva uma funcao chamada  ePaisagem que 
// recebe dois argumentos, largura e altura de uma imagem (number).
// retorne true se a imagem estiver no modo paisagem.

function ePaisagem(largura, altura) {
    return largura > altura;
}

console.log(ePaisagem(1920, 1080));