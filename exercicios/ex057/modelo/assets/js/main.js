function criaCalculadora() {
    return {
        display: document.querySelector(),

        inicia() {
            this.cliqueBotoes;
        },
        
        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
            }.bind());
        },
        btnParaDisplay(valor) {
            this.display
        }
    };
}




const calculadora = criaCalculadora();
calculadora.inicia();