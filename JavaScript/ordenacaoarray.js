let lista_frutas = [];
    lista_frutas[0] = "Banana";
    lista_frutas[1] = "Pêra";
    lista_frutas[2] = "Maçã";
    lista_frutas[3] = "Uva";

    console.log(lista_frutas);
    console.log(lista_frutas.sort());

let lista_numeros = [];
    lista_numeros[0] = 50;
    lista_numeros[1] = 10;
    lista_numeros[2] = 40;
    lista_numeros[3] = 5;
    lista_numeros[4] = 12;

    console.log(lista_numeros.sort(ordenandoNumeros));

function ordenandoNumeros(a,b){
    return a-b;
}