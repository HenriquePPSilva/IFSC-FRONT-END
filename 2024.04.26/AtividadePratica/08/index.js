let array = [1,2,3,4,5,6,7,8,9,10]
let simOuNao = ""
function ex(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] == 1){
            simOuNao = "Sim"
        }else{
            simOuNao = "Não"
        }
    }
    console.log(`O número 1 está presente? ${simOuNao}`)
}
ex(array)