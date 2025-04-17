let numeros = [10, 5, 2];

function add(){
    let campoTexto = document.getElementById("areaTexto");

    let valor = parseInt(campoTexto.value);

    if(campoTexto.value == "" || campoTexto.value == " "){
        window.alert("Nenhum valor foi digitado");
    }else if(numeros.indexOf(valor) != -1){
        window.alert("este valor já foi adicionado");
    }else{
        numeros.push(valor);
        console.log(numeros);
    }
}

function ord(){
    numeros.sort(ordenarNum);
    console.log(numeros);
}

function ordenarNum(a,b){
    return a-b;
}