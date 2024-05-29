var elementos = []
elementos['el'] = ['el1', 'el2', 'el3']
elementos['num'] = ['num1', 'num2', 'num3']

//elementos['el'].push('el_x')
//elementos['el'].unshift('el_y')
elementos['el'].pop()
elementos['el'].shift()

//elementos['num'].push('num_x')
//elementos['num'].unshift('num_y')
elementos['num'].pop()
elementos['num'].shift()

//incluir elementos no final do array
//elementos.push('el2')

//incluir elementos no inicio da array
//elementos.unshift('el3')

//excluir elemento no final do array
//elementos.pop()

//excluir elemento do inicio do array
//elementos.shift()

console.log(elementos)