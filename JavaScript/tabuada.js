let numEscolhido = 9;
let tabuada = [];

console.log(`A tabuada de ${numEscolhido} é:`);
for(let i=1;i<=10;i++){
    let calculo = i*numEscolhido;
    tabuada.push(calculo);
}
console.log(tabuada);