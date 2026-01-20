setTimeout(()=>{
import('./import/lib.mjs')
    .then(module => console.log(module.saudacao()));
    return;
}, 500);

setTimeout(()=>{
import('./import/lib.mjs')
    .then(module => console.log(module.getEnderecoByCEP(71065072).then(dados => console.log(dados))));
    return;
}, 2000);