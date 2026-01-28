import {saudacao, getEnderecoByCEP} from './import/lib.mjs';

console.log(saudacao());
getEnderecoByCEP(71065072)
    .then(dados=> console.log(dados.bairro));