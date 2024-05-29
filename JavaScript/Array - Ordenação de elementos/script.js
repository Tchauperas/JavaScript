/*var elementos = []
elementos[1] = 'terra'
elementos[2] = 'fogo'
elementos[3] = 'agua'
elementos[4] = 'ar'

console.log(elementos.sort())*/

var elementos = []
elementos[0] = 12
elementos[1] = 56
elementos[2] = 1
elementos[3] = 52
elementos[4] = 24
elementos[5] = 33
elementos[6] = 8

console.log(elementos.sort(order))

function order(a, b) {
    return a - b
}