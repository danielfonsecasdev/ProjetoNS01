let listaNumerosSorteados = [];
let numeroLimite = 10;
function exibirNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto 
}

function mensagemInicial(){
    exibirNaTela('h1', 'Bem Vindo ao jogo do Numero Secreto');
    exibirNaTela('p', `Fale um numero de 1 à ${numeroLimite}.`);
}

mensagemInicial();

function gerarNumeroAleatorio(){
    let quantidadeDeNumerosNaLista = listaNumerosSorteados.length;
    let numeroSorteado = parseInt(Math.random()*numeroLimite+1);

    if (quantidadeDeNumerosNaLista == numeroLimite){
        listaNumerosSorteados=[];
    }
    if (listaNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    } 
}


let numeroDeTentativas = 1;

let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

function verificarChute(){
let chute = document.querySelector('input').value;

    if(chute>numeroSecreto){
        exibirNaTela('p', `O numero secreto é menor que ${chute}`);
        numeroDeTentativas++;
        limparCampo();
    } else {
        if( chute<numeroSecreto){
            exibirNaTela('p', `O numero secreto é maior que ${chute}`);
            numeroDeTentativas++;
            limparCampo();
        } else{
            let palavraTentativa = numeroDeTentativas>1?'tentativas':'tentativa';
            exibirNaTela('p', `Você Acertou, com ${numeroDeTentativas} ${palavraTentativa}!`);
            exibirNaTela('h1', 'Você Venceu!');
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ('');
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroDeTentativas=1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

