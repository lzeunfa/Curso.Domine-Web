let obj1 = {
    nome: 'Eliseu',
    profissao: 'DevWeb'
};

let obj2 = {
    nome: 'Heloisa',
    profissao: 'CyberSecurity'
};

let objs = [obj1,obj2];

console.log('Original');
objs.map((value,index) => console.log(index,value));

obj2.nome = 'Arthur';
obj2 = null;
objs[1].nome = 'Jorge';

console.log('Resultado');
objs.map((value,index) => console.log(index,value));


