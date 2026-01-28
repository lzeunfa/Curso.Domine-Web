let teste1 = null || 'valor a direita';
let teste2 = 0 || 'valor a direita';
let teste3 = undefined || 'valor a direita';
let teste4 = '' || 'valor a direita';
let teste5 = 'Valor a esquerda' || 'valor a direita';

console.log(teste1);
console.log(teste2);
console.log(teste3);
console.log(teste4);
console.log(teste5);

console.log('-----------------');

//operador nullish coalescing
teste1 = null ?? 'valor a direita';
teste2 = 0 ?? 'valor a direita';
teste3 = undefined ?? 'valor a direita';
teste4 = '' ?? 'valor a direita';
teste5 = 'Valor a esquerda' ?? 'valor a direita';

console.log(teste1);
console.log(teste2);
console.log(teste3);
console.log('teste 4:'+teste4);
console.log(teste5);