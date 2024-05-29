function soma(){
    var resultado = 0
    for(var i in arguments){
        resultado += arguments[i]
    }    
    return resultado
}
console.log(soma(3, 5, 6.44))
