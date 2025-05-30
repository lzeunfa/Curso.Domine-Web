let altura;
let largura;
let vidas = 1;
let tempo = 10;
let criaMosquitoTempo = 1500;


let nivel = window.location.search;

nivel = nivel.replace('?', '');

if(nivel === 'normal'){
    criaMosquitoTempo;
}else if(nivel === 'dificil'){
    criaMosquitoTempo = 1000;
}else if(nivel==='chucknorris'){
    criaMosquitoTempo = 750;
}

function ajustarTamanhoPalcoJogo(){
    altura = window.innerHeight - 90;
    largura = window.innerWidth - 90;
    //console.log(altura,largura);
}
ajustarTamanhoPalcoJogo();

let cronometro = setInterval(function(){
    tempo -=  1;
    if(tempo<=0){
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = 'vitoria.html';
    }
    document.getElementById('cronometro').innerHTML = tempo;
    
},1000);

function posicaoRandomica(){
    //remover mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        
        if(vidas>3){
            window.location.href = 'fim_de_jogo.html';
        }else{
            document.getElementById('V'+ vidas).src = 'imagens/coracao_vazio.png';
        }
        

        vidas++;
    }

    let posicaoX = Math.floor(Math.random() * largura);
    let posicaoY = Math.floor(Math.random() * altura);

    posicaoX = posicaoX <0 ? 0 : posicaoX;
    posicaoY = posicaoY <0 ? 0 : posicaoY;

    //criar elemento html
    let mosquito = document.createElement(`img`);
    mosquito.src = `imagens/mosca.png`;
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function(){
        this.remove();
    }

    document.body.appendChild(mosquito);
}


function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);

    switch (classe){
        case 0:
            return 'mosquito1';

        case 1:
            return 'mosquito2';

        case 2:
            return 'mosquito3';
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);

    switch (classe){
        case 0:
            return 'ladoA';

        case 1:
            return 'ladoB';
    }
}




