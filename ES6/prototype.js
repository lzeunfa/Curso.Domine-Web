//aviao
//atributos cor e modelo; metodo levantarVoo

//objeto literal
let a1 = {
    cor: 'Branco',
    modelo:'Airbus a380',
    levantarVoo(){console.log('Levantar voo');}
}

//f construtora 
let aviaoF = function(){
    this.cor = 'Azul',
    this.modelo = 'Boeing 787',
    this.levantarVoo = function (){console.log('Levantar voo');}
}

let a2 = new aviaoF();

//classe

class AviaoC {
    constructor(){
        this.cor = "Vermelho";
        this.modelo = "Embraer";
    }

    levantarVoo(){
        console.log('Levantar voo');
    }
}

let a3 = new AviaoC();

console.log(a1);
console.log(a2);
console.log(a3);