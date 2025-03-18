/*function calcAreaTerreno(comprimento, largura, altura,base){
    let area;
    switch(opcao){
        case 1:
            //pra caso for um quadrado
            area = comprimento**2;
            break;
        case 2:
            //pra caso for um retangulo
            area = comprimento*largura;
            break;
        case 3:
            //pra caso seja um triângulo
            area = (base*altura)/2;
            break;
        default:
            console.log(`Error`);
            area = "(valor não encontrado)";
            break;
    }

    return console.log(`Sua àrea é de ${area} metros`);
}

const opcao = 2;
calcAreaTerreno(10,4,8,5);
*/

/*
function soma(a,b){
    return a+b;
}

console.log(soma(7,7));
console.log(soma(7,7,1));
console.log(soma(7))//= not a number;
*/

    //Funções anônimas e wrapper
/*
var exibirMsg = function(nome){
    console.log(`Olá ${nome}, está tudo bem?`);
}

exibirMsg('Jorge');
*/



    //function de call back
/*
function exibirArtigo(id,callBackSucesso,callBackErro){
    //lógica recuperar id via requisição http
    if(true){
        callBackSucesso("Funções de callback em JS","Funções de callback são muito utilizadas");
    }else{
        callBackErro("Erro ao recuperar os dados");
    }
}

    //técnica de wrapper onde uma variavel embrulha uma function
var callBackSucesso = function(titulo,descricao){
    console.log(`${titulo} ${descricao}`);
};

var callBackErro = function(erro){
    console.log(`${erro}`);
};


exibirArtigo(1, callBackSucesso, callBackErro);
*/


    //Funções nativas string
    //propriedade tem na w3schools js string reference
/*
var nome = "Arthur Nóbrega Chacon";
console.log(nome.length);
console.log(nome.charAt(6));
console.log(nome.indexOf("r"));
console.log(nome.replace("Nóbrega", "José"));
console.log(nome.substring(5,12));
console.log(nome.slice(10));
*/

    //Funções nativas matematicas
/*
let x = Math.ceil(10.300);
console.log(x);

let y = Math.floor(10.300);
console.log(y);

let z = Math.round(10.500);
console.log(z);

let a = Math.random();
console.log(a);
*/

    //Funções nativas para manipular datas
let data = new Date();
//console.log(data.getDate() + "/" + (data.getMonth()+1) + "/" + (data.getFullYear()));
/*console.log(data.toString());
data.setMonth(data.getMonth()+1);
data.setHours(data.getHours()+1);
console.log(data.toString());
*/

let data1 = new Date(2025,2,25);
let data2 = new Date(2025,2,18);

console.log(data1.getTime());
console.log(data2.getTime());
console.log(Math.abs(data1.getTime()) - Math.abs(data2.getTime()));
console.log(`Calculo de quantos milissegundos tem em um dia: ` + (1*24*60*60*1000));
console.log(`Então faltam: ` + ((Math.abs(data1.getTime()) - Math.abs(data2.getTime()))/86400000) + ` dias`);


