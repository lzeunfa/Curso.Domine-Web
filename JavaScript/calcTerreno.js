function calcAreaTerreno(comprimento, largura, altura,base){
    let area;
    switch(opcao){
        case 1:
            //pra caso for um quadrado
            area = comprimento**2;
            break;
        case 2:
            //pra caso for um retangulo
            area = comprimento*largura;
            break;
        case 3:
            //pra caso seja um triângulo
            area = (base*altura)/2;
            break;
        default:
            console.log(`Error`);
            area = "(valor não encontrado)";
            break;
    }

    return console.log(`Sua àrea é de ${area} metros`);
}

const opcao = 2;
calcAreaTerreno(10,4,8,5);

