const promise1 = new Promise((resolve,reject) =>{
    return setTimeout(()=>{
        resolve('Promise 1 resolvida');
    },2000);


});

const promise2 = new Promise((resolve,reject) =>{

    return setTimeout(()=>{
        reject('Promise 2 rejeitada');
    },2500);

});

const promises = [promise1, promise2];

Promise.allSettled(promises)
    .then((resultados) =>{
        resultados.forEach((resultado) =>{
            console.log(resultado.status);
        });
    });