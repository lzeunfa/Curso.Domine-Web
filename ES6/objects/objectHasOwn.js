class Pessoa{
    id = null;
}

class PessoaFisica extends Pessoa{
    nome = 'Eliseu';
}

class PessoaJuridica extends Pessoa{
    razaoSocial = 'Homem lindo';
}

const pessoaF = new PessoaFisica();
const pessoaJ = new PessoaJuridica();

console.log(pessoaF, pessoaJ);

console.log(Object.hasOwn(pessoaF,'id')); //true
console.log(Object.hasOwn(pessoaJ,'nome')); //false