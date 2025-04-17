let objetos = ["Cadeira", "Impressora", "Garfo"];//array

function add(){
    let campoTexto = document.getElementById("areaTexto");//recebe o input

    let digitado = campoTexto.value;//recebe o valor do input

    //avalia se o campo esta vazio
    if(campoTexto.value == "" || campoTexto.value == " "){
        window.alert("Informe um valor válido");
    
    //verifica se o valor ja existe no array se existir o alert é emitido
    }else if(objetos.indexOf(digitado) != -1){
        window.alert("O objeto já foi adicionado");

    //se nao existir ele add na array e limpa o campo
    }else{
        objetos.push(digitado);
        console.log(objetos);
        campoTexto.value = "";
    }
    
}

//realiza a ordenação em ordem alfabetica dos elementos do array
function ord(){
    objetos.sort();
    console.log(objetos);
}