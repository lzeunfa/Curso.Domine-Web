let nome = "Jorge";
let idade = 29;
let sexo = "masculino";
let profissao = "programador";

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`);
    }
}

console.log(objeto);
objeto.exibirResumo();

let objeto2 = {
    nome,
    idade,
    sexo,
    profissao,
    exibirResumo(){
        console.log(`${this.nome}, ${this.idade} anos, ${this.sexo}, ${this.profissao}`);
    }
}

console.log(objeto2);
objeto2.exibirResumo();

objeto2.nome = "Eliseu";
objeto2.habilidades = "HTML CSS JS BOOTSTRAP";
console.log(objeto2);
