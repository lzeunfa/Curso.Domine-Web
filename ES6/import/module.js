/*
export async function aguardarPromise(){
    console.log('Inicio do processamento');

    function fetchDados(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve('Executou');
            },2000)
        });
    }

    const dados = await fetchDados();
    console.log(dados);
    console.log('Fim do processamento');

    return;
}

aguardarPromise();*/

console.log('Módulo importado');


export function fetchDados(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve('Executou');
            },2000)
        });
}

const dados = await fetchDados();
console.log(dados);

console.log('Fim do processamento');
