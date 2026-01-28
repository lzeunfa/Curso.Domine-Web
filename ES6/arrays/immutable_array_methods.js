const numeros = [ 1,2,7,3,5,6];
console.log(numeros);

//toReversed reverte sem alterar o  original ao contrario do .reverse
const arrayInvertido = numeros.toReversed();
console.log(numeros);
console.log(arrayInvertido);

//toSorted reverte sem alterar o  original ao contrario do .sort
const arrayOrd = numeros.toSorted();
console.log(numeros);
console.log(arrayOrd);

//toSpliced reverte sem alterar o  original ao contrario do .spliced
const arrFatiado = numeros.toSpliced(1,3);
console.log(numeros);
console.log(arrFatiado);

const arrAlterado = numeros.with(3,20); //indice e valor
console.log(numeros);
console.log(arrAlterado);