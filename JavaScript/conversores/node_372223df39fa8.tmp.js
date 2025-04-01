let numDecimal = 110; // numero decimal para ser convertido

let numDecimalFixo = numDecimal

let arrayBinario = []; // array para armazenar o número binário
let expoente = 0; // expoente
let baseTotal = 2 ** expoente; // calculo das bases binarias
let numResto = numDecimal; // resto do numero a ser processado
let ciclo = 1; // contagem dos ciclos da repetiçao

function convertendoDec_Bi(){
    while (numResto > 0) { // enquanto ter numero a ser convertido

        // reiniciar valores para o cálculo
        expoente = 0;
        baseTotal = 2 ** expoente;
    
        // determina o maior valor de baseTotal menor ou igual ao numResto
        while (baseTotal <= numResto) {
            expoente++;
            baseTotal = 2 ** expoente;
        }
    
        // ajusta o expoente para o valor correto (última base válida) se nao ele acaba ficando maior
        expoente--;
        baseTotal = 2 ** expoente;
    
        // inicializa o arrayBinario apenas no primeiro ciclo
        if (ciclo === 1) {
            arrayBinario = new Array(expoente + 1).fill("0"); // cria a array com zeros
        }
    
        // marcar o "1" na posição correspondente
        arrayBinario[arrayBinario.length - 1 - expoente] = "1";
    
        // atualizando o numResto e ciclo
        numResto -= baseTotal;
        ciclo++;
    }
    
    // converte a arrayBinario em uma string pra mostar o numero binario formado
    let numBinario = arrayBinario.join(""); // junta os elementos da array em uma string
    
    console.log(`O número ${numDecimalFixo} em binário é: ${numBinario}`);

    return;
}
convertendoDec_Bi();
