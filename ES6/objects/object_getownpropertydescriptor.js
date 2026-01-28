
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

console.log(obj);

//descritores de propriedades
console.log(Object.getOwnPropertyDescriptors(obj));

/*descriptor writable = flase, o valor da proriedade nao pode ser modificada
Object.defineProperty(obj,'nome',{
    value: 'eliseu',
    writable: false
})
    */

/*descriptor enumerable = false, a propriedade em questao nao e exbibida em laços de repeticao
Object.defineProperty(obj,'hobbies',{
    enumerable: false
});
    

console.log(Object.getOwnPropertyDescriptors(obj));

for(let prop in obj){
    console.log(prop, obj[prop]);
}*/

//descriptor configurable = false, indica que a propriedade nao pode ser deletada nem modificar os descritores, exceto writable para false
Object.defineProperty(obj,'pais',{
    configurable: false
});
    

console.log(Object.getOwnPropertyDescriptors(obj));


