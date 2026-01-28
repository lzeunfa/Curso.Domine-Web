let Bicicleta1 = {
    cor: 'Branca',
    marcha: 'única',
    aro: 12,
    pedalar(){
        console.log('Método pedalar executado');
    }
}

let Bicicleta2 = {
    cor: 'Vermelha',
    marcha: '18',
    aro: 16,
    pedalar(){
        console.log('Método pedalar executado');
    }
}

console.log(Bicicleta1);
console.log(Bicicleta2);

let BicicletaFactory = function (cor,marcha,aro){
    return {
        cor,
        marcha,
        aro,
        pedalar(){
            console.log('Método pedalar executado');
        }
    }
}

let Bicicleta3 = BicicletaFactory('Roxa',18,26);
console.log(Bicicleta3);

let Bicicleta4 = BicicletaFactory('preta',20,29);
console.log(Bicicleta4);