function* testeGenerator(){
    console.log('Teste 1');
    yield console.log('Teste 2');
    console.log('Teste 3');

    return 2;
}

let meuGenerator = testeGenerator();//obj iterator

meuGenerator.next();

meuGenerator.next();
