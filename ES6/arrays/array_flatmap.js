let nomes = [
    'Joao, jose, maria',
    'sandra, paulo',
    'antonia, fernanada, marcos'
]

let nomesMap = nomes.map(item => {
    return item.split(',')
});

console.log(nomesMap);

let nomesFlatMap = nomes.flatMap(item => {
    return item.split(',')
});

console.log(nomesFlatMap);