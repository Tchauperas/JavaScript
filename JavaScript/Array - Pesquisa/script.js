var elementos = []
elementos[1] = 'el1'
elementos[2] = 'el2'
elementos[3] = 'el3'
elementos[4] = 'el4'

var auxiliar = elementos.indexOf(prompt('Digite um elemento'))

if (auxiliar === -1 ){
    console.log('Elemento não existe')
} else {
    console.log('Elemento está na posição '+ auxiliar)
}
