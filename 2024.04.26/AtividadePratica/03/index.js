let array = [3,5,6,9,3,4]
let menor = Infinity

for(let i = 0; i < array.length; i++){
    if(array[i] <  menor) menor = array[i]
}
console.log(menor)