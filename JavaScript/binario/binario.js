let binario= "1";//numero binario
    binarioOriginal = binario;

let casasBi = 0;//recebe quantos números tem o num binario

let posicaoDo1 = 0;//recebe a posicao da esquerda pra direito do 1


//quando for fazer os cálculos tem q passar pra Number oq é String

let posicaoReal = 0;//recebe a posicao real da direita pra esquerda apartir de 0 pra calcular o valor

var traduzindo = 0;
    //traduzindo += 2**posicaoReal; faz o calculo de 2 elevado a posicao real q se encontra (binarios tem base 2 e da direita pra esquerda vai de ...2^3 2^2 2^1 0)

function convertendoBi(){
    while(binario.indexOf("1")!= -1){
        casasBi = binario.length;//saber quantos números tem o n binario
        casasBi = parseInt(casasBi);

        posicaoDo1 = binario.indexOf("1");//recebe a posicao da esquerda pra direito do 1
        posicaoDo1 = parseInt(posicaoDo1);

        posicaoReal = casasBi - posicaoDo1 -1;//transforma na posicao real da direita pra esquerda apartir de 0 pra calcular o valor

        traduzindo += 2**posicaoReal;//faz o calculo de 2 elevado a posicao real q se encontra (binarios tem base 2 e da direita pra esquerda vai de ...2^3 2^2 2^1 0)

        binario = binario.substring(0, posicaoDo1) + "0" + binario.substring(posicaoDo1 + 1);
    }

    let numeroDecimal = traduzindo;
    console.log(`O número binário ${binarioOriginal} em decimal é: ${numeroDecimal}`);

    return;
}
convertendoBi()

    


