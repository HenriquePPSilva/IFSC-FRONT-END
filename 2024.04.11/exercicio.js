let arrays = [["Henrique", "Marcos", "Hugo"], [1, 2, 2], [10, 5,7],[4, 9, 6],[7, 7,8]]

//tem que fazer media ponderada
function calculaConceito(parametro){
    for(let i = 2; i < parametro.length; i++){
        console.log(arrays[i])
        for(let j = 0; j < parametro[i].length; j++){
            let fds = arrays[i][j] * arrays[1][j] 
            console.log(fds)

        }
    }
}

calculaConceito(arrays)