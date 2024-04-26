let array = [2,4,5,6,7,8,9]
let soma = 0
function ex(array){
    let media
    for(let i = 0; i < array.length; i++){
        soma += array[i]
        media = soma / array.length
    }
    console.log(media)
}
ex(array)