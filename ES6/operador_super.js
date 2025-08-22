class Animal{
    constructor(cor,tamanho,peso){
        this.cor = cor;
        this.tamanho = tamanho;
        this.peso = peso;
    }

    dormir(){
        console.log("Dormir");
    }
}

class Passaro extends Animal{
    constructor(bico,cor,tamanho,peso){
        super(cor, tamanho,peso);
        this.bico = bico;
    }

    voar(){
        console.log("Voar");
    }
}

class Papagaio extends Passaro{
    constructor(sabeFalar,cor,tamanho,peso){
        super('Médio',cor,tamanho,peso);
        this.sabeFalar = sabeFalar;
    }

    falar(){
        console.log("falar");
    }
}

let passaro = new Passaro();
let papagaio = new Papagaio(true,'Laranja',25,400);
let papagaio2 = new Papagaio(false,'Branco',10,80);

console.log(papagaio);
console.log(papagaio2);


