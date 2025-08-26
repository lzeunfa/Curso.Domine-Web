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

class Avestruz extends Passaro{
    constructor(){
        super("Grande","Branco e preto",250,15000);
    }

    enterrarCabeca(){
        console.log("enterrar cabeça");
    }

    voar(){
        console.log("Não voa");
    }
}


let passaro = new Passaro();

let papagaio = new Papagaio(true,'Laranja',25,400);
papagaio.voar();

let avestruz = new Avestruz();
avestruz.enterrarCabeca();
avestruz.voar();