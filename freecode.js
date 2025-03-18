/*let nomes = [`Heloa`, `Eliseu`, `Heloisa`];

    console.log(nomes.length-1);

    nomes.push(`Enri`);

    console.log(nomes);

let num = 0;
let tamanho = nomes.length-1;

console.log(tamanho);

var count = 0;

while (count<=tamanho){
    console.log(nomes[count], count, `\n`);
    count = count + 1;
}*/

/*const character = "#";//as hashtags para a pirâmide

const count = 8; //contador de linhas

const rows = []; //array para receber os resultados

function padRow (rowNumber, rowCount){//rowwNumber é o número da linha atual e o rowCount é o total de linhas da pirâmide
    return " ".repeat(rowCount-rowNumber) + character.repeat(2*rowNumber-1) + " ".repeat(rowCount-rowNumber)// o nmr de caracteres # depende do nmr da linha
}

for (let i = 0; i<count; i+=1){
    rows.push(padRow(i+1, count))//adiciona cada linha criada pela função padRow na lista rows.
                   //a parte acima é para jogar os valores para os parâmetros da function
}

let result = "";

for (const row of rows){
    result = result + row + "\n";
}

console.log(result);
*/

/*const tag = "*";

const count = 4;

const linhas =[];

function montLinhas(nmLinhas,countLinhas){
    return " ".repeat(countLinhas-nmLinhas) + tag.repeat(2*nmLinhas-1) + " ".repeat(countLinhas-nmLinhas);
}

for(i = 0; i <count; i+=1){
    linhas.push(montLinhas(i+1,count));
}

var resultado = "";

for (const linha of linhas){
    resultado = resultado + linha + "\n";
}

console.log(resultado);
*/

function teste(nm1,nm2){
    return console.log(`${nm1} e ${nm2}`);
}

teste(10,20);


