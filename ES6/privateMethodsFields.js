class Carro{
    modelo = 'Golf';
    ano = 2014;
    #dono = 'Eliseu';

    #infosCarro(){
        return `${this.#dono}`;
    }

    modeloAno(){
        return `${this.modelo} ${this.ano}`;
    }
}

const carro = new Carro();
console.log(carro.modeloAno());
console.log(carro.dono);
console.log(carro.infosCarro());