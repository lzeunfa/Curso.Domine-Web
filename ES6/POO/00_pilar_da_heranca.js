class Animal{
    constructor(){
        this.cor = '';
        this.tamanho = null;
        this.peso = null;
    }

    dormir(){
        console.log("Dormir");
    }
}

class Cachorro extends Animal{
    constructor(){
        super();
        this.orelhas = "Grandes e caídas";
    }

    correr(){
        console.log("Correr");
    }

    rosnar(){
        console.log("Rosnar");
    }

}

class Passaro extends Animal{
    constructor(){
        super();
        this.orelhas = "Curto";
    }

    voar(){
        console.log("Voar");
    }
}

class Papagaio extends Passaro{
    constructor(){
        super();
        this.sabeFalar = true;
    }

    falar(){
        console.log("falar");
    }
}

let cachorro = new Cachorro();
let passaro = new Passaro();
let papagaio = new Papagaio();

console.log(cachorro);
console.log(passaro);

cachorro.dormir();
passaro.voar();
papagaio.dormir();
papagaio.voar();
cachorro.rosnar();
