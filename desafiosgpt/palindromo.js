let palavraInserida = "aoa";
let palavraMaiusc = palavraInserida.toUpperCase();

//split transforma a string em array
//reverse inverte a ordem
//join ("") junta tudo dee novo em uma string
let resultado = palavraMaiusc.split("").reverse().join("");

if(palavraMaiusc === resultado){
    console.log(`A palavra ${palavraInserida} é um palíndromo`);
}else{
    console.log(`A palavra ${palavraInserida} não é um palíndromo`);
}