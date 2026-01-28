let produto = {
    descricao: 'Notebook',
    preco: 1800,
    detalhes: {
        //composicao tem um
        fabricante: 'abc',
        modelo: 'xyz'
    }
}

//let {descricao,preco} = produto;
let {descricao: d,preco: p, detalhes: {fabricante: f, modelo: m}} = produto;

console.log(d, p,f,m);