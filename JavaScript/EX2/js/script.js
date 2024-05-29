var nome = prompt('Digite seu nome:')
var altura = prompt('Digite sua altura em centímetros:')
var peso = prompt('Digite seu peso em kilogramas :')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100
m = peso / (altura * altura)

if (m < 16){
    c = 'Baixo peso muito grave'
} if (m >= 16 && m <= 16.99){
    c = 'Baixo peso grave'
} if (m >= 17 && m <= 18.49){
    c = 'Baixo peso'
} if (m >= 18.50 && m <= 24.99){
    c = 'Peso normal'
} if (m >= 25 && m <= 29.99){
    c = 'Sobrepeso'
} if (m >= 30 && m <= 34.99){
    c = 'Obesidade grau I'
} if (m >= 35 && m <= 39.99){
    c = 'Obesidade grau II'
} if (m >= 40){
    c = 'Obesidade grau III'
}

document.write(nome + ' possui IMC de ' + m + ', sendo classificado como: '+ c)