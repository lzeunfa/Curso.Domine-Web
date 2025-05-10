function contarVogais(texto){
    //regex e definições:
    //g = global, busca todos elementos da string
    /*i = case-insensitive para ignorar se é
    maiúscula ou minúscula*/
    let regex = /[aeiouáéíóúãõâêîôû]/gi;

    //retorna um array com as correspondencias encontradas
    let correspondencias = texto.match(regex);

    //usando operador ternário
    return correspondencias ? correspondencias.length : 0;
}

let frase = "Contando vogais com JS";
let totalVogais = contarVogais(frase);

console.log
(`O total de vogais da frase/palavra "${frase}" é: ${totalVogais}`);