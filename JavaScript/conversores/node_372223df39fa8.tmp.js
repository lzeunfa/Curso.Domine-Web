let numDecimal = 18;//recebe o numero decimal desejado pra conversão

let arrayBinario = [];//array para montar o numBinario

let expoente = 0;//expoente

let baseTotal = 2**expoente;//calculo das bases binarias

let numResto = 1;//resto da subtracao entre o numeroDecimal e a baseTotal

let posicaoDo1 = 0;//posicao onde vai ficar o 1

let ciclo = 1;//contagens ded ciclos da estrutura de repetição

while(numResto>0){ //inicio do programa

    //reestart nos valores
    expoente = 0;
    baseTotal = 2**expoente;

while(baseTotal<=numDecimal/2){//começo das conversões

    if(ciclo==1){//criação de quantas casas são necessárias pro array, quantidade fixa
        arrayBinario.push(expoente);
        arrayBinario[expoente] = "0";
    }

    baseTotal = 2**expoente;

    console.log(`valor base total ${baseTotal} e o valor do expoente ${expoente}`);

    expoente++;
}

numResto = numDecimal-baseTotal;
numDecimal = numResto;

if(numResto==0 && ciclo==1){
    arrayBinario[0] = "1";
}else{
    arrayBinario[(arrayBinario.length-1)-expoente] = "1";
    console.log(arrayBinario.length);
}

ciclo++
}

let numBinario = "";

for (cont = 0; cont<=arrayBinario.length-1; cont++){
    numBinario += arrayBinario[cont];
}

console.log(`O número em binário é: ${numBinario}`);








