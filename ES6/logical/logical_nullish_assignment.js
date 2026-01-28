let v1 = 10;
let v2 = null; //nula ou undefined

//se fo valor for nulo ou undefined ele é substituido por um novo valor
v1 ??= 50;
v2 ??= 100;

console.log(v1);
console.log(v2);

//-------------

let carro = {
    marca: 'Volkswagen'
};

carro.modelo ??= 'Golf GTI 2020';

console.log(carro);

//---------

let arr = ["Carro","Avião","Moto", null, "Jetski", undefined];

arr.forEach((automovel,indice) =>{
    arr[indice]??= 'Acabou';
    console.log(arr[indice] + automovel);
});

console.log(arr);