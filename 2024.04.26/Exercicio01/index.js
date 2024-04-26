let nomes = ["Henrique", "Edudu", "Madeirinha", "Enzo", "Guesser"]
let notas = [4,2,9,6,8]
let maiorNome
function maiorNota(listaNomes, listaNotas){
    let maior = 0
    for(let i = 0; i < listaNomes.length; i++){
        if(listaNotas[i] > maior) {
            maior = listaNotas[i]
            maiorNome = listaNomes[i]
        }
    }
    console.log(`A maior foi a do ${maiorNome} com a nota ${maior}`)
}

maiorNota(nomes, notas)