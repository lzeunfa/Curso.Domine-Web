class Pessoa{
    #humor = 0;

    #mensagens = ['Estou bem', 'Não fale comigo!'];

    constructor(nome){
        this.#mudarHumor();
        this.nome = nome;
    }

    dizerOi(){
        return `Olá meu nome é ${this.nome}`;
    }

    getHumor(){
        return this.#humor;
    }

    #mudarHumor(){
        this.#humor = Math.floor(Math.random() *2);
    }

    getMensagem(){
        return this.#mensagens[this.#humor];
    }
}

let pessoa = new Pessoa('Eliseu');
console.log(pessoa.dizerOi());
console.log(pessoa.getMensagem());