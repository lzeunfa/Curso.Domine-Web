//contexto rest

function soma(...param){
    let resultado = 0;
    console.log(param);
    param.forEach(v => resultado += v);
    return resultado;
}
console.log(soma(3,8,5,7,-8,-5));

function multiplicador(m,...p){
    console.log(m);
    let resultado = 0;
    console.log(p);

    p.forEach(v => resultado += m * v);
    return resultado;

}
console.log(multiplicador(5,7,12,3,49));