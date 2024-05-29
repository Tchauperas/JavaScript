/*var janela

function abrirPopUp() {
    janela = window.open('', 'nova_janela', 'width=200, height=100')
}

function fecharPopUp() {
    janela.close()
}*/

/*var altura = window.screen.availHeight
var largura = window.screen.availWidth

//document.write('Altura do navegador é: ' + altura)
//document.write('<br>')
//document.write('Largura do navegador é: ' + largura)

if(largura <= 500) {
    document.write('Lógica para impressão do menu versão mobile.')
} else {
    document.write('Lógica para impressão do menu versão web.')   
}*/

/*
function acessarGoogle() {
    window.location.href="http://www.google.com"
}

function acessarMangaLivre(){
    window.location.href="http://www.mangalivre.net"
}
*/

//setTimeout(function() {document.write('teste')}, 2000)

var i = 5

var x = setInterval(function () {
    document.write(i + '<br>') 
    i--

    if(i === 0) {
        //window.location.reload()
        clearInterval(x)
    }
}, 1000)