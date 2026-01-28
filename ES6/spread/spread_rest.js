let tituloArtigo = "Como utilizar o operador rest/spread";

console.log(tituloArtigo);


let listaCursos1 = ["NodeJS e MongoDB", "ES6, typescript e Angular 4"];
let listaCursos2 = ["Multiplataforma and/ios", "intro ao gnu/linux"];
let listaCursosCompleto = ["Web completo", ...listaCursos1, ...listaCursos2];

console.log(listaCursosCompleto);

let pessoa = {
    nome: 'João',
    idade: 27
}

let clone = {
    endereco: 'Rua abc',
    ...pessoa
}

console.log(clone);