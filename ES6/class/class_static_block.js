class Agenda{
    #titulo = '';
    eventos = [];

    static config = {}
    static #eventosRecorrentes = [];

    constructor(titulo,eventos){
        this.#titulo = titulo;
        this.eventos = eventos;

    }

    static{
        console.log('Executado bloco estatico');
    }

    static {
        this.config = {
            tema: 'dark',
            visualizacao: 'mensal'
        }
    }

    static {
        this.#eventosRecorrentes.push('Feriado 1');
    }

    static get eventosRecorrentes(){
        return this.#eventosRecorrentes;
    }
}

const agenda1 = new Agenda ('Cliente 1', ['X', 'Y']);

console.log(agenda1);
console.log(Agenda.config);
console.log(Agenda.eventosRecorrentes);