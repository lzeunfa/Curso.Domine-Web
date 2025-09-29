function* conversar(){
    let opcao = yield 'E ai, tudo bem?';

    console.log(opcao);
    
    yield 'Ixi!';

    opcao = yield 'Quer ajuda com algo?';

    console.log(opcao);

    yield 'Sai fora';
}

let conversa = conversar();

function acao(resposta,resposta2){
    let iteracao = conversa.next();
    console.log(iteracao);

    iteracao = conversa.next(resposta);
    console.log(iteracao);

    iteracao = conversa.next(resposta);
    console.log(iteracao);

    iteracao = conversa.next(resposta2);
    console.log(iteracao);
}
acao('não','pega na minha e balanca');