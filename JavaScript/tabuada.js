let numEscolhido = 9;
let tabuada = [];
let i = 1

console.log(`A tabuada de ${numEscolhido} é:`);
while(i<=10){
    let calculo = i*numEscolhido
    tabuada.push(calculo);
    i++
}
console.log(tabuada);


/*
console.log(`A tabuada de ${numEscolhido} é:`);
for(let i=1;i<=10;i++){
    let calculo = i*numEscolhido;
    tabuada.push(calculo);
}
console.log(tabuada);
*/