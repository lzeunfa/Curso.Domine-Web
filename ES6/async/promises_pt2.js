let promessa = new Promise((resolve,reject) => {
    /*try{

    }catch(e){

    }*/

    //requisicao http para recuperar relacao de usuarios
    setTimeout(()=>{

        let resposta_requi ={};

        //erro na requisicao
        if (true) {

            resposta_requi ={
                codigo: 150, erro: 'falha de autorizacao'
            }

            reject(resposta_requi);
        }

        resposta_requi ={
                0:{id: 1, nome: 'Eliseu'}
        }

        resolve(resposta_requi);

    },4000);
}).then(dados=>{
    console.log('Operacao sequencial: ', dados);
}).catch(erro => {
    console.log('Operacao sequencial catch: ', erro);
});