let binario= "100011";//numero binario

let casasbi = 0;//saber quantos números tem o n binario

let posicaoDo1 = 0;//recebe a posicao da esquerda pra direito do 1


//quando for fazer os cálculos tem q passar pra Number oq é String

let posicaoReal = 0;//transforma na posicao real da direita pra esquerda apartir de 0 pra calcular o valor

var traduzindo = 0;
    //traduzindo += 2**posicaoReal; faz o calculo de 2 elevado a posicao real q se encontra (binarios tem base 2 e da direita pra esquerda vai de ...2^3 2^2 2^1 0)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    while(binario.indexOf("1"!= -1)){
        casasbi = binario.length;//saber quantos números tem o n binario
        casasbi = parseInt(casasbi);

        posicaoDo1 = binario.indexOf("1");//recebe a posicao da esquerda pra direito do 1
        console.log(posicaoDo1);
        posicaoDo1 = parseInt(posicaoDo1);

        posicaoReal = casasbi - posicaoDo1 -1;//transforma na posicao real da direita pra esquerda apartir de 0 pra calcular o valor
        console.log(posicaoReal);

        traduzindo += 2**posicaoReal;//faz o calculo de 2 elevado a posicao real q se encontra (binarios tem base 2 e da direita pra esquerda vai de ...2^3 2^2 2^1 0)
        console.log(traduzindo);

        binario = binario.substring(0, posicaoDo1) + "0" + binario.substring(posicaoDo1 + 1);
        console.log(binario);
    }

    let numeroDecimal = traduzindo;
    console.log(numeroDecimal);


