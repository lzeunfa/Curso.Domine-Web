let num1 = "10"; //valor da variavel a ser jogada na function
num1 = parseInt(num1);

let num2 = "8";//valor da variavel a ser jogada na function
num2 = parseInt(num2);

let operacao = "Subtracao";//receber qual a operacao a ser feita

let resultado;//para rececber o resultado

function calculo(num1,num2,operacao){
    switch (operacao){//trocar para fazer os calculos de acordo com a operacao desejada
        case "Soma":
            resultado = num1 + num2;
            break;
        case "Subtracao":
            resultado = num1-num2;
            break;
    }

    return resultado;//a function retorna o resultado
}

console.log(`O resultado é: `+ calculo(num1,num2,operacao));//mostra o resultado