//var lista_funcionarios = ['Viviane', 'Rosangela', 'Carlos', 'Fernanda']

/*console.log(lista_funcionarios) 
document.write(lista_funcionarios[2])                

lista_funcionarios.forEach(function(valor, indice, array){
    //lógica
    console.log('indice ' + indice + valor)

    if(valor == 'Carlos'){
        array[indice] = 'um novo valor'
    }
    console.log(array)
})
console.log(lista_funcionarios)
document.write('<br>')
document.write(lista_funcionarios[2])*/

var lista_funcionarios = []

lista_funcionarios['x'] = 'Viviane'
lista_funcionarios[false] = 'Rosangela'
lista_funcionarios[14] = 'Miguel'
lista_funcionarios['kekw'] = 'Jorge'
lista_funcionarios[-45] = 'Carlos'

var f = function(valor, indice) {
    console.log(valor, indice)
}

lista_funcionarios.forEach(f)