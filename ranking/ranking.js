//array objeto pra receber os jogadores e pontos
let jogadores = [
{nome: "Alice",pontuacao: 120},
{nome: "Bob",pontuacao: 130}
];

//criacao de novos jogadores
jogadores.push({nome: "João",pontuacao: 110});
jogadores.push({nome: "Eliseu",pontuacao: 180});

//criacao de variaveis pra cada jogador para  testes
let jogadorBob = jogadores.find(j => j.nome === "Bob");

let jogadorAlice = jogadores.find(j => j.nome === "Alice");

let jogadorJoao = jogadores.find(j=> j.nome ==="João");
jogadorJoao.pontuacao = 150;

let jogadorEliseu = jogadores.find(j => j.nome === "Eliseu");

//funcao pra criar o ranking
function visuRanking(){
    console.log("O Ranking atual é:")
    //.sort para ordernar os jogadores por seus pontos
    //utilizei funcao tipo arrow
    console.log(jogadores.sort((a, b) => b.pontuacao - a.pontuacao),"\n");
    return;
}
visuRanking();

//funcao pra calcular a media de pontos total
function mediaScore(){
    let media = 0;//var pra calc de media
    let soma = 0;//var pra somar os pontos
    for(let i=0; i<jogadores.length;i++){
        soma += jogadores[i].pontuacao;
    }

    media = soma/jogadores.length;//calc de media

    console.log(`A média de pontuação entre os jogadores foi: ${media} \n`);
    return;
}
mediaScore();

//funcao pra ver qual o melhor jogador
function melhorJogador(){
    let melhorPonto = 0;//var pra receber melhor ponto
    let nomeMelhor;//receb o nome do melhor jogador

    /*laço pra navegar dentro da array objeto
    e encontrar melhor pontuacao e  o nome do dono dela
    */
    for (let i=0; i<jogadores.length; i++){
        if(jogadores[i].pontuacao > melhorPonto){
            melhorPonto = jogadores[i].pontuacao;
            nomeMelhor = jogadores[i].nome;
        }
    }

    console.log(`O melhor jogador é: ${nomeMelhor} com ${melhorPonto} pontos!`);
    return;
}
melhorJogador();

// fim //
