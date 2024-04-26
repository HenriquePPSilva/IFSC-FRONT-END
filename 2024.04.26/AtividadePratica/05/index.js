let array = [1,2,3,4,5,6,7,8,9,10]
let arrayImpares = []
function ex(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] % 2 == 1){
             arrayImpares.push(array[i])
        }
    }
    console.log(arrayImpares)
}
ex(array)