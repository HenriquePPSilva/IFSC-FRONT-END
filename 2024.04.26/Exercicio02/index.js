let array = [2,3,4,6,7]
let contadorInvertido = array.length - 1 

function inverterArray(array){
    let arrayInvertido = []
    for(let i = 0; i < array.length; i++){
        arrayInvertido.push(array[contadorInvertido])
        contadorInvertido--
    }
    console.log(arrayInvertido)
}
inverterArray(array)