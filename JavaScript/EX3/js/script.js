var num1 = prompt('Digite um numero:')
var op = prompt('Qual será a operação?')
var num2 = prompt('Digite outro numero:')

function calc(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var resultado = 0

    if (op == 'soma'){
        resultado = num1 + num2
    } else {
        resultado = num1 - num2
    }

    return resultado;
}

document.write(resultado)

