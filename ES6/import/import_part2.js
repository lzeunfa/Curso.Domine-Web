let saudar = async function() {
    const modulo = await import('./import/lib.mjs');

    setTimeout(async ()=>{
        const msg = modulo.saudacao();
        console.log(msg);

    return;
}, 500);
}
saudar();

setTimeout(()=>{
import('./import/lib.mjs')
    .then(module => module.getEnderecoByCEP(71065072).then(dados => console.log(dados.localidade)));
    return;
}, 2000);