let listaFuncionarios= ["Viviane", "Rosangela", "Miguel", "Lucas", "Fernanda"];

listaFuncionarios.forEach(function(valor,indice,array){
    console.log(indice);
    console.log(valor);

    if(valor=='Lucas'){
        array[indice]='Gabriel'
    }
    console.log(array);
})