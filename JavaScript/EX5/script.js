var objetos = []
objetos[0] = 'Cadeira'
objetos[1] = 'Impressora'
objetos[2] = 'Garfo'

var x = document.getElementById('texto')

function retornar_objeto() {
    var objeto = document.getElementById('objeto').value

    if (objeto != '') {
        if (objeto.indexOf(objeto) !== -1) {
            alert('O objeto ja foi adcionado')
        } else {
            objetos.push(objeto)
            console.log(objetos)

            document.getElementById('objeto').value = ''
        }
    } else {
        alert('Informe um objeto válido')
    }
}

function ordenar_objeto() {
    objetos.sort()
    console.log(objetos)
}
