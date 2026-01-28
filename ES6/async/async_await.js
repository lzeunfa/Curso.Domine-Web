let processoAssincrono = new Promise((resolve,reject)=> {
    setTimeout(()=> resolve('Sucesso no processo assíncrono'), 3000);
});

async function recuperarDados(){
    await processoAssincrono.then(p => console.log(p));

    console.log("Processamento assincrono 1");

    //api
    await fetch('https://jsonplaceholder.typicode.com/comments')
    .then(r=> r.json())
    .then(d=> console.log('Comentarios: ',d));

    console.log("Processamento assincrono 2");
    //api
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(r=> r.json())
    .then(d=> console.log('Posts: ',d));

    console.log("Processamento assincrono 3");

    return 'fim';
}
recuperarDados().then(p => console.log(p));