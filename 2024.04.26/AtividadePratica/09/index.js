let nomesAlunos = ["Eduardo", "Henrique", "Edudu", "Arthur", "Adriano", "Hugo"]
let nomeDesejado = "Henrique"
let simOuNao = ""
for(let i = 0; i < nomesAlunos.length; i++){
    if(nomesAlunos[i] == nomeDesejado){
        simOuNao = `O nome ${nomeDesejado} está no array`
    }else{
        simOuNao = `O nome ${nomeDesejado} não está no array`
    }
}
console.log(simOuNao)