let numDecimal = 18;

let baseTotal = 2;

let arrayBinario = [];

let expoente = 0;

let numResto = 1;

let posicaoDo1 = 0;

let ciclo = 1;

while(numResto!=0){

while(baseTotal<= numDecimal/2){
    arrayBinario.push(expoente);

    arrayBinario[expoente] = "0";

    baseTotal = 2**expoente;

    console.log(`valor base total ${baseTotal} e o valor do expoente ${expoente}`)

    expoente++;
}

numResto = numDecimal-baseTotal;

if(numResto==0 && ciclo==1){
    arrayBinario[0] = "1";
}else{
    arrayBinario[arrayBinario.length-expoente] = "1";
    
}

ciclo++
}

console.log(arrayBinario);








