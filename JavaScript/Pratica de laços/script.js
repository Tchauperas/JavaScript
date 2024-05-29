var lista_frutas = []
lista_frutas[0] = 'Banana'
lista_frutas[1] = 'Maçã' 
lista_frutas[2] = 'Melão'
lista_frutas[3] = 'Melancia'

console.log(lista_frutas.length)

var y = 0

while(y < lista_frutas.length) {
    document.write(lista_frutas[y] + '<br>')
    y++
}