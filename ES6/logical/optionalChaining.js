let obj = {
    2021: {
        Janeiro: {
            pessoal: 2000,
            casa: 1500,
            investimento:1000
        },
        Fevereiro: {
            pessoal: 2200,
            casa: 1600,
            investimento:1400
        }
    }
};

// optinal chaining -> ?
console.log(obj['2021'].Janeiro?.pessoal);
