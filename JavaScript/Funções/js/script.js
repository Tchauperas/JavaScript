function calcularAreaTerreno (largura, comprimento){
    //lógica
    var area = largura * comprimento

    return area
}

var largura = prompt('Digite a largura:')
var comprimento = prompt('Digite o comprimento:')

var area = calcularAreaTerreno(largura, comprimento)

document.write('O terreno possui ' + area + ' metros quadrados.')