function validacaoSudoku(escolhas){
    //verifica se o array de 9 elementos contém n de 1 a 9
    const validacaoGrupo = (grupo) =>{
        const set = new Set(grupo);

        if(set.size!== 9) return false;

        for (let num of set) {
            if (typeof num!=='number' || num<1 || num>9)return false;
        }
        return true;
    };

    //verifica as linhas
    for(let i = 0; i<9; i++){
        if(!validacaoGrupo(escolhas[i])) return false;
    }

    //verifica as colunas
    for (let j = 0; j < 9; j++){
        const coluna = [];

        for(let  i=0; i < 9; i++){
            coluna.push(escolhas[i][j]);
        }
        if(!validacaoGrupo(coluna))return false;
    }

    //verifica os blocos 3x3
    for(let iLinha = 0; iLinha <9; iLinha +=3){
        for(let iColuna = 0; iColuna < 9; iColuna += 3){
            const bloco = [];
            for (let i=0; i < 3; i++){
                for(let j=0; j<3;j++){
                    bloco.push(escolhas[iLinha + i][iColuna + j]);
                }
            }
            if(!validacaoGrupo(bloco))return false;
        }
    }

    //tudo válido
    return true;
}

    const sudokuEscolhas = [
    [8, 2, 7, 1, 5, 4, 3, 9, 6],
    [9, 6, 5, 3, 2, 7, 1, 4, 8],
    [3, 4, 1, 6, 8, 9, 7, 5, 2],
    [5, 9, 3, 4, 6, 8, 2, 7, 1],
    [4, 7, 2, 5, 1, 3, 6, 8, 9],
    [6, 1, 8, 9, 7, 2, 4, 3, 5],
    [7, 8, 6, 2, 3, 5, 9, 1, 4],
    [1, 5, 4, 7, 9, 6, 8, 2, 3],
    [2, 3, 9, 8, 4, 1, 5, 6, 1]
    ];

console.log(validacaoSudoku(sudokuEscolhas));//false