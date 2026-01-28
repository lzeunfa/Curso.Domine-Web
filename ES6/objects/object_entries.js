let obj ={
    nome: 'Eliseu',
    profissional: {
        site: 'github.io/lzeunf',
        profissao: 'devweb'
    },
    hobbies: [
        {id: 1, hobby: 'jogar'},
        {id: 2, hobby: 'cantar'}
    ],
    pais: 'Brasil'
}

console.log(Object.values(obj));
console.log(Object.entries(obj));