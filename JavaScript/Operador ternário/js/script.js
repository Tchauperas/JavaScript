var media = 6
var nota = prompt('Qual a nota do aluno?')
var faltas_permitidas = 15
var faltas_do_aluno  = prompt('Quantas vezes o aluno faltou?')

/*if (nota >= media && faltas_do_aluno <= faltas_permitidas){
    document.write('O aluno passou.')
} else {
    document.write('O aluno reprovou.')
}*/

var resultado = (nota >= media && faltas_do_aluno <= faltas_permitidas) ? 'Aprovado' : 'reprovado'

document.write(resultado)