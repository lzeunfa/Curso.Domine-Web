class Filme{
    static proximoIdFilme = 1;

    constructor(titulo){
        this.titulo = titulo

        this.id = Filme.proximoIdFilme;
        Filme.proximoIdFilme++;
;    }

    static getProximoIdFilme(){
        return Filme.proximoIdFilme;
    }
}

const filme1 = new Filme('O pior vizinho do mundo!');
const filme2 = new Filme('Luta pela fé!');
console.log(filme1);
console.log(filme2);

console.log(Filme.proximoIdFilme);



/*class Carro{
    modelo = 'Golf';
    ano = 2014;
    static #dono = 'Eliseu';

    static infosCarro(){
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

console.log(Carro.infosCarro());*/