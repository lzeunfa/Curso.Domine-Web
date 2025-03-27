let binario= "100011";//numero binario
    binarioOriginal = binario;

let casasBi = 0;

let posicaoDo1 = 0;

//quando for fazer os cálculos tem q passar pra Number oq é String

let posicaoReal = 0;

let convertendo = 0;

function convertendoBi(){
    while(binario.indexOf("1")!= -1){
        casasBi = binario.length;//saber quantos números tem o n binario
        casasBi = parseInt(casasBi);

        posicaoDo1 = binario.indexOf("1");//recebe a posicao da esquerda pra direito do 1
        posicaoDo1 = parseInt(posicaoDo1);

        posicaoReal = casasBi - posicaoDo1 -1;
        //transforma na posicao real da direita pra esquerda apartir de 0 pra calcular o valor

        convertendo += 2**posicaoReal;//faz o calculo de 2 elevado a posicao real q se encontra (binarios tem base 2 e da direita pra esquerda vai de ...2^3 2^2 2^1 0)

        binario = binario.substring(0, posicaoDo1) + "0" + binario.substring(posicaoDo1 + 1);
    }

    let numeroDecimal = convertendo;
    console.log(`O número binário ${binarioOriginal} em decimal é: ${numeroDecimal}`);

    return;
}
convertendoBi()


// parte para converter binarios pra decimais
let decimal = 65;

let i = 0;

let base = 2;

let valor = base**i;
console.log(valor)

while(valor<decimal){
    i ++;


}


function convertendoDec(){

}




