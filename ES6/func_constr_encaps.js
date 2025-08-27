let Carro = function(){
    this.cor = "Amarelo";
    this.modelo = "Chevette";
    this.velocidadeAtual = 0;
    this.velocidadeMaxima = 180;

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual()+ 50;
        
        if(velocidade> this.velocidadeMaxima){
            velocidade = this.velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual;
    }
}

let carro = new Carro();
console.log(carro.velocidadeAtual);
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.acelerar();
carro.velocidadeMaxima = 200;
carro.acelerar();
carro.acelerar();
console.log(carro.velocidadeAtual);

let Carro2 = function(){
    var velocidadeMaxima = 180;
    var kmRodados = 0;

    this.cor = "Amarelo";
    this.modelo = "Chevette";
    this.velocidadeAtual = 0;

    this.acelerar = function(){
        let velocidade = this.getVelocidadeAtual()+ 50;
        
        if(velocidade> velocidadeMaxima){
            velocidade = velocidadeMaxima;
        }
        this.setVelocidadeAtual(velocidade);

        setKMRodados(0.07);
        console.log(kmRodados);
    }

    this.getVelocidadeAtual = function(){
        return this.velocidadeAtual;
    }

    this.setVelocidadeAtual = function(velocidadeAtual){
        this.velocidadeAtual = velocidadeAtual;
    }

    var setKMRodados = function(q){
        kmRodados += q;
    }
}

let carro2 = new Carro2();

carro2.velocidadeMaxima = 200;
console.log(carro2.velocidadeAtual);
carro2.acelerar();
carro2.acelerar();
carro2.acelerar();
carro2.acelerar();
console.log(carro2.velocidadeAtual);
