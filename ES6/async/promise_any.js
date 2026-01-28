const p1 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject('P1 resolvida');
    }, 4000);

});

const p2 = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        reject('P2 resolvida');
    }, 3000);

});

//retorna a primeira promise a res resolvida
let promises = [ p1,p2];
Promise.any(promises)
    .then((resolvida) =>{
        console.log(resolvida);
    })
    .catch((erro)=>{
        console.log(erro);
    });