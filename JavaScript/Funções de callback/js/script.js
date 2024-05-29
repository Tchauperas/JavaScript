function exibirArtigo(id, callbackSucesso, callbackErro) {
    //lógica: recuperar o id vai requisição http
    if (true) {
        callbackSucesso('Funçõoes de callback em JS', 'A operação foi um sucesso')
    } else {
        callbackErro('Erro ao recuperar os dados')
    }
}

var callbackSucesso = function (titulo, descricao) {
    document.write('<h1>' + titulo + '</h1>')
    document.write('<hr>')
    document.write('<p>' + descricao + '</p>')
}
var callbackErro = function (alerta) {
    document.write('<h1>' + alerta + '</h1>')
}

exibirArtigo (1, callbackSucesso, callbackErro)
