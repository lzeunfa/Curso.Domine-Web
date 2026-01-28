    //um software de marcenaria
    //cadeira e sofá

    //paradigma procedural

    //cadeira

    /*&let cadeiras = [
        {qtde_pernas: 4, giratoria: false, cor: "azul"},
        {qtde_pernas: 1, giratoria: true, cor: "vermelha"}
    ];

    function girar_cadeira(indice){
        if(cadeiras[indice].giratoria === true){
            console.log("girou");
        }else{
            console.log("não girou");
        }

        return;
    }

    function adicionar_cadeira(qtde_pernas,giratoria,cor){
        let cadeira ={qtde_pernas: qtde_pernas, giratoria: giratoria, cor: cor};

        cadeiras.push(cadeira);

        console.log(cadeira);
        return;
    }

    adicionar_cadeira(2,true,"roxo");

    girar_cadeira(0);

    console.log(cadeiras);*/
    

    //paradigma de OO

    class Cadeira{
        constructor(qtde_pernas,giratoria,cor){
            this.qtde_pernas = qtde_pernas;
            this.giratoria  = giratoria;
            this.cor    = cor;
        }

        girarCadeira(){
            if(this.giratoria === true){
                console.log("girou");
            }else{
                console.log("não girou");
            }
        }

        
    }

    let cadeiras = [];
    cadeiras.push(new Cadeira(4,false,"vermelho"));

    console.log(cadeiras[0].qtde_pernas);

    class Sofa{
        constructor(qtde_lugares,reclinavel,cor,tecido){
            this.qtde_lugares = qtde_lugares;
            this.reclinavel = reclinavel;
            this.cor = cor;
            this.tecido = tecido
        }

        reclinarSofa(){
            if(this.reclinavel === true){
                console.log("Assento reclinavel");
            }else{
                console.log("Não é reclinavel");
            }
        }
    }

    let sofas = [];
    sofas.push(new Sofa(2,true,"marrom","couro"));
    sofas.push(new Sofa(3,false,"cinza","algodão"));

    console.log(sofas[1]);