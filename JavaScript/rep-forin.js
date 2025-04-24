/*let listaConvidados = ["Jorge","Jamilton","José", "Ana", "Maria"];

for ( let x in listaConvidados){
    console.log(listaConvidados[x]);
}*/

let lista = [];
lista[10] = 'Julio';
lista[true] = 'Roberto';
lista['a'] = "Amanda";
lista['zebra'] = "Caralho";

for ( let i in lista){
    console.log(lista[i]);
    switch (lista[i]){
        case "Amanda":
            console.log("Vamo caralhooooooo");
        break;
    }
}