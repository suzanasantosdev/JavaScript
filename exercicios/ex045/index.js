// try {
//     // e executada quando nao ha erros
// } catch (e) {
//     // e executada quando ha erros
// } finally {
//     // sempre
// }

/*------------------------------------------------------------*/
// try {
//     console.log('Abri um arquivo');
//     console.log('Manipulei o arquivo e gerou erro');
//     console.log('Fechei o arquiavo');

//     try {
//         console.log(b);
//     } catch(e) {
//         console.log('Deu erro');
//     }
// } catch (e) {
//     console.log('Tratando o erro');
// } finally {
//     console.log('FINALLY: Eu sempre sou executado');
// }

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instancia de Date.'); 
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

try {
const data = new Date('07-12-1999 23:55:15');    
const hora = retornaHora();
console.log(hora);
} catch(e) {
    // Tratar erro
} finally {
    console.log('Tenha um bom dia.');
}