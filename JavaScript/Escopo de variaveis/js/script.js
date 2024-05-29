//3 escopos: global, função e bloco
var serie = 'Friends'
//escopo de bloco
if (true) {
    var serie2 = 'Game of thrones'
    document.write(serie)
}

document.write(serie2)

document.write('<br>')

function x() {
    var serie3 = 'The walking Dead'
    document.write(serie)
    document.write(serie2)
}

document.write('<br>')

x()

document.write('<br>')
document.write(serie3)
