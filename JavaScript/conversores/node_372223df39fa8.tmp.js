let numDecimal = 18;

let arrayBinario = [];

let expoente = 0;

let baseTotal = 2**expoente;

let numResto = 1;

let posicaoDo1 = 0;

let ciclo = 1;

while(numResto>0){ //inicio

    expoente = 0;
    baseTotal = 2**expoente;

while(baseTotal<=numDecimal/2){
    if(ciclo==1){
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








